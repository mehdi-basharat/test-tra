import Link from 'next/link';

import { Button } from '@/components/ui/button';


const CTAButtons = () => {

  return (
    <div className="flex justify-end gap-3">
      <Link href="https://tyrrewards.com" target="_blank">
        <Button size="sm">Login</Button>
      </Link>
      {/* <Link href="/signup" onClick={handleOnSignupClick}>
        <Button className="text-primary" size="sm" variant="ghost">
          Register
        </Button>
      </Link> */}
    </div>
  );
};

export default CTAButtons;
