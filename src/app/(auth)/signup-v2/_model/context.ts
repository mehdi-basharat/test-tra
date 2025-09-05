import type { UseFormReturn } from 'react-hook-form';

import type { SignupEmitter } from './event';
import type { SignupDataType } from './types';

export type SignupContextProps = {
  children: React.ReactNode;
  emitter?: SignupEmitter;
};

export type SignupContextType =
  | {
      emitter: SignupEmitter;
      form: UseFormReturn<SignupDataType>;
    }
  | undefined;
