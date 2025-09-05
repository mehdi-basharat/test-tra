'use client';
import Image from 'next/image';

import verifyEmailImg from '@/app/(auth)/_assets/email.svg';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

import { useSignupContext } from '../../_context';

import useFormEvent from './usecase/use-form-event';

const InputOTPForm = () => {
  const { emitter, form } = useSignupContext();
  const { onSubmit, loading } = useFormEvent();

  return (
    <div className="flex flex-1 flex-col items-center gap-3">
      <Card className="w-[23rem] max-w-xs border-none shadow-none sm:max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-primary">Verify OTP</CardTitle>
        </CardHeader>
        <CardContent>
          <Image alt="email" className="m-auto mb-6" height={75} src={verifyEmailImg} width={75} />
          <Form {...form}>
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
                    <FormDescription>
                      Please enter 6 digit code that was sent to your email {form.getValues('email')}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <Button className="w-full" loading={loading} type="submit">
                Verify & Continue
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Button
        className="h-auto p-0"
        variant="link"
        onClick={() => {
          emitter.emit('@signup/prev');
        }}
      >
        Change Email
      </Button>
    </div>
  );
};

export default InputOTPForm;
