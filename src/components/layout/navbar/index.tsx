'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { useSession } from 'next-auth/react';

import NavLink from '../../navigation/nav-link';

import CTAButtons from './components/CTA';
import UserPoints from './components/UserPoints';
import { useEffect, useState } from 'react';

type Link = { href: string; name: string; isPrivateUrl?: boolean };
type Props = {
  navLinks?: Link[];
};

const Navbar = (props: Props) => {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const {
    navLinks = [
      // { href: '/a', name: 'Game' },
      { href: '/offerwall', name: 'Offers', isPrivateUrl: true },
      // { href: '/news', name: 'News' },
      { href: '/redeem', name: 'Redeem', isPrivateUrl: true },
    ],
  } = props;

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { status, data: session } = useSession();

  if (status === 'loading') return null;

  return (
    <>
      <div className="h-[4.25rem]" />
      <nav className="fixed inset-x-0 top-0 z-50 h-[4.25rem] bg-[#012230] text-white">
        <div className="mx-auto flex h-full w-full items-center justify-between gap-8 px-4 sm:max-w-[90vw]">
          <Link href="/">
            <Image
              alt="tyr rewards icon"
              className="min-w-[135px]"
              height={0}
              src="/assets/logo/tyr-rewards.png"
              width={150}
            />
          </Link>
          <div className="hidden h-full flex-1 gap-8 text-lg lg:flex">
            {navLinks.map(link => {
              if (link.isPrivateUrl && session && status === 'authenticated')
                return (
                  <NavLink key={link.href} href={link.href}>
                    {link.name}
                  </NavLink>
                );

              if (link.isPrivateUrl && sessionLocalStorage)
                return (
                  <NavLink key={link.href} href={link.href}>
                    {link.name}
                  </NavLink>
                );

              return null;
            })}
          </div>
          {session && status === 'authenticated' ? (
            <UserPoints />
          ) : sessionLocalStorage ? (
            <UserPoints />
          ) : (
            <CTAButtons />
          )}
        </div>
      </nav>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
  loading: () => <div className="h-[4.25rem] bg-[#012230] text-white" />,
});
