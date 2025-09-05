import type { BaseResponse } from '@/model';

export type SendOTPMutationType = BaseResponse<SendOTPData>;

export interface SendOTPData {
  status: string;
  email: string;
  hash: string;
}

export interface SendOTPVariables {
  email: string;
}
