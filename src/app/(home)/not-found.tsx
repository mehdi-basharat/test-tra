import type { Metadata } from 'next';

import NotFoundFeedback from '@/components/feedback/not-found';

export const metadata: Metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return <NotFoundFeedback />;
}
