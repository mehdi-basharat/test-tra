'use client';
import { useEffect } from 'react';
import Image from 'next/image';

import TyradsCopyright from '@/components/tyrads/copyright';
import { TypographyH3, TypographyP } from '@/components/ui/typography';

import DownloadButtons from '../../(homee)/_components/DownloadButtons';
import Header from '../../(homee)/_components/Header';

import useViewEvent from './_usecase/use-view-event';

function HomePage() {
  const { handleOnPageImpression } = useViewEvent();

  useEffect(() => {
    handleOnPageImpression();
  }, [handleOnPageImpression]);

  return (
    <main className="flex h-dvh flex-col items-center p-8">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <TypographyH3 className="text-primary">Start earning on your mobile</TypographyH3>
        <TypographyP>
          Right now we are only available on mobile. Please login and play from your mobile and start your amazing
          earning journey with us.
        </TypographyP>
        <DownloadButtons />
        <div className="my-6 w-full overflow-hidden">
          <Image
            alt="google play store"
            className="relative right-3 m-auto"
            height={0}
            quality={50}
            src={'/assets/w2a.png'}
            width={700}
            priority
          />
        </div>
      </div>
      <TyradsCopyright />
    </main>
  );
}

export default HomePage;
