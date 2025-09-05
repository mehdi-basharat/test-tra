'use client';

import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

const NavLink = (props: Props) => {
  const { href, children, className, ...rest } = props;
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        'py-4 font-semibold',
        {
          ' border-b-[3px] border-primary text-primary': pathname === href,
        },
        className,
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
