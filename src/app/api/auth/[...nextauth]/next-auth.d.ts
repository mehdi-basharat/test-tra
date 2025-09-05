import type { DefaultSession } from 'next-auth';

import type { LoginData } from '@/app/(auth)/login/_model/login';
import type { RegisterData } from '@/app/(auth)/signup/model/register';

export type AuthIntent = 'signIn' | 'signUp';

declare module 'next-auth' {
  interface User extends DefaultSession['user'], LoginData, RegisterData {
    user_id: string;
  }

  interface Session {
    user: {
      user_id: string;
      name: string;
      email: string;
      image: string;
      first_name: string;
      last_name: string;
      token?: string;
      provider: 'credentials' | 'google';
    } & DefaultSession['user'];
    expires?: ISODateString;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultSession['user'], LoginData, RegisterData {
    user_id: string;
    is_new_user?: boolean;
    provider: 'credentials' | 'google';
  }
}
