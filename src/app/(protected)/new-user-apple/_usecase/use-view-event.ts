import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import * as amplitude from '@amplitude/analytics-browser';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

import { trackSignupConversion } from '@/app/(auth)/signup/_dataLayers';

import useAmplitudeContext from '@/hooks/use-amplitude';

const useViewEvent = () => {
  const router = useRouter();
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const isNewUser = getCookie('is-new-user');

  const _redirectUser = useCallback(() => {
    setCookie('fromRegister', 'true');
    if (sessionLocalStorage) {
      trackAmplitudeEvent('Offerwall', {
        ...sessionLocalStorage,
        source: 'apple',
        status,
      });
      router.push('/offerwall');
      window.location.reload();
    }
  }, [router, sessionLocalStorage]);

  const handleUserRedirect = async () => {
    if (sessionLocalStorage) {
      // Send account information to Verisoul for dashboard analysis
      // await window?.Verisoul?.account({
      //   id: String(session.user.user_id),
      //   email: session.user.email,
      //   metadata: {
      //     session,
      //     status,
      //   },
      // });

      amplitude.setUserId(sessionLocalStorage?.user_id);

      trackAmplitudeEvent('Signup', {
        user_id: sessionLocalStorage?.user_id,
        source: 'apple',
      });

      trackAmplitudeEvent('SessionStart', {
        ...sessionLocalStorage,
        source: 'apple',
        status,
      });

      trackSignupConversion({
        email: sessionLocalStorage?.email,
        source: 'apple',
        userId: sessionLocalStorage?.user_id,
        firstName: sessionLocalStorage?.first_name,
        lastName: sessionLocalStorage?.last_name,
      });
      deleteCookie('is-new-user');
      _redirectUser();
    }
  };

  const onPageImpression = useCallback(async () => {
    try {
      if (!isNewUser) return _redirectUser();

      if (sessionLocalStorage) {
        if (typeof window?.fbq !== 'undefined') {
          handleUserRedirect();
        } else {
          handleUserRedirect();
        }

        deleteCookie('is-new-user');
        _redirectUser();
      }
    } catch (error) {
      console.log('@error onPageImpression', error);
    }
  }, [_redirectUser, isNewUser, sessionLocalStorage]);

  return { handleOnPageImpression: onPageImpression };
};

export default useViewEvent;
