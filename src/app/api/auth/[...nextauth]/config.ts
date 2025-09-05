/* eslint-disable no-console */
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

import type { NextAuthOptions, Session } from 'next-auth';
import { getServerSession } from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { GoogleProfile } from 'next-auth/providers/google';
import GoogleProvider from 'next-auth/providers/google';

import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import qs from 'qs';

import type { LoginMutationType } from '@/app/(auth)/login/_model/login';
import type { OfferVariables, RegisterMutationType } from '@/app/(auth)/signup/_model/register';

import { API_URL, APPLE_CLIENT_ID, APPLE_SECRET, APPLE_SECRET_STG } from '@/constants';

import { firebaseAuth } from '@/lib/firebase';

import { isDevelopment } from '@/utils/common';

import type { AuthIntent } from './next-auth';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
      idToken: true,
    }),
    AppleProvider({
      clientId: APPLE_CLIENT_ID,
      clientSecret: APPLE_SECRET,
      authorization: {
        params: {
          scope: 'name email',
          response_mode: 'form_post',
          response_type: 'code',
        },
      },
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const res = await axios.postForm(`${API_URL}/v1/login`, credentials, {
          headers: { build: 999 },
        });

        if (res.data) {
          const data = res.data as LoginMutationType;

          if (data.success) {
            cookies().set('is-login-success', 'true');
            return res.data.data;
          } else {
            throw new Error(JSON.stringify(data.error));
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    signIn: async ({ account }: any) => {
      try {
        if (account?.provider === 'google') {
          const credential = GoogleAuthProvider.credential(account.id_token);
          await signInWithCredential(firebaseAuth, credential);
        }

        return true;
      } catch (err) {
        console.error('SignIn callback failed', err, account);
        return false; // forces redirect with OAuthCallback error
      }
    },

    jwt: async params => {
      const { token, user, account, profile }: any = params;

      const config: AxiosRequestConfig = { headers: { platform: 'web', build: 999 } };

      const cookieStore = cookies();
      const authIntent: RequestCookie | undefined = cookieStore.get('auth-intent');
      const intent = (authIntent?.value ?? 'signIn') as AuthIntent;

      // ✅ GOOGLE LOGIN FLOW
      if (account && account.provider === 'google') {
        const firebase_token = await firebaseAuth.currentUser?.getIdToken(true);
        const payload = { email: profile?.email, social_login: 'true', token: firebase_token };

        cookies().delete('auth-intent');

        const setCookiesAndJWTs = (
          response: AxiosResponse<LoginMutationType | RegisterMutationType>,
          authIntent: AuthIntent,
        ) => {
          const data = response.data;

          if (data.success) {
            token.provider = 'google';
            token.first_name = (profile as GoogleProfile).given_name;
            token.last_name = (profile as GoogleProfile).family_name;

            if (authIntent === 'signUp') {
              cookies().set('is-new-user', 'true');
            } else if (authIntent === 'signIn') {
              cookies().set('is-login-success', 'true');
            }

            return { ...token, ...data.data, ...user };
          } else {
            throw new Error(JSON.stringify(data.error));
          }
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const loginWithGoogle = async (): Promise<any> => {
          const res = await axios.postForm<LoginMutationType>(`${API_URL}/v1/login`, payload, config);

          if (!res.data.success && res.data?.error?.message?.includes('Account Not Found')) {
            return signUpWithGoogle();
          }

          return setCookiesAndJWTs(res, 'signIn');
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const signUpWithGoogle = async (): Promise<any> => {
          const offer = cookies().get('offer')?.value || '';
          const parsedOffer: OfferVariables = qs.parse(offer);
          const gbraid = cookies().get('gbraid')?.value || '';
          const wbraid = cookies().get('wbraid')?.value || '';
          const redTrackClickId = cookies().get('rtkclickid-store')?.value || '';

          const utm: OfferVariables = {
            transaction_id: redTrackClickId || parsedOffer.transaction_id || null,
            source: parsedOffer.source || null,
            utm_source: parsedOffer.utm_source || null,
            utm_campaign: parsedOffer.utm_campaign || null,
            utm_id: parsedOffer.utm_id || null,
            utm_content: parsedOffer.utm_content || null,
            utm_term: parsedOffer.utm_term || null,
            gbraid: parsedOffer.gbraid || gbraid || null,
            wbraid: parsedOffer.wbraid || wbraid || null,
          };

          const res = await axios.postForm<RegisterMutationType>(
            `${API_URL}/v1/register`,
            { ...payload, first_name: profile?.name, ...utm },
            config,
          );

          if (!res.data.success && res.data?.error?.message?.includes('email already exists')) {
            return loginWithGoogle();
          }

          return setCookiesAndJWTs(res, 'signUp');
        };

        return intent === 'signUp' ? signUpWithGoogle() : loginWithGoogle();
      }

      return { ...token, ...user };
    },
    session: async params => {
      const { session, token } = params;

      const firstName = token.first_name || '';
      const lastName = token.last_name || '';
      const fullName = token.name || `${firstName} ${lastName}`.trim();

      return {
        user: {
          user_id: token.user_id,
          name: fullName,
          email: session.user?.email || '',
          image: session.user?.image || token.photo || '',
          first_name: firstName,
          last_name: lastName,
          token: token.token,
          provider: token.provider,
        },
        expires: session.expires,
      } satisfies Session;
    },
    redirect: async ({ url, baseUrl }) => {
      // allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  logger: {
    error(code, metadata) {
      if (isDevelopment) {
        console.error('NEXT_AUTH', code, metadata);
      }
    },
    warn(code) {
      if (isDevelopment) {
        console.warn('NEXT_AUTH', code);
      }
    },
    debug(code, metadata) {
      if (isDevelopment) {
        console.debug('NEXT_AUTH', code, metadata);
      }
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions;

export function getServerAuth(
  ...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, authOptions);
}
