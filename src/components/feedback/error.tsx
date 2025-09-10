import Image from 'next/image';
import { useState } from 'react';

import { delay } from 'lodash';

import { ErrorBoundaryProps } from '@/app/(main)/error';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { TypographyH2 } from '../ui/typography';
import ErrorAccountSuspendFeedback from './error-account-suspend';

type Props = { className?: string; reset: () => void } & Partial<Pick<ErrorBoundaryProps, 'error'>>;

const ErrorFeedback = (props: Props) => {
  const { className, error, reset } = props;

  const isAccountSuspendedException = error?.message?.includes('AccountSuspendedException');

  const [retrying, setRetrying] = useState(false);

  const handleOnRetry = async () => {
    setRetrying(true);
    delay(reset, 1000);
  };

  if (isAccountSuspendedException) {
    return <ErrorAccountSuspendFeedback className={className} serror={error} />;
  } else {
    return (
      <div className={cn('flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center', className)}>
        <Image alt="cat" height={0} src="/assets/images/purr-error.png" width={200} priority />
        <TypographyH2 className="text-lg sm:text-2xl">Aaaah! Something went wrong!</TypographyH2>
        {/* <div dangerouslySetInnerHTML={{ __html: (error as any)?.raw }} /> */}
        {/* {error?.message && <code className="bg-gray-100 text-sm text-red-400">{error.message}</code>} */}
        <div className="text-sm sm:text-base">
          <p>Brace yourself till we get the error fixed.</p>
          <span>
            You may also&nbsp;
            <Button
              className="h-fit cursor-pointer px-1 py-0 text-blue-400"
              variant="ghost"
              onClick={() => window.location.reload()}
            >
              refresh
            </Button>
            &nbsp;the page or&nbsp;
            <Button
              className="h-fit cursor-pointer px-1 py-0 text-blue-400"
              loading={retrying}
              variant="ghost"
              onClick={handleOnRetry}
            >
              try again
            </Button>
            &nbsp;later
          </span>
        </div>
      </div>
    );
  }
};

export default ErrorFeedback;
