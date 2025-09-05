import Link from 'next/link';

import { Button } from '@/components/ui/button';

import useClickEvent from '../usecase/use-click-event';

const CTAButtons = () => {
  const { handleOnLoginClick, handleOnSignupClick } = useClickEvent();

  return (
    <div className="flex justify-end gap-3">
      <Link href="/login" onClick={handleOnLoginClick}>
        <Button size="sm">Login</Button>
      </Link>
      <Link href="/signup" onClick={handleOnSignupClick}>
        <Button className="text-primary" size="sm" variant="ghost">
          Register
        </Button>
      </Link>
    </div>
  );
};

export default CTAButtons;
