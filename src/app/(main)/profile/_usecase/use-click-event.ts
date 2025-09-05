import { useCallback, useEffect, useState } from 'react';

import useSignOut from '@/hooks/use-signout';

import { trackLogoutClick } from '../_dataLayers';
import { useSession } from 'next-auth/react';
import { deleteCookie } from 'cookies-next';

const useClickEvent = () => {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();
  const [isLogOut, setIsLogOut] = useState<any>(false);

  const { handleOnSignOut } = useSignOut();
  const { data: session } = useSession();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();

    if (isLogOut) {
      localStorage.removeItem('sessions');
      deleteCookie('session-token-apple');
      setIsLogOut(false);
    }
  }, [isLogOut]);

  const onLogoutClick = useCallback(() => {
    trackLogoutClick(session || sessionLocalStorage);
    handleOnSignOut();

    setIsLogOut(true);
  }, [handleOnSignOut]);

  return { handleOnSignOut: onLogoutClick };
};

export default useClickEvent;
