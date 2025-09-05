'use client';
import Image from 'next/image';

import { TypographyH2 } from '../ui/typography';

const UnderConstruction = () => {
  return (
    <div className="mx-auto flex h-full flex-col items-center justify-center gap-2 px-8 text-center">
      <Image alt="cat" height={0} src="/assets/images/purr-fall-has-come.png" width={200} priority />
      <TypographyH2 className="text-lg sm:text-2xl">Under Construction!</TypographyH2>
      <div className="text-sm sm:text-base">
        <p>The page is coming soon. To make this right we need some time to rebuild.</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
