import TyradsCopyright from '@/components/tyrads/copyright';

import Banner from './_components/Banner';
import BannerV2 from './_components/Banner-v2';

export default async function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <div className="my-auto max-h-[50rem] w-full flex-1 p-0 sm:p-10 md:pb-0">
        <div className="mx-auto flex h-full items-center overflow-hidden max-w-screen-3xl sm:rounded-xl sm:border sm:shadow-sm">
          <BannerV2 />
          {children}
          <Banner />
        </div>
      </div>
      <TyradsCopyright />
    </div>
  );
}
