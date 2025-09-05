import Image from 'next/image';

import { cn } from '@/lib/utils';

import { TypographyH3 } from '@/components/ui/typography/heading';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const FailedVerisoulIdCheck = (props: any) => {
  const { className } = props;
  const router = useRouter();

  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-4 !bg-white px-3 text-center',
        className,
      )}
    >
      <TypographyH3 className="text-lg !font-normal sm:text-2xl">ID Verification failed</TypographyH3>

      <Image alt="failed-verisoul" height={0} src="/failed-verisoul.svg" width={196} priority />

      <div className="text-sm sm:text-base">
        <p>The system can’t verify that it’s you. Try again in few minutes.</p>
      </div>

      <div className="flex gap-2 rounded-lg bg-[#E7FFF7] p-4">
        <Image alt="light-idea" height={64} src="/light-idea.svg" width={64} priority />

        <p className="text-[12px] font-normal">
          Tip: Make sure you have a decent lighting when you taking the picture and fill all the forms with your real
          data.
        </p>
      </div>

      <Button
        className="w-full cursor-pointer px-1 py-0"
        onClick={() => {
          router.push('/');
        }}
      >
        Back to Homepage
      </Button>
    </div>
  );
};

export default FailedVerisoulIdCheck;
