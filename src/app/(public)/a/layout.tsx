import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getServerAuth } from '@/app/api/auth/[...nextauth]/config';

import Navbar from '@/components/layout/navbar';
import TyradsCopyright from '@/components/tyrads/copyright';

import { getUserDetails } from '@/repository/user-details';
import { getUserTyrPoints } from '@/repository/user-tyr-points';

export default async function AppLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  const session = await getServerAuth();
  const queryClient = new QueryClient();

  if (session) {
    await queryClient.prefetchQuery({
      queryKey: ['points', session?.user.user_id],
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
      <div className="flex h-dvh flex-col">
        <Navbar />
        <div className="flex h-full flex-col overflow-auto sm:scrollbar-gutter">
          <section className="m-auto flex w-full flex-1 max-w-screen-3xl sm:mt-10">
            <div className="m-auto flex h-full w-full flex-col gap-3 sm:max-w-[90vw] sm:gap-8 xl:flex-row">
              {children}
            </div>
          </section>
          {modal}
          <TyradsCopyright className="block" />
        </div>
      </div>
    </HydrationBoundary>
  );
}
