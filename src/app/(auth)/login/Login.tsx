'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import useDisclosure from '@/hooks/use-disclosure';

import HaveNoAccount from '../_components/HaveNoAccount';

import { OfferVariables, RegisterMutationType } from '@/app/(auth)/signup/_model/register';
import { AuthIntent } from '@/app/api/auth/[...nextauth]/next-auth';
import { API_URL } from '@/constants';
import { firebaseAuth } from '@/lib/firebase';
import axios, { AxiosRequestConfig } from 'axios';
import { FacebookAuthProvider, OAuthProvider, signInWithPopup } from 'firebase/auth';
import qs from 'qs';
import { signinSchema } from './_model/login';
import type { SignInSchemaType } from './_model/login/types';
import useClickEvent from './_usecase/use-click-event';
import useSignInEvent from './_usecase/use-signin-event';

const LoginPage = () => {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const [stateIsIOSDevice, setStateIsIOSDevice] = useState<any>();
  const [stateIsMacDevice, setStateIsMacDevice] = useState<any>();
  const [isLoadingApple, setIsLoadingApple] = useState<any>(false);
  const { isOpen: isPasswordVisible, toggle: togglePassword } = useDisclosure();
  const router = useRouter();

  const form = useForm<SignInSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(signinSchema),
    defaultValues: { email: '', password: '' },
  });

  const { loading, onSubmit } = useSignInEvent({ form });
  const {
    handleOnSignInClick,
    handleOnSignInWithGoogleClick,
    handleOnSignInWithAppleClick,
    handleOnSignupClick,
    handleOnSignInWithFacebookClick,
  } = useClickEvent();
  const isLoginSuccess = getCookie('is-login-success');

  const handleLoginFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();

      const result = await signInWithPopup(firebaseAuth, provider);
      const credential: any = FacebookAuthProvider.credentialFromResult(result);

      handleOnSignInWithFacebookClick();
    } catch (error) {
      console.log('@error facebook login', error);
    }
  };

  const handleAppleLogin = async () => {
    try {
      setIsLoadingApple(true);
      const config: AxiosRequestConfig = { headers: { platform: 'web', build: 999 } };

      const authIntent: any = getCookie('auth-intent');
      const intent = (authIntent ?? 'signIn') as AuthIntent;

      const provider = new OAuthProvider('apple.com');

      const result: any = await signInWithPopup(firebaseAuth, provider);
      const user: any = result.user;
      const credential: any = OAuthProvider.credentialFromResult(result);
      const idToken = await user.getIdToken();

      handleOnSignInWithAppleClick();

      const { email, providerData }: any = user;

      const valEmail = email;
      const valName = providerData?.[0]?.displayName || providerData?.[1]?.displayName || '';
      const [first_name, ...lastParts] = valName.split(' ');
      const last_name = lastParts.join(' ');

      const payload = { email: valEmail, social_login: 'true', token: idToken };
      deleteCookie('auth-intent');

      const setCookiesAndJWTs = (response: any, authIntent: any) => {
        const data = response.data;
        if (data.success) {
          credential.provider = 'apple';
          credential.first_name = first_name;
          credential.last_name = last_name;

          setCookie('session-token-apple', data?.data?.token);
          localStorage.setItem('sessions', JSON.stringify(data?.data));

          if (authIntent === 'signUp') {
            setCookie('is-new-user', 'true');

            router.push('/new-user-apple');
            setIsLoadingApple(false);
          } else if (authIntent === 'signIn') {
            setCookie('is-login-success', 'true');

            router.push('/sign-in-apple');
            setIsLoadingApple(false);
          }

          const payload = { ...credential, ...data.data, ...user };

          return payload;
        } else {
          throw new Error(JSON.stringify(data.error));
        }
      };

      const loginWithApple = async (): Promise<any> => {
        const instanceLogin = axios.create({
          baseURL: API_URL,
          withCredentials: true,
          headers: { build: 999, platform: 'web' },
        });

        instanceLogin.interceptors.request.use(async function (req) {
          return req;
        });

        const res: any = await instanceLogin.postForm<RegisterMutationType>('/api/login', payload, { baseURL: '' }); // console.log('@res loginWithApple', res);

        if (!res.data.success && res.data?.error?.message?.includes('Account Not Found')) {
          return signUpWithApple();
        }

        return setCookiesAndJWTs(res, 'signIn');
      };

      const signUpWithApple = async (): Promise<any> => {
        const offer = getCookie('offer') || '';
        const parsedOffer: OfferVariables = qs.parse(offer);
        const gbraid = getCookie('gbraid') || '';
        const wbraid = getCookie('wbraid') || '';
        const redTrackClickId = getCookie('rtkclickid-store') || '';

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

        const instance = axios.create({
          baseURL: API_URL,
          withCredentials: true,
          headers: { build: 999, platform: 'web' },
        });

        instance.interceptors.request.use(async function (req) {
          return req;
        });

        const res: any = await instance.postForm<RegisterMutationType>(
          '/api/register/new',
          {
            ...payload,
            first_name,
            last_name,
            ...utm,
            // age: '',
            // gender: '',
          },
          { baseURL: '' },
        );
        // console.log('@res register', res);

        if (!res.data.success && res.data?.error?.message?.includes('Account Not Found')) {
          return signUpWithApple();
        }

        if (!res.data.success && res.data?.error?.message?.includes('email already exists')) {
          return loginWithApple();
        }

        return setCookiesAndJWTs(res, 'signUp');
      };

      // const appleProviderData = user.providerData.find((p: any) => p.providerId === 'apple.com');

      let isHiddenEmail = false;

      // Priority 1: rawUserInfo
      if (result?._tokenResponse?.rawUserInfo) {
        try {
          const rawInfo = JSON.parse(result._tokenResponse.rawUserInfo);
          isHiddenEmail = rawInfo?.is_private_email === true;
        } catch (e) {}
      }

      // Priority 2: providerData email
      // if (!isHiddenEmail && appleProviderData?.email) {
      //   isHiddenEmail = appleProviderData.email.endsWith('@privaterelay.appleid.com');
      // }

      if (isHiddenEmail) {
        localStorage.setItem('apple-flow-hide-email', JSON.stringify(result));
        router.push('/signup');
        return true;
      } else {
        return intent === 'signUp' ? signUpWithApple() : loginWithApple();
      }
    } catch (error) {
      console.error('Error handleAppleLogin:', error);
    }
  };

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  useEffect(() => {
    if (isLoginSuccess === 'true' || sessionLocalStorage) {
      router.push('/offerwall');
      window.location.reload();
    }
  }, [isLoginSuccess, router, sessionLocalStorage]);

  useEffect(() => {
    const handleCheckiOSDevice = () => {
      if (typeof navigator !== 'undefined') {
        const ua = navigator.userAgent || navigator.vendor || window.opera;

        const isIOS = /iPhone|iPad|iPod/i.test(ua);
        const isMac = /Macintosh|Mac OS X/i.test(ua) && !isIOS; // avoid counting iPadOS as Mac

        setStateIsIOSDevice(isIOS);
        setStateIsMacDevice(isMac); // you can store separately if needed      }
      }
    };

    handleCheckiOSDevice();
  }, []);

  if (isLoginSuccess === 'true') {
    return <div />;
  }

  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <Card className="w-[23rem] max-w-xs border-none shadow-none sm:max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-primary">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input autoComplete="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      {isPasswordVisible ? (
                        <EyeOff className="cursor-pointer" onClick={togglePassword} />
                      ) : (
                        <Eye className="cursor-pointer" onClick={togglePassword} />
                      )}
                    </div>
                    <FormControl>
                      <Input
                        autoComplete="current-password"
                        placeholder="Enter password"
                        type={isPasswordVisible ? 'text' : 'password'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-2" loading={loading} type="submit" onClick={handleOnSignInClick}>
                Sign In
              </Button>
            </form>
          </Form>
          <div className="my-6 flex items-center">
            <Separator className="w-5/12" />
            <span className="w-2/12 text-center">OR</span>
            <Separator className="w-5/12" />
          </div>

          {(stateIsIOSDevice || stateIsMacDevice) && (
            <Button
              className="mb-6 w-full bg-black font-normal text-white"
              loading={isLoadingApple}
              variant="outline"
              onClick={handleAppleLogin}
            >
              <FaApple className="mr-2 h-4 w-4" /> Sign in With Apple Account
            </Button>
          )}

          <Button className="mb-6 w-full font-normal" variant="outline" onClick={handleOnSignInWithGoogleClick}>
            <FcGoogle className="mr-2 h-4 w-4" /> Sign in With Google Account
          </Button>

          {/* <Button className="w-full font-normal" variant="outline" onClick={handleLoginFacebook}>
            <FaFacebook className="mr-2 h-4 w-4 text-[#1278F3]" /> Sign in With Facebook Account
          </Button> */}
        </CardContent>
      </Card>
      <HaveNoAccount onSignupClick={handleOnSignupClick} />
    </div>
  );
};

export default LoginPage;
