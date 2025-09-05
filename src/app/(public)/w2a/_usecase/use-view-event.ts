import { useCallback, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import { deleteCookie, getCookie } from 'cookies-next';

import { trackLoginConversion } from '@/app/(auth)/login/_dataLayers';
import useAmplitudeContext from '@/hooks/use-amplitude';
import * as amplitude from '@amplitude/analytics-browser';

const useViewEvent = () => {
  const { data: session, status } = useSession();
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const isLoginSuccess = getCookie('is-login-success');

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const onPageImpression = useCallback(async () => {
    if (!isLoginSuccess) return;

    if (session || sessionLocalStorage) {
      // Send account information to Verisoul for dashboard analysis
      // await window?.Verisoul?.account({
      //   id: String(session.user.user_id),
      //   email: session.user.email,
      //   metadata: {
      //     session,
      //     status,
      //   },
      // });

      amplitude.setUserId((session?.user?.user_id as any) || sessionLocalStorage?.user_id);

      trackAmplitudeEvent('Login', {
        ...session?.user,
        ...sessionLocalStorage,
        status,
        source: session?.user?.provider || 'apple',
      });

      trackAmplitudeEvent('SessionStart', {
        ...session?.user,
        source: session?.user?.provider || 'apple',
        status,
      });

      trackLoginConversion({
        userId: session?.user?.user_id || sessionLocalStorage?.user_id,
        email: session?.user?.email || sessionLocalStorage?.email,
        firstName: session?.user?.first_name || sessionLocalStorage?.first_name,
        lastName: session?.user?.last_name || sessionLocalStorage?.last_name,
      });
      deleteCookie('is-login-success');
    }
  }, [isLoginSuccess, session, sessionLocalStorage]);

  return { handleOnPageImpression: onPageImpression };
};

export default useViewEvent;
