'use client';
import { useState } from 'react';
import Link from 'next/link';

import { Mail } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

import HaveAccount from '../../../_components/HaveAccount';
import useClickEvent from '../../_usecase/use-click-event';
import useAmplitudeContext from '@/hooks/use-amplitude';

const SignupOpt = () => {
  const [agreed, setAgreed] = useState<boolean>(false);
  const { trackAmplitudeEvent, stateVariant }: any = useAmplitudeContext();

  const { handleOnSignupClick, handleOnSignupWithGoogleClick, handleOnSigInClick } = useClickEvent();

  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <Card className="mb-12 w-[23rem] max-w-xs border-none shadow-none sm:max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Start earning on your mobile</CardTitle>
          <CardDescription className="pb-4 text-center">
            Download the Tyr Rewards app on Google Play Store or Apple App Store now.
          </CardDescription>
          <CardTitle className="text-center text-primary">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <Button
              className="font-normal"
              disabled={stateVariant === 'no_terms_checkbox' || stateVariant === 'no_terms_otp' ? false : !agreed}
              variant="outline"
              onClick={handleOnSignupWithGoogleClick}
            >
              <FcGoogle className="mr-2 h-4 w-4" /> Sign up with Google Account
            </Button>
            <Button
              className="font-normal"
              disabled={stateVariant === 'no_terms_checkbox' || stateVariant === 'no_terms_otp' ? false : !agreed}
              variant="outline"
              onClick={handleOnSignupClick}
            >
              <Mail className="mr-2 h-4 w-4" /> Sign up with email
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-3">
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