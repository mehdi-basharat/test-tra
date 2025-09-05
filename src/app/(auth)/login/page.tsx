import type { Metadata } from 'next';

import Login from './Login';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default async function LoginRoute() {
  return <Login />;
}
