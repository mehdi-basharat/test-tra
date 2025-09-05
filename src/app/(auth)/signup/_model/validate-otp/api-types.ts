import type { BaseResponse } from '@/model';

export type ValidateOTPMutationType = BaseResponse<ValidateOTPData>;

export interface ValidateOTPData {
  is_valid_otp: boolean;
}

export interface ValidateOTPVariables {
  email: string;
  otp: string;
  hash: string;
}
