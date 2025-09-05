import { createContext, useContext } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import useEmitter from '../_hooks/use-emitter';
import type { SignupContextProps, SignupContextType } from '../_model';
import { signUpFormSchema } from '../_model/register';
import type { SignupDataType } from '../_model/types';

/**
 * @constant SignupContext
 */
const SignupContext = createContext<SignupContextType>(undefined);

/**
 * @function SignupProvider
 * @param {SignupContextProps} props
 */
const SignupProvider: FC<SignupContextProps> = props => {
  const { children, emitter: mitt } = props;
  const form = useForm<SignupDataType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      confirm_password: '',
      otp: '',
      hash: '',
      age: '',
      gender: '',
    },
  });

  const emitter = useEmitter(mitt);

  const value = { emitter, form } satisfies SignupContextType;

  return <SignupContext.Provider value={value}>{children}</SignupContext.Provider>;
};

/**
 * @function useSignupContext
 */
const useSignupContext = () => {
  const context = useContext<SignupContextType>(SignupContext);

  if (context === undefined) {
    throw new Error('useSignupContext must be used within a SignupContext Provider');
  }

  return context;
};

export default SignupProvider;

export { SignupContext, SignupProvider, useSignupContext };
