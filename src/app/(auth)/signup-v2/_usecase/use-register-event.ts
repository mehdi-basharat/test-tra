import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { getSession, signIn } from 'next-auth/react';

import { track } from '@amplitude/analytics-browser';
import * as amplitude from '@amplitude/analytics-browser';
import { useMutation } from '@tanstack/react-query';
import { getCookie, setCookie } from 'cookies-next';
import qs from 'qs';

import useAmplitudeContext from '@/hooks/use-amplitude';
import useAxios from '@/hooks/use-axios';

import { trackSignupConversion } from '../_dataLayers';
import type { OfferVariables, RegisterMutationType, RegisterVariables } from '../_model/register';
import type { SignupDataType } from '../_model/types';

const useRegisterEvent = () => {
  const router = useRouter();
  const axios = useAxios();
  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const registerMutation = useMutation({
    mutationFn: (data: RegisterVariables) =>
      axios.postForm<RegisterMutationType>('/api/register/new', data, { baseURL: '' }),
    onSuccess: async (data, variables) => {
      if (data.data.success) {
        const response = await signIn('credentials', {
          email: variables.email,
          password: variables.password,
          redirect: false,
        });

        const objTrack = {
          ...data?.data?.data,
          ...variables,
          source: variables?.source || 'credentials',
        };

        if (response?.ok) {
          setCookie('is-login-success', 'true');

          // Send account information to Verisoul for dashboard analysis
          // This function is intended only for customers piloting Verisoul.
          // Do not use for long term production use or real-time fraud prevention.
          // source : https://docs.verisoul.ai/integration/frontend/browser#account
          // await window?.Verisoul?.account({
          //   id: String(data.data.data.user_id),
          //   email: data.data.data.email,
          //   metadata: objTrack,
          // });

          amplitude.setUserId(data?.data?.data?.user_id as any);

          trackAmplitudeEvent('Signup', {
            user_id: data?.data?.data?.user_id,
            source: 'credentials',
            role_id: objTrack?.role_id,
            username: objTrack?.username ?? 'NA',
            first_name: objTrack?.first_name ?? 'NA',
            last_name: objTrack?.last_name ?? 'NA',
            photo: objTrack?.photo ?? 'NA',
            birth_date: objTrack?.dob ?? 'NA',
            age: objTrack?.age ?? 'NA',
            gender: objTrack?.gender ?? 'NA',
            phone: objTrack?.phone ?? 'NA',
            email: objTrack?.email ?? 'NA',
            transaction_id: objTrack?.transaction_id ?? 'NA',
          });

          trackAmplitudeEvent('SessionStart', {
            ...data?.data?.data,
            source: (data?.data?.data as any)?.provider ?? 'email',
            role_id: objTrack?.role_id,
            username: objTrack?.username ?? 'NA',
            first_name: objTrack?.first_name ?? 'NA',
            last_name: objTrack?.last_name ?? 'NA',
            photo: objTrack?.photo ?? 'NA',
            birth_date: objTrack?.dob ?? 'NA',
            age: objTrack?.age ?? 'NA',
            gender: objTrack?.gender ?? 'NA',
            phone: objTrack?.phone ?? 'NA',
            email: objTrack?.email ?? 'NA',
            transaction_id: objTrack?.transaction_id ?? 'NA',
          });

          trackAmplitudeEvent('Offerwall', {
            ...data?.data?.data,
            source: (data?.data?.data as any)?.provider ?? 'email',
          });

          trackSignupConversion({
            email: data.data.data.email || '',
            source: 'credentials',
            userId: String(data.data.data.user_id) || '',
            firstName: data.data.data.first_name || '',
            lastName: data.data.data.last_name || '',
          });

          setTimeout(async () => {
            const session = await getSession();
            if (session) {
              trackAmplitudeEvent('SessionStart', {
                ...session?.user,
                source: session?.user?.provider ?? 'email',
              });

              trackAmplitudeEvent('Offerwall', {
                ...session?.user,
                source: session?.user?.provider ?? 'email',
              });

              router.push('/offerwall');
            } else {
              // force reload biar session kebaca
              window.location.reload();
            }
          }, 500);

          window.location.reload();
        }
      }
    },
    onError() {
      track('Registration Flow', {
        step_name: 'submit_email_signup_form_error',
      });
    },
  });

  const onRegister = useCallback(
    (params: SignupDataType) => {
      const { fullname, ...formData } = params;
      const names = fullname.trim().split(/\s+/);
      const firstName = names[0];
      const lastName = names.slice(1).join(' ');

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

      const dataObj = { first_name: firstName, last_name: lastName, ...utm, ...formData };

      trackAmplitudeEvent('Registration Flow', {
        step_name: 'submit_view_age_gender_form',
      });

      const res = registerMutation.mutate(dataObj);

      return res;
    },
    [registerMutation, trackAmplitudeEvent],
  );

  return { handleOnRegister: onRegister };
};

export default useRegisterEvent;
