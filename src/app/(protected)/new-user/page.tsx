'use client';
import { useEffect } from 'react';
import { notFound } from 'next/navigation';

import { useSession } from 'next-auth/react';

import { Loader2 } from 'lucide-react';

import useViewEvent from './_usecase/use-view-event';

function NewUserPage() {
  const { data: session } = useSession();
  const { handleOnPageImpression } = useViewEvent();

  useEffect(() => {
    handleOnPageImpression();
  }, [handleOnPageImpression]);

  if (!session) return notFound();

  return <Loader2 className="m-auto h-dvh animate-spin" size={50} />;
}

export default NewUserPage;
