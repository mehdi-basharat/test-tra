'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { TypographyH2 } from '../ui/typography';

type Props = {
  className?: string;
};

const NotFoundFeedback = (props: Props) => {
  const { className } = props;
  const router = useRouter();

  return (
    <div className={cn('flex h-full flex-col items-center justify-center gap-2 px-8 py-8 text-center', className)}>
      <TypographyH2 className="text-2xl sm:text-3xl">404</TypographyH2>
      <div className="h-10">
        <Image alt="page not found" height={0} src="/assets/images/page-not-found.png" width={175} />
      </div>
      <div className="h-36">
        <Image alt="cat" height={0} src="/assets/images/purr-not-found.png" width={175} priority />
      </div>
      <TypographyH2 className="text-lg sm:text-2xl">Whoops, that page is gone!</TypographyH2>
      <div className="flex flex-col items-center gap-2 text-sm sm:text-base">
        <p>You didn&apos;t break the internet, but we can&apos;t find what you are looking for.</p>
        <Button className="w-fit" onClick={() => router.push('/')}>
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundFeedback;
