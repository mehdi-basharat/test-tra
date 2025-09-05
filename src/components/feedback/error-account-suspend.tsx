import Image from 'next/image';

import { cn } from '@/lib/utils';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { TypographyH2 } from '../ui/typography';

const ErrorAccountSuspendFeedback = (props: any) => {
  const { className } = props;

  const router = useRouter();

  return (
    <div className={cn('flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center', className)}>
      <Image alt="cat" height={0} src="/assets/images/purr-error.png" width={200} priority />
      <TypographyH2 className="text-lg sm:text-2xl">Account Flagged</TypographyH2>
      <div className="text-sm sm:text-base">
        <p>
          Your account has been suspended due to <span className="text-blue-400">suspicious activity</span>. To recover
          your account, please contact us.
        </p>
        <span>
          You may also&nbsp;
          <Button
            className="h-fit cursor-pointer px-1 py-0 text-blue-400"
            variant="ghost"
            onClick={() => window.location.reload()}
          >
            refresh
          </Button>{' '}
          or{' '}
          <Button
            className="h-fit cursor-pointer px-1 py-0 text-blue-400"
            variant="ghost"
            onClick={() => router.push('/')}
          >
            Back to home
          </Button>
        </span>
      </div>
    </div>
  );
};

export default ErrorAccountSuspendFeedback;
