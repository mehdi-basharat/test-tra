import { useCallback } from 'react';

import type { FormEvent } from 'react';

import { useSignupContext } from '../../../_context';
import useOTPEvent from '../../../_usecase/use-otp-event';
import useAmplitudeContext from '@/hooks/use-amplitude';

const useFormEvent = () => {
  const { emitter, form } = useSignupContext();
  const { handleOnSendOTP } = useOTPEvent();
  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const isValid = await form.trigger(['fullname', 'email', 'password', 'confirm_password']);
      if (!isValid) {
        return;
      }

      handleOnSendOTP.mutate({ email: form.getValues('email') });

      trackAmplitudeEvent('Registration Flow', {
        step_name: 'submit_email_signup_form',
      });

      trackAmplitudeEvent('Registration Flow', {
        step_name: 'view_OTP_page',
      });
      emitter.emit('@signup/next');
    },
    [emitter, form, handleOnSendOTP],
  );

  return { onSubmit };
};

export default useFormEvent;
