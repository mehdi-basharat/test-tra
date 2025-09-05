'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import { Loader2 } from 'lucide-react';

import useAmplitudeContext from '@/hooks/use-amplitude';
import * as amplitude from '@amplitude/analytics-browser';

function SignInApplePage() {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { data: session, status } = useSession();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { trackAmplitudeEvent }: any = useAmplitudeContext();
  const router = useRouter();

  useEffect(() => {
    const handleGoogleSignIn = async () => {
      // Send account information to Verisoul for dashboard analysis
      // await window?.Verisoul?.account({
      //   id: String(session?.user.user_id),
      //   email: session?.user.email,
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
        source: 'apple',
      });

      trackAmplitudeEvent('SessionStart', {
        ...session?.user,
        ...sessionLocalStorage,
        source: 'apple',
        status,
      });

      trackAmplitudeEvent('Offerwall', {
        ...session?.user,
        ...sessionLocalStorage,
        source: 'apple',
        status,
      });

      router.push('/offerwall');
    };

    handleGoogleSignIn();
  }, [router, session?.user, sessionLocalStorage, status]);

  return <Loader2 className="m-auto h-dvh animate-spin" size={50} />;
}

export default SignInApplePage;
