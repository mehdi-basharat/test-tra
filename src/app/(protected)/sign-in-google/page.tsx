'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useSession } from 'next-auth/react';

import { Loader2 } from 'lucide-react';

import useAmplitudeContext from '@/hooks/use-amplitude';
import * as amplitude from '@amplitude/analytics-browser';

function SignInGooglePage() {
  const { data: session, status } = useSession();

  const { trackAmplitudeEvent }: any = useAmplitudeContext();
  const router = useRouter();

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

    amplitude.setUserId(session?.user?.user_id as any);

    trackAmplitudeEvent('Login', {
      ...session?.user,
      status,
      source: session?.user?.provider ?? 'google',
    });

    trackAmplitudeEvent('SessionStart', {
      ...session?.user,
      source: session?.user?.provider ?? 'google',
      status,
    });

    trackAmplitudeEvent('Offerwall', {
      ...session?.user,
      source: session?.user?.provider ?? 'google',
      status,
    });

    router.push('/offerwall');
  };

  useEffect(() => {
    handleGoogleSignIn();
  }, [session]);

  return <Loader2 className="m-auto h-dvh animate-spin" size={50} />;
}

export default SignInGooglePage;
