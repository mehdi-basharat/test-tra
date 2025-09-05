import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';

import { getUserDetails } from '@/repository/user-details';
import { getUserTyrPoints } from '@/repository/user-tyr-points';

import { getServerAuth } from '../api/auth/[...nextauth]/config';

export default async function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
      <Navbar />
      <div className="flex flex-1 flex-col items-center overflow-y-auto overflow-x-hidden sm:scrollbar-gutter">
        <div className="w-full flex-1 max-w-screen-3xl sm:mt-10">
          <div className="m-auto h-full">{children}</div>
        </div>
        <Footer />
      </div>
    </HydrationBoundary>
  );
}
