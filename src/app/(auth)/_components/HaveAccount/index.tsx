import Link from 'next/link';

import { noop } from 'lodash';

type Props = {
  onSignInClick?: () => void;
};

const HaveAccount = (props: Props) => {
  const { onSignInClick = noop } = props;

  return (
    <p>
      Already have an account?&nbsp;
      <Link className="text-primary hover:underline" href="/login" onClick={onSignInClick}>
        Sign In
      </Link>
    </p>
  );
};

export default HaveAccount;
