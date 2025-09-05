'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { OAuthProvider, signInWithPopup } from 'firebase/auth';
import { Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react';
import qs from 'qs';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import type { OfferVariables, RegisterMutationType } from '@/app/(auth)/signup/_model/register';
import useClickEvent from '@/app/(auth)/signup-v3/_usecase/use-click-event';
import type { AuthIntent } from '@/app/api/auth/[...nextauth]/next-auth';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import { API_URL } from '@/constants';

import useDisclosure from '@/hooks/use-disclosure';

import { firebaseAuth } from '@/lib/firebase';

import { useSignupContext } from '../../_context';

import useFormEvent from './usecase/use-form-event';
import { PasswordChecklist, passwordRules } from './PasswordChecklist';

const SignupForm = () => {
  const router = useRouter();
  const [isLoadingApple, setIsLoadingApple] = useState<any>(false);
  const [isHiddenEmail, setIsHiddenEmail] = useState<any>(false);
  const [stateIsMacDevice, setStateIsMacDevice] = useState<any>();
  const [stateAppleFlowHideEmail, setStateAppleFlowHideEmail] = useState<any>();
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();
  const isLoginSuccess = getCookie('is-login-success');

  const [stateIsIOSDevice, setStateIsIOSDevice] = useState<any>();

  const { isOpen: isPasswordOpen, toggle: togglePassword } = useDisclosure();

  const { form } = useSignupContext();
  const { onSubmit, loading } = useFormEvent();
  const { handleOnSignupWithGoogleClick, handleOnSignupWithAppleClick } = useClickEvent();

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
            // age: '30',
            // gender: '0',
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
          console.log('@rawInfo', rawInfo);

          isHiddenEmail = rawInfo?.is_private_email === true;
        } catch (e) {}
      }

      // Priority 2: providerData email
      // if (!isHiddenEmail && appleProviderData?.email) {
      //   isHiddenEmail = appleProviderData.email.endsWith('@privaterelay.appleid.com');
      // }
      console.log('@isHiddenEmail', isHiddenEmail);

      if (isHiddenEmail) {
        localStorage.setItem('apple-flow-hide-email', JSON.stringify(result));
        setIsHiddenEmail(true);
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
      setStateAppleFlowHideEmail(dataParse);
    };

    handleAppleFlowOnHideEmail();
  }, [isHiddenEmail]);

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
    }
  }, [isLoginSuccess, router, sessionLocalStorage]);

  const password = form.watch('password') || '';
  const isValidPassword = Object.values(passwordRules).every(rule => rule(password));

  return (
    <div className="flex max-h-[70vh] flex-1 flex-col items-center gap-3 overflow-y-auto">
      <Card className="w-[23rem] max-w-xs border-none shadow-none sm:max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Tyr Rewards Sign Up</CardTitle>
          <CardDescription className="pt-4 text-center text-[#374151]">
            Please provide your real email to receive rewards and verification
          </CardDescription>{' '}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="flex flex-col" onSubmit={onSubmit}>
              <div className="rounded-lg bg-[#F0F1F3] p-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="mb-2 flex items-center gap-2">
                        <Mail strokeWidth={1.5} />
                        <p className="font-normal">Email</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {!stateAppleFlowHideEmail?.user && (
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel className="mb-2 flex items-center gap-2">
                            <LockKeyhole strokeWidth={1.5} />
                            <p className="font-normal">Password</p>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter password"
                              type={isPasswordOpen ? 'text' : 'password'}
                              {...field}
                              endIcon={
                                isPasswordOpen ? (
                                  <EyeOff className="cursor-pointer" onClick={togglePassword} />
                                ) : (
                                  <Eye className="cursor-pointer" onClick={togglePassword} />
                                )
                              }
                            />
                          </FormControl>
                          {password.length > 0 && <PasswordChecklist password={password} />}
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                )}
              </div>

              <Button
                className="mb-4 mt-2"
                disabled={
                  stateAppleFlowHideEmail?.user
                    ? !form.formState.isDirty && !form.formState.isValid
                    : !form.formState.isDirty || !isValidPassword
                }
                loading={loading}
                type="submit"
              >
                {stateAppleFlowHideEmail?.user ? 'Continue' : 'Start Earning Now'}
              </Button>
            </form>
          </Form>

          {!stateAppleFlowHideEmail?.user && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <Separator className="w-5/12" />
                <span className="w-2/12 text-center text-xs font-thin text-[#C2C6CE]">or</span>
                <Separator className="w-5/12" />
              </div>

              {(stateIsIOSDevice || stateIsMacDevice) && (
                <Button
                  className="bg-black font-normal text-white"
                  loading={isLoadingApple}
                  variant="outline"
                  onClick={handleAppleSignUp}
                >
                  <FaApple className="mr-2 h-4 w-4" /> Sign up With Apple Account
                </Button>
              )}

              <Button className="font-normal" variant="outline" onClick={handleOnSignupWithGoogleClick}>
                <FcGoogle className="mr-2 h-4 w-4" /> Sign up with Google Account
              </Button>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <label className="cursor-pointer select-none text-center" htmlFor="terms">
            By signing up, you agree to our{' '}
            <Link className="text-sm text-primary hover:underline" href="/terms-of-service">
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link className="text-sm text-primary hover:underline" href="/privacy-policy">
              Privacy Policy.
            </Link>
          </label>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupForm;
