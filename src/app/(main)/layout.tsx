import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import Navbar from '@/components/layout/navbar';
import TyradsCopyright from '@/components/tyrads/copyright';

import { getUserDetails } from '@/repository/user-details';
import { getUserTyrPoints } from '@/repository/user-tyr-points';

import { getServerAuth } from '../api/auth/[...nextauth]/config';

import Providers from './providers';

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuth();
  const queryClient = new QueryClient();

  if (session) {
    await queryClient.prefetchQuery({
      queryKey: ['points', session.user.user_id],
      queryFn: () => getUserTyrPoints(session.user.user_id, session.user.token),
    });
    await queryClient.prefetchQuery({
      queryKey: ['user-details', session.user.user_id],
      queryFn: () => getUserDetails(session.user.user_id, session.user.token),
    });
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Providers>
        <div className="flex h-dvh flex-col">
          <Navbar />
          <div className="flex flex-1 flex-col overflow-auto sm:scrollbar-gutter">
            {children}
            <TyradsCopyright />
          </div>
        </div>
      </Providers>
    </HydrationBoundary>
  );
}
