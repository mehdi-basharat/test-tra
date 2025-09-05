import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { getSession, signIn } from 'next-auth/react';

import * as amplitude from '@amplitude/analytics-browser';
import { deleteCookie, setCookie } from 'cookies-next';
import type { UseFormReturn } from 'react-hook-form';

import useAmplitudeContext from '@/hooks/use-amplitude';

import type { SignInSchemaType } from '../_model/login/types';

type Dependencies = {
  form: UseFormReturn<SignInSchemaType>;
};

const useSignInEvent = (deps: Dependencies) => {
  const { form } = deps;
  const [loading, setLoading] = useState<boolean>(false);
  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const router = useRouter();

  const onSubmit = useCallback(
    async (values: SignInSchemaType) => {
      const { email, password } = values;
      const isValid = await form.trigger();

      if (!isValid) return;

      setLoading(true);

      const res = await signIn('credentials', { email, password, redirect: false });

      if (res?.ok) {
        setTimeout(async () => {
          const session = await getSession();
          if (session) {
            amplitude.setUserId(session?.user?.user_id as any);

            trackAmplitudeEvent('Login', {
              ...session?.user,
              source: session?.user?.provider ?? 'email',
            });

            trackAmplitudeEvent('SessionStart', {
              ...session?.user,
              source: session?.user?.provider ?? 'email',
            });

            trackAmplitudeEvent('Offerwall', {
              ...session?.user,
              source: session?.user?.provider ?? 'email',
            });

            router.push('/offerwall');
            window.location.reload();
          } else {
            // force reload biar session kebaca
            window.location.reload();
          }
        }, 500);
      } else {
        setLoading(false);
        try {
          const error = JSON.parse(res?.error || '');

          if (error.code === 1002) {
            form.setError('password', { message: 'Invalid email or password. Please try again.' });
          } else {
            form.setError('password', { message: error.message || 'Something went wrong!' });
          }
        } catch {}
      }

      setLoading(false);
    },
    [form, router],
  );

  useEffect(() => {
    setCookie('auth-intent', 'signIn');

    return () => {
      deleteCookie('auth-intent');
    };
  }, []);

  return { loading, onSubmit };
};

export default useSignInEvent;
