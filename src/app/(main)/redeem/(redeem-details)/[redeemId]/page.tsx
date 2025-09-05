import { notFound } from 'next/navigation';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';

import { getServerAuth } from '@/app/api/auth/[...nextauth]/config';

import type { ServerSideComponentProps } from '@/types';

import { getAutoApprovalAuth } from '../../_repository/auto-approval-auth';
import { getTremendousRetrievePaypal, getTremendousRetrieveProduct } from '../../_repository/products';

import RedeemDetail from './RedeemDetail';

export async function generateMetadata(props: ServerSideComponentProps<{ redeemId: string }>): Promise<Metadata> {
  const { params } = props;
  const { redeemId } = params;

  const queryClient = new QueryClient();

  const session = await getServerAuth();

  if (redeemId === 'paypal') {
    return { title: 'Redeem | Paypal' };
  } else {
    const data = await queryClient.fetchQuery({
      queryKey: ['tremendous', 'retrieve-products', redeemId],
      queryFn: () => getTremendousRetrieveProduct(`product_id=${redeemId}`, session?.user.token),
    });

    if (!data.success || !data.data?.product_name) notFound();

    return { title: `Redeem | ${data.data.product_name}` };
  }
}

export default async function RedeemDetailRoute(props: ServerSideComponentProps<{ redeemId: string }>) {
  const { params } = props;
  const { redeemId } = params;

  const queryClient = new QueryClient();
  const session = await getServerAuth();

  if (!session) return null;

  const data = await queryClient.fetchQuery({
    queryKey: ['auto-approval-auth'],
    queryFn: () => getAutoApprovalAuth(session.user.token),
  });

  const isVerified = !((data.success && data.data.verification_needed) ?? true);

  if (redeemId === 'paypal') {
    await queryClient.prefetchQuery({
      queryKey: ['tremendous', 'retrieve-products', 'paypal'],
      queryFn: () => getTremendousRetrievePaypal(session.user.token),
    });
  } else {
    await queryClient.prefetchQuery({
      queryKey: ['tremendous', 'retrieve-products', redeemId],
      queryFn: () => getTremendousRetrieveProduct(`product_id=${redeemId}`, session.user.token),
    });
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <RedeemDetail isVerified={isVerified} />
    </HydrationBoundary>
  );
}
