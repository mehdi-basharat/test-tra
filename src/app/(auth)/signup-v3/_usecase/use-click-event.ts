import { useCallback, useEffect } from 'react';

import { signIn } from 'next-auth/react';

import { deleteCookie, setCookie } from 'cookies-next';

import { useSignupContext } from '../_context';
import { trackLoginClick, trackSignupClick, trackSignupWithGoogleClick } from '../_dataLayers';
import { trackSignupWithAppleClick } from '@/app/(auth)/signup/_dataLayers/clicks';

const useClickEvent = () => {
  const { emitter } = useSignupContext();

  const onSignupClick = useCallback(() => {
    emitter.emit('@signup/next');
    trackSignupClick();
  }, [emitter]);

  const onSignupWithGoogleClick = useCallback(() => {
    signIn('google', { callbackUrl: '/new-user' });
    trackSignupWithGoogleClick();
  }, []);

  const onSignupWithAppleClick = useCallback(async () => {
    trackSignupWithAppleClick();
  }, []);

  const onSignInClick = useCallback(() => {
    trackLoginClick();
  }, []);

  useEffect(() => {
    setCookie('auth-intent', 'signUp');

    return () => {
      deleteCookie('auth-intent');
    };
  }, []);

  return {
    handleOnSignupClick: onSignupClick,
    handleOnSignupWithGoogleClick: onSignupWithGoogleClick,
    handleOnSigInClick: onSignInClick,
    handleOnSignupWithAppleClick: onSignupWithAppleClick,
  };
};

export default useClickEvent;
