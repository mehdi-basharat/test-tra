'use client';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import * as amplitude from '@amplitude/analytics-browser';
import { deleteCookie, getCookie } from 'cookies-next';
import { Loader2 } from 'lucide-react';

import { trackLoginConversion } from '@/app/(auth)/login/_dataLayers';

import { Card, CardContent } from '@/components/ui/card';

import useAmplitudeContext from '@/hooks/use-amplitude';

import { OfferVariables } from '@/app/(auth)/signup/_model/register';
import ErrorAccountSuspendFeedback from '@/components/feedback/error-account-suspend';
import TyradsIframeSdkV3 from '@/components/tyrads/tyrads-iframe-sdk-v3';
import { useUserDetailsQuery } from '@/repository/user-details';
import qs from 'qs';

const OfferwallPage = () => {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();
  const router = useRouter();

  const { data: session, status } = useSession();

  const isLoginSuccess = getCookie('is-login-success');
  const offer = getCookie('offer') || '';
  const gbraid = getCookie('gbraid');
  const wbraid = getCookie('wbraid');
  const redTrackClickId = getCookie('rtkclickid-store') || '';

  const parsedOffer: OfferVariables = qs.parse(offer);

  const utm: OfferVariables = {
    transaction_id: redTrackClickId || parsedOffer.transaction_id || null,
    source: parsedOffer.source || null,
    utm_source: parsedOffer.utm_source || null,
    utm_campaign: parsedOffer.utm_campaign || null,
    utm_id: parsedOffer.utm_id || null,
    utm_content: parsedOffer.utm_content || null,
    utm_term: parsedOffer.utm_term || null,
    gbraid: parsedOffer.gbraid || gbraid || null,
    wbraid: parsedOffer.wbraid || wbraid || null,
  };

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const { originalData: originalDataUser }: any = useUserDetailsQuery({
    variables: {
      userId: session?.user?.user_id ? session?.user?.user_id : sessionLocalStorage?.user_id,
    },
  });

  const gender = originalDataUser?.data?.gender ? (originalDataUser?.data?.gender === '0' ? 'male' : 'female') : '';

  const handleTrackVerisoul = async () => {
    try {
      await window?.Verisoul?.account({
        id: String(session?.user?.user_id ? session?.user?.user_id : sessionLocalStorage?.user_id),
        email: session?.user?.email ? session?.user?.email : sessionLocalStorage?.email,
        metadata: {
          ...sessionLocalStorage,
          session,
          status,
          utm,
          originalDataUser: originalDataUser?.data,
        },
      });
    } catch (error) {
      console.log('@VerisoulError', error);
    }
  };

  const handleLoginWebEngage = async () => {
    try {
      window?.webengage?.user?.login(session?.user?.user_id ? session?.user?.user_id : sessionLocalStorage?.user_id);
      window?.webengage?.track('User Web', session?.user ? session?.user : sessionLocalStorage);
      window?.webengage?.user?.setAttribute(
        'user_id',
        session?.user?.user_id ? session?.user?.user_id : sessionLocalStorage?.user_id,
      );
      window?.webengage?.user?.setAttribute(
        'first_name',
        session?.user?.first_name ? session?.user?.first_name : sessionLocalStorage?.first_name,
      );
      window?.webengage?.user?.setAttribute(
        'last_name',
        session?.user?.last_name ? session?.user?.last_name : sessionLocalStorage?.last_name,
      );
      originalDataUser?.data?.dob && window?.webengage?.user?.setAttribute('birth_date', originalDataUser?.data?.dob);
      gender && window?.webengage?.user?.setAttribute('gender', gender);
      window?.webengage?.user?.setAttribute(
        'email',
        session?.user?.email ? session?.user?.email : sessionLocalStorage?.email,
      );
      window?.webengage?.user?.setAttribute('phone', originalDataUser?.data?.phone || '');
      window?.webengage?.user?.setAttribute(
        'image',
        session?.user?.image ? session?.user?.image : sessionLocalStorage?.image,
      );
      window?.webengage?.user?.setAttribute('provider', session?.user?.provider ? session?.user?.provider : 'apple');
      window?.webengage?.user?.setAttribute(
        'token',
        session?.user?.token ? session?.user?.token : sessionLocalStorage?.token,
      );
      window?.webengage?.user?.setAttribute('status', status || 'authenticated');
      window?.webengage?.user?.setAttribute('utm_campaign', utm?.utm_campaign || '');
      window?.webengage?.user?.setAttribute('utm_source', utm?.utm_source || '');
      window?.webengage?.user?.setAttribute('utm_term', utm?.utm_term || '');
      window?.webengage?.user?.setAttribute('gbraid', utm?.gbraid || '');
      window?.webengage?.user?.setAttribute('wbraid', utm?.wbraid || '');
      window?.webengage?.user?.setAttribute('transaction_id', utm?.transaction_id || '');
      window?.webengage?.user?.setAttribute('source', utm?.source || '');
      window?.webengage?.user?.setAttribute('utm_id', utm?.utm_id || '');
      window?.webengage?.user?.setAttribute('utm_content', utm?.utm_content || '');
    } catch (error) {
      console.log('@webengageError', error);
    }
  };

  useEffect(() => {
    if (!(session || sessionLocalStorage) && !isLoginSuccess) {
      console.log('masuk sini');

      router.push('/login');
      return;
    }

    if (session || sessionLocalStorage) {
      amplitude.setUserId(
        (session?.user?.user_id as any) ? (session?.user?.user_id as any) : sessionLocalStorage?.user_id,
      );

      trackAmplitudeEvent('Offerwall', {
        ...session?.user,
        ...sessionLocalStorage,
        source: session?.user?.provider ? session?.user?.provider : 'apple',
        status,
        gender,
        birth_date: originalDataUser?.data?.dob ?? 'NA',
        phone: originalDataUser?.data?.phone ?? 'NA',
        username: originalDataUser?.data?.username ?? 'NA',
        role_name: originalDataUser?.data?.role_name ?? 'NA',
        role_id: originalDataUser?.data?.role_id ?? 'NA',
        review: originalDataUser?.data?.review ?? 'NA',
        rating: originalDataUser?.data?.rating ?? 'NA',
        country: originalDataUser?.data?.country ?? 'NA',
        alt_email: originalDataUser?.data?.alt_email ?? 'NA',
        transaction_id: utm?.transaction_id ?? 'NA',
      });

      // Send Verisoul data (optional)
      handleTrackVerisoul();

      handleLoginWebEngage();

      trackLoginConversion({
        userId: session?.user?.user_id ? session?.user?.user_id : sessionLocalStorage?.user_id,
        email: session?.user?.email ? session?.user?.email : sessionLocalStorage?.email,
        firstName: session?.user?.first_name ? session?.user?.first_name : sessionLocalStorage?.first_name,
        lastName: session?.user?.last_name ? session?.user?.last_name : sessionLocalStorage?.last_name,
      });

      deleteCookie('is-login-success');
    }
  }, [
    gender,
    isLoginSuccess,
    originalDataUser?.data?.alt_email,
    originalDataUser?.data?.country,
    originalDataUser?.data?.dob,
    originalDataUser?.data?.phone,
    originalDataUser?.data?.rating,
    originalDataUser?.data?.review,
    originalDataUser?.data?.role_id,
    originalDataUser?.data?.role_name,
    originalDataUser?.data?.username,
    router,
    session,
    sessionLocalStorage,
    status,
    trackAmplitudeEvent,
    utm?.transaction_id,
  ]);

  if (originalDataUser?.error?.message === 'Account Suspended') {
    return <ErrorAccountSuspendFeedback className="h-dvh bg-blue-50" />;
  }

  return (
    <section className="m-auto flex w-full flex-1 max-w-screen-3xl md:pt-10">
      <Card className="m-auto h-full w-full border-none shadow-none md:max-w-[90vw] md:rounded-2xl md:border-gray-100 md:drop-shadow-md">
        <CardContent className="flex h-full justify-center overflow-hidden p-0 md:rounded-2xl">
          <Suspense fallback={<Loader2 className="animate-spin" />}>
            <TyradsIframeSdkV3 className="h-full" />
          </Suspense>
        </CardContent>
      </Card>
    </section>
  );
};

export default OfferwallPage;
