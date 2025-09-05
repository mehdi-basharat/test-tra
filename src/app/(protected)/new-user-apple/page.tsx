'use client';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Loader2 } from 'lucide-react';

import useViewEvent from './_usecase/use-view-event';

function NewUserApplePage() {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { handleOnPageImpression } = useViewEvent();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  useEffect(() => {
    handleOnPageImpression();
  }, [handleOnPageImpression]);

  if (!sessionLocalStorage) return notFound();

  return <Loader2 className="m-auto h-dvh animate-spin" size={50} />;
}

export default NewUserApplePage;
