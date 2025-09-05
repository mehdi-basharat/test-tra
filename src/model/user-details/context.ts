import type { NUserDetailsData } from './types';

export type UserDetailsContextProps = {
  children: React.ReactNode;
  userId?: string;
};

export type UserDetailsContextType = { user: NUserDetailsData } | undefined;
