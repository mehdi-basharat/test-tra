'use client';

import ErrorFeedback from '@/components/feedback/error';

import { isDevelopment } from '@/utils/common';

export type ErrorBoundaryProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorBoundaryProps) {
  return <ErrorFeedback {...(isDevelopment && { error })} reset={reset} />;
}
