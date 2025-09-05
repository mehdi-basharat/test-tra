import Link from 'next/link';

import { noop } from 'lodash';
import { usePathname } from 'next/navigation';

type Props = {
  onSignupClick?: () => void;
};

const HaveNoAccount = (props: Props) => {
  const pathname = usePathname();

  const { onSignupClick = noop } = props;

  return (
    <p>
      Don’t have an account?&nbsp;
      <Link
        className="text-primary hover:underline"
        href={pathname === '/login-v3' ? '/signup-v3' : '/signup'}
        onClick={onSignupClick}
      >
        Sign Up
      </Link>
    </p>
  );
};

export default HaveNoAccount;
