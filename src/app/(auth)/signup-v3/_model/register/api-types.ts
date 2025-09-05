import type { BaseResponse } from '@/model';

export type RegisterMutationType = BaseResponse<RegisterData>;

export interface RegisterData {
  user_id?: number;
  role_id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo?: string;
  dob?: string;
  age?: string;
  gender?: string;
  phone?: string;
  email?: string;
  token?: string;
  expiry?: number;
}

export interface RegisterVariables extends OfferVariables {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  otp: string;
  hash: string;
  gender: string;
  age: string;
}

export interface OfferVariables {
  transaction_id?: string | null;
  source?: string | null;
  utm_source?: string | null;
  utm_campaign?: string | null;
  utm_id?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  gbraid?: string | null;
  wbraid?: string | null;
}
