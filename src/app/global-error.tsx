'use client';

import * as Sentry from '@sentry/nextjs';
import Error from 'next/error';
import { useEffect } from 'react';

import ErrorFeedback from '@/components/feedback/error';

export default function GlobalError({ reset, error }: { error: Error & { digest?: string }; reset: () => void }) {
  console.log('@error GlobalError', error);

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <ErrorFeedback className="h-dvh bg-blue-50" reset={reset} />;
      </body>
    </html>
  );
}
