import type { Metadata } from 'next';

import NotFoundFeedback from '@/components/feedback/not-found';
import TyradsCopyright from '@/components/tyrads/copyright';

export const metadata: Metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <div className="flex h-dvh flex-col">
      <NotFoundFeedback />
      <TyradsCopyright />
    </div>
  );
}
