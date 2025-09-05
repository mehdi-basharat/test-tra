import { useMutation } from '@tanstack/react-query';

import useAxios from '@/hooks/use-axios';

import { useSignupContext } from '../_context';
import type { SendOTPMutationType, SendOTPVariables } from '../_model/send-otp';
import type { ValidateOTPMutationType, ValidateOTPVariables } from '../_model/validate-otp';

const useOTPEvent = () => {
  const axios = useAxios();
  const { form } = useSignupContext();

  const sendOtpMutation = useMutation({
    mutationFn: (data: SendOTPVariables) =>
      axios.postForm<SendOTPMutationType>('/api/register/send_otp', data, { baseURL: '' }),
    onSuccess: data => {
      if (data.data.success) {
        const { hash } = data.data.data;
        form.setValue('hash', hash);
      } else {
        // trackAmplitudeEvent('Registration Flow', {
        //   step_name: `ERROR ${data.data.error.message}`,
        //   data,
        // });

        form.setError('email', { message: data.data.error.message });
      }
    },
  });

  const validateOtpMutation = useMutation({
    mutationFn: (data: ValidateOTPVariables) => {
      return axios.postForm<ValidateOTPMutationType>('/api/register/validate_otp', data, { baseURL: '' });
    },
  });

  return { handleOnSendOTP: sendOtpMutation, handleOnValidateOTP: validateOtpMutation };
};

export default useOTPEvent;
