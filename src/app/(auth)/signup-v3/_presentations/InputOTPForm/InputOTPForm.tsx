'use client';
import Image from 'next/image';

import verifyEmailImg from '@/app/(auth)/_assets/email-v2.svg';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

import { useSignupContext } from '../../_context';

import { useEffect, useState } from 'react';
import { useCountdown } from 'usehooks-ts';
import useFormEvent from './usecase/use-form-event';
import useOTPEvent from '@/app/(auth)/signup-v3/_usecase/use-otp-event';

const InputOTPForm = () => {
  const { emitter, form } = useSignupContext();
  const { onSubmit, loading } = useFormEvent();
  const { handleOnSendOTP } = useOTPEvent();

  const [stateLoadingResendOTP, setStateLoadingResendOTP] = useState(false);

  const [timeLeft, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 60,
    intervalMs: 1000,
    isIncrement: false,
  });

  const isErrorOTP = form.getFieldState('otp')?.error;

  useEffect(() => {
    const handleStartCountdown = () => {
      resetCountdown();
      startCountdown();
    };

    if (isErrorOTP) {
      handleStartCountdown();
    }
  }, [isErrorOTP]);

  const handleResendOTP = async () => {
    try {
      setStateLoadingResendOTP(true);

      const res: any = await handleOnSendOTP.mutateAsync({ email: form.getValues('email') });

      if (!res?.data?.error) {
        setStateLoadingResendOTP(false);
      }
    } catch (error) {
      console.log('@EEROR handleResendOTP', error);
      setStateLoadingResendOTP(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <Form {...form}>
        <Card className="w-[23rem] max-w-xs border-none shadow-none sm:max-w-sm">
          <CardHeader>
            <Image alt="email" className="m-auto mb-6" height={75} src={verifyEmailImg} width={75} />

            <CardTitle className="text-center text-[#1E2020]">Verify Your Email</CardTitle>

            <FormDescription className="text-center text-[#323434]">
              Please enter 6 digit code that was sent to your email {form.getValues('email')}
            </FormDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={onSubmit}>
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center text-center">
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage className="my-6" />
                  </FormItem>
                )}
              />

              {timeLeft > 0 && isErrorOTP ? (
                <div className="mt-4 text-center">
                  <p>
                    Resend OTP in <span className="text-primary">00:{timeLeft.toString().padStart(2, '0')}</span>
                  </p>
                </div>
              ) : (
                <div className="mt-4 text-center">
                  <p
                    className="cursor-pointer text-primary"
                    onClick={() => !stateLoadingResendOTP && handleResendOTP()}
                  >
                    {stateLoadingResendOTP ? 'Loading...' : 'Resend OTP'}
                  </p>
                </div>
              )}

              <Button
                className="w-full"
                disabled={timeLeft > 0 && timeLeft !== 60 ? true : form.watch('otp')?.length === 6 ? false : true}
                loading={loading}
                type="submit"
              >
                Verify
              </Button>

              <Button
                className="w-full border border-primary text-primary"
                type="button"
                variant="outline"
                onClick={e => {
                  e.preventDefault();
                  emitter.emit('@signup/prev');
                }}
              >
                Change Email
              </Button>
            </form>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
};

export default InputOTPForm;
