import Link from 'next/link';

import { cn } from '@/lib/utils';

import { TypographyMuted } from '../ui/typography';

type Props = {
  className?: string;
  company?: {
    name: string;
    ownedBy: string;
    tagline: string;
    logo: string;
  };
};

const TyradsCopyright = (props: Props) => {
  const { className } = props;
  const { name, ownedBy} = props.company || {};

  return (
    <footer className={cn('mt-auto hidden p-4 text-center font-semibold sm:py-10 md:block', className)}>
      <TypographyMuted>
        Copyright &copy; {new Date().getFullYear()}&nbsp;
        <Link className="h-auto p-0 font-bold text-primary" href="/" target="_blank">
          {name}
        </Link>
        . - All Rights Reserved. Owned by {ownedBy}.
      </TypographyMuted>
    </footer>
  );
};

export default TyradsCopyright;
