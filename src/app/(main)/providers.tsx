'use client';

import { useSession } from 'next-auth/react';

import UserDetailsProvider from '@/context/user-details/user-details-context';
import { useEffect, useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { data: session } = useSession();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  if (!(session || sessionLocalStorage)) return null;

  return (
    <UserDetailsProvider userId={session?.user?.user_id || sessionLocalStorage?.user_id}>
      {children}
    </UserDetailsProvider>
  );
}
