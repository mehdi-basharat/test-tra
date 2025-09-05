import type { SignupDataType } from './types';

import type { Emitter } from '@/helpers/emitter';

export type SignupEmitter = Emitter<SignupEventType>;

export type SignupEventType = {
  '@signup/next': unknown;
  '@signup/prev': unknown;
  '@signup/register': SignupDataType;
};
