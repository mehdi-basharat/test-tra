import dynamic from 'next/dynamic';

import { getServerAuth } from '@/app/api/auth/[...nextauth]/config';

import UnderConstruction from '@/components/feedback/under-construction';

import type { ServerSideComponentProps } from '@/types';

const LazyOfferSignup = dynamic(() => import('./_components/offer-with-signup'), {
  ssr: false,
});

export default async function PlatformLayout(props: Readonly<{ children: React.ReactNode }>) {
  const { children, params } = props as Readonly<{ children: React.ReactNode }> &
    ServerSideComponentProps<{ platform: string }>;
  const session = await getServerAuth();

  return !['android', 'ios'].includes(params.platform) ? (
    <UnderConstruction />
  ) : (
    <>
      {children}
      {session ? null : <LazyOfferSignup />}
    </>
  );
}
