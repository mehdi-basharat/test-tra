import { useCallback } from 'react';

import { FormEvent, useState } from 'react';

import { useSignupContext } from '../../../_context';
import useOTPEvent from '../../../_usecase/use-otp-event';
import useAmplitudeContext from '@/hooks/use-amplitude';

const useFormEvent = () => {
  const { emitter, form } = useSignupContext();
  const { handleOnValidateOTP } = useOTPEvent();
  const { trackAmplitudeEvent }: any = useAmplitudeContext();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isValid = form.trigger(['otp']);

      if (!isValid) return;

      setLoading(true);

      const res = await handleOnValidateOTP.mutateAsync({
        email: form.getValues('email'),
        otp: form.getValues('otp'),
        hash: form.getValues('hash'),
      });

      if (!res.data.success) {
        setLoading(false);

        // trackAmplitudeEvent('Registration Flow', {
        //   step_name: `ERROR ${res.data.error.message}`,
        //   res,
        //   ...form.getValues(),
        // });

        return form.setError('otp', { message: res.data.error.message });
      }
      if (!res.data.success || !res.data.data.is_valid_otp) {
        setLoading(false);
        // trackAmplitudeEvent('Registration Flow', {
        //   step_name: 'ERROR OTP Code Incorrect',
        //   message: 'Code incorrect, try again.',
        //   ...form.getValues(),
        // });
        return form.setError('otp', { message: 'Code incorrect, try again.' });
      }

      trackAmplitudeEvent('Registration Flow', {
        step_name: 'submit_OTP_code',
      });

      trackAmplitudeEvent('Registration Flow', {
        step_name: 'view_age_gender_form',
      });

      setLoading(false);

      emitter.emit('@signup/next');
    },
    [form, handleOnValidateOTP, emitter],
  );

  return { onSubmit, loading };
};

export default useFormEvent;
