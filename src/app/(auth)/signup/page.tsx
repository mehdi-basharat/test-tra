import type { Metadata } from 'next';

import SignupPage from './Signup';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default async function SignupRoute() {
  return <SignupPage />;
}
