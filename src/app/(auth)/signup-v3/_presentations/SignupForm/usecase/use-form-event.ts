import { useCallback, useState } from 'react';

import type { FormEvent } from 'react';

import useAmplitudeContext from '@/hooks/use-amplitude';

import { useSignupContext } from '../../../_context';
import useOTPEvent from '../../../_usecase/use-otp-event';
import useRegisterEvent from '../../../_usecase/use-register-event';

const useFormEvent = () => {
  const { emitter, form } = useSignupContext();
  const { handleOnSendOTP } = useOTPEvent();
  const { trackAmplitudeEvent, stateVariant }: any = useAmplitudeContext();
  const [loading, setLoading] = useState<boolean>(false);
  const { handleOnRegister } = useRegisterEvent();

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setLoading(true);

      const dataParse = JSON.parse(localStorage.getItem('apple-flow-hide-email') || '{}');

      // form.setValue('age', '');
      form.setValue('password', dataParse?.user?.email ? dataParse?.user?.email : form.getValues('password'));
      form.setValue('confirm_password', dataParse?.user?.email ? dataParse?.user?.email : form.getValues('password'));
      // form.setValue('gender', '');

      const isValid = await form.trigger(dataParse?.user ? ['email'] : ['email', 'password']);
      if (!isValid) {
        trackAmplitudeEvent('Registration Flow', {
          step_name: 'submit_email_signup_form',
        });

        setLoading(false);

        return;
      }

      let res: any;

      if (stateVariant !== 'no_otp' && stateVariant !== 'no_terms_otp') {
        res = await handleOnSendOTP.mutateAsync({ email: form.getValues('email') });
      }

      trackAmplitudeEvent('Registration Flow', {
        step_name: 'submit_email_signup_form',
      });

      trackAmplitudeEvent('Registration Flow', {
        step_name: 'view_OTP_page',
      });

      if (stateVariant === 'no_otp' || stateVariant === 'no_terms_otp') {
        handleOnRegister({ ...form.getValues(), otp: '375681' });
      } else {
        if (!res?.data?.error) {
          emitter.emit('@signup/next');
          setLoading(false);
        }
        setLoading(false);
      }
    },
    [emitter, form, handleOnSendOTP],
  );

  return { onSubmit, loading };
};

export default useFormEvent;
