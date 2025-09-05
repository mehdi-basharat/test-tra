'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Mail } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

import { useSignupContext } from '@/app/(auth)/signup/_context';
import { OfferVariables, RegisterMutationType } from '@/app/(auth)/signup/_model/register';
import { AuthIntent } from '@/app/api/auth/[...nextauth]/next-auth';
import { API_URL } from '@/constants';
import useAmplitudeContext from '@/hooks/use-amplitude';
import { firebaseAuth } from '@/lib/firebase';
import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { FacebookAuthProvider, OAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import { FaApple } from 'react-icons/fa';
import HaveAccount from '../../../_components/HaveAccount';
import useClickEvent from '../../_usecase/use-click-event';

const SignupOpt = () => {
  const router = useRouter();
  const { emitter } = useSignupContext();

  const [stateIsIOSDevice, setStateIsIOSDevice] = useState<any>();
  const [stateIsMacDevice, setStateIsMacDevice] = useState<any>();
  const [isLoadingApple, setIsLoadingApple] = useState<any>(false);
  const [stateAppleFlowHideEmail, setStateAppleFlowHideEmail] = useState<boolean>(false);

  const [agreed, setAgreed] = useState<boolean>(false);
  const { trackAmplitudeEvent, stateVariant }: any = useAmplitudeContext();

  const {
    handleOnSignupClick,
    handleOnSignupWithGoogleClick,
    handleOnSigInClick,
    handleOnSignupWithAppleClick,
    handleOnSignupWithFacebookClick,
  } = useClickEvent();

  const handleSignUpFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();

      const result = await signInWithPopup(firebaseAuth, provider);
      const credential: any = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      handleOnSignupWithFacebookClick();
    } catch (error) {
      console.log('@error facebook login', error);
    }
  };

  const handleAppleSignUp = async () => {
    try {
      setIsLoadingApple(true);
      const authIntent: any = getCookie('auth-intent');
      const intent = (authIntent ?? 'signIn') as AuthIntent;

      const provider = new OAuthProvider('apple.com');

      const result: any = await signInWithPopup(firebaseAuth, provider);
      console.log('@result', result);

      const user: any = result.user;

      const credential: any = OAuthProvider.credentialFromResult(result);
      const idToken = await user.getIdToken();

      handleOnSignupWithAppleClick();

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

        const res: any = await instanceLogin.postForm<RegisterMutationType>('/api/login', payload, { baseURL: '' });

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
        emitter.emit('@signup/next');
        return true;
      } else {
        return intent === 'signUp' ? signUpWithApple() : loginWithApple();
      }
    } catch (error) {
      console.error('Error handleAppleLogin:', error);
    }
  };

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

  useEffect(() => {
    const handleAppleFlowOnHideEmail = () => {
      const dataParse = JSON.parse(localStorage.getItem('apple-flow-hide-email') || '{}');
      setStateAppleFlowHideEmail(dataParse?.user ? true : false);
    };

    handleAppleFlowOnHideEmail();

    if (stateAppleFlowHideEmail) {
      emitter.emit('@signup/next');
    }
  }, [stateAppleFlowHideEmail]);
  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <Card className="mb-12 w-[23rem] max-w-xs border-none shadow-none sm:max-w-sm">
        <CardHeader>
          {/* <CardTitle className="text-center">Start earning on your mobile</CardTitle> */}
          <CardTitle className="text-center text-primary">Sign Up</CardTitle>

          <CardDescription className="pt-4 text-center">
            Please provide your real email to receive rewards and verification
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            {(stateIsIOSDevice || stateIsMacDevice) && (
              <Button
                className="bg-black font-normal text-white"
                disabled={stateVariant === 'no_terms_checkbox' || stateVariant === 'no_terms_otp' ? false : !agreed}
                loading={isLoadingApple}
                variant="outline"
                onClick={handleAppleSignUp}
              >
                <FaApple className="mr-2 h-4 w-4" /> Sign up With Apple Account
              </Button>
            )}

            <Button
              className="font-normal"
              disabled={stateVariant === 'no_terms_checkbox' || stateVariant === 'no_terms_otp' ? false : !agreed}
              variant="outline"
              onClick={handleOnSignupWithGoogleClick}
            >
              <FcGoogle className="mr-2 h-4 w-4" /> Sign up With Google Account
            </Button>
            <Button
              className="font-normal"
              disabled={stateVariant === 'no_terms_checkbox' || stateVariant === 'no_terms_otp' ? false : !agreed}
              variant="outline"
              onClick={handleOnSignupClick}
            >
              <Mail className="mr-2 h-4 w-4" /> Sign up With email
            </Button>

            {/* <Button
              className="w-full font-normal"
              disabled={stateVariant === 'no_terms_checkbox' || stateVariant === 'no_terms_otp' ? false : !agreed}
              variant="outline"
              onClick={handleSignUpFacebook}
            >
              <FaFacebook className="mr-2 h-4 w-4 text-[#1278F3]" /> Sign up With Facebook Account
            </Button> */}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-3 pt-6">
          {stateVariant === 'no_terms_checkbox' || stateVariant === 'no_terms_otp' ? (
            <label className="cursor-pointer select-none" htmlFor="terms">
              By signing up, you agree to our{' '}
              <Link className="text-sm text-primary hover:underline" href="/terms-of-service">
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link className="text-sm text-primary hover:underline" href="/privacy-policy">
                Privacy Policy.
              </Link>
            </label>
          ) : (
            <>
              {!agreed && (
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex size-3 rounded-full bg-primary" />
                </span>
              )}

              <Checkbox
                id="terms"
                onCheckedChange={checked => {
                  setAgreed(!!checked);

                  trackAmplitudeEvent('Registration Flow', {
                    step_name: 'click_checkbox_terms',
                  });
                }}
              />
              <label className="cursor-pointer select-none" htmlFor="terms">
                I have read and agree to the&nbsp;
                <Link className="text-sm text-primary hover:underline" href="/terms-of-service">
                  Terms of Service
                </Link>
                &nbsp;and&nbsp;
                <Link className="text-sm text-primary hover:underline" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </label>
            </>
          )}
        </CardFooter>
      </Card>
      <HaveAccount onSignInClick={handleOnSigInClick} />
    </div>
  );
};

export default SignupOpt;
