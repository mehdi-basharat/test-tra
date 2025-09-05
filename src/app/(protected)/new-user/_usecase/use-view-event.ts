import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { useSession } from 'next-auth/react';

import * as amplitude from '@amplitude/analytics-browser';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

import { trackSignupConversion } from '@/app/(auth)/signup/_dataLayers';

import useAmplitudeContext from '@/hooks/use-amplitude';

const useViewEvent = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const isNewUser = getCookie('is-new-user');

  const _redirectUser = useCallback(() => {
    setCookie('fromRegister', 'true');
    if (session) {
      trackAmplitudeEvent('Offerwall', {
        ...session?.user,
        source: session?.user?.provider ?? 'email',
        status,
      });
      router.push('/offerwall');
      window.location.reload();
    }
  }, [router, session]);

  const handleUserRedirect = async () => {
    if (session) {
      // Send account information to Verisoul for dashboard analysis
      // await window?.Verisoul?.account({
      //   id: String(session.user.user_id),
      //   email: session.user.email,
      //   metadata: {
      //     session,
      //     status,
      //   },
      // });

      amplitude.setUserId(session?.user?.user_id as any);

      trackAmplitudeEvent('Signup', {
        user_id: session?.user?.user_id,
        source: 'google',
      });

      trackAmplitudeEvent('SessionStart', {
        ...session?.user,
        source: 'google',
        status,
      });

      trackSignupConversion({
        email: session.user.email,
        source: session.user.provider,
        userId: session.user.user_id,
        firstName: session.user.first_name,
        lastName: session.user.last_name,
      });
      deleteCookie('is-new-user');
      _redirectUser();
    }
  };

  const onPageImpression = useCallback(async () => {
    try {
      if (!isNewUser) return _redirectUser();

      if (session) {
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
  }, [_redirectUser, isNewUser, session]);

  return { handleOnPageImpression: onPageImpression };
};

export default useViewEvent;
