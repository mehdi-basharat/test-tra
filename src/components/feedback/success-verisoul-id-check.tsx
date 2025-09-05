import Image from 'next/image';

import { cn } from '@/lib/utils';

import { TypographyH3 } from '@/components/ui/typography/heading';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const SuccessAccountSuspendFeedback = (props: any) => {
  const router = useRouter();

  const { className } = props;

  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-4 !bg-white px-3 text-center',
        className,
      )}
    >
      <TypographyH3 className="text-lg !font-medium sm:text-2xl">ID Verification success</TypographyH3>

      <Image alt="success-verisoul" height={0} src="/success-verisoul.svg" width={196} priority />

      <Button
        className="w-full cursor-pointer px-1 py-0"
        onClick={() => {
          router.push('/offerwall');
        }}
      >
        Back to Homepage
      </Button>
    </div>
  );
};

export default SuccessAccountSuspendFeedback;
