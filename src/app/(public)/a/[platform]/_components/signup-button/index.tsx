'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import useClickEvent from '../../_usecase/use-click-event';

const SignUp = () => {
  const { handleOnSignupMobileClick } = useClickEvent();

  return (
    <Link href="/signup" onClick={handleOnSignupMobileClick}>
      <Button className="w-full text-black">Sign Up</Button>
    </Link>
  );
};

export default SignUp;
