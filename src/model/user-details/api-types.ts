import type { BaseResponse } from '@/model';

export type UserDetailsQueryType = BaseResponse<UserDetailsData>;

export interface UserDetailsData {
  id?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  username?: string;
  email?: string;
  photo?: string;
  dob?: string;
  country?: string;
  role_name?: string;
  role_id?: string;
  rating?: string;
  review?: string;
  gender?: string;
  status?: string;
}
