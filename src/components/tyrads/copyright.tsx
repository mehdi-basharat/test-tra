import Link from 'next/link';

import { cn } from '@/lib/utils';

import { TypographyMuted } from '../ui/typography';

type Props = {
  className?: string;
};

const TyradsCopyright = (props: Props) => {
  const { className } = props;

  return (
    <footer className={cn('mt-auto hidden p-4 text-center font-semibold sm:py-10 md:block', className)}>
      <TypographyMuted>
        Copyright © 2025&nbsp;
        <Link className="h-auto p-0 font-bold text-primary" href="/" target="_blank">
          Tyr Rewards
        </Link>
        . - All Rights Reserved. Owned by Tyrads PTE. LTD.
      </TypographyMuted>
    </footer>
  );
};

export default TyradsCopyright;
