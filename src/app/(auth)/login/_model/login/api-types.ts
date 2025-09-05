import type { BaseResponse } from '@/model';

export type LoginMutationType = BaseResponse<LoginData>;

export interface LoginData {
  user_id?: number;
  role_id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo?: string;
  dob?: string;
  phone?: string;
  email?: string;
  token?: string;
  expiry?: number;
}

export interface LoginVariables {
  email: string;
  password: string;
}
