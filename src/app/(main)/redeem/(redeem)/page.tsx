import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { Metadata } from 'next';

import { getServerAuth } from '@/app/api/auth/[...nextauth]/config';

import { getUserDetails } from '@/repository/user-details';

import { getTremendousListProducts } from '../_repository/products';

import Redeem from './Redeem';

export const metadata: Metadata = {
  title: 'Redeem',
};

export default async function RedeemRoute() {
  const queryClient = new QueryClient();
  const session = await getServerAuth();

  if (!session) return null;

  const user = await queryClient.fetchQuery({
    queryKey: ['user-details', session.user.user_id],
    queryFn: () => getUserDetails(session.user.user_id, session.user.token),
  });

  if (user.success && user.data.id) {
    await queryClient.prefetchQuery({
      queryKey: ['tremendous', 'list-products'],
      queryFn: () =>
        getTremendousListProducts(user.data.country ? `country=${user.data.country}` : '', session.user.token),
    });
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Redeem />
    </HydrationBoundary>
  );
}
