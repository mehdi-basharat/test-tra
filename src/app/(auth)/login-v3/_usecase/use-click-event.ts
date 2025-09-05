import { useCallback } from 'react';

import { signIn } from 'next-auth/react';

import { trackLoginWithAppleClick, trackLoginWithFacebookClick } from '@/app/(auth)/login/_dataLayers/clicks';
import { trackLoginClick, trackLoginWithGoogleClick, trackSignupClick } from '../_dataLayers';

const useClickEvent = () => {
  const onSignInClick = useCallback(() => {
    trackLoginClick();
  }, []);

  const onSignInWithGoogleClick = useCallback(async () => {
    trackLoginWithGoogleClick();

    signIn('google', { callbackUrl: '/sign-in-google' });
  }, []);

  const onSignInWithAppleClick = useCallback(async () => {
    trackLoginWithAppleClick();
    // signIn('apple', { callbackUrl: '/sign-in-apple' });
  }, []);

  const onSignInWithFacebookClick = useCallback(async () => {
    trackLoginWithFacebookClick();
  }, []);

  const onSignupClick = useCallback(() => {
    trackSignupClick();
  }, []);

  return {
    handleOnSignInClick: onSignInClick,
    handleOnSignInWithGoogleClick: onSignInWithGoogleClick,
    handleOnSignInWithAppleClick: onSignInWithAppleClick,
    handleOnSignInWithFacebookClick: onSignInWithFacebookClick,
    handleOnSignupClick: onSignupClick,
  };
};

export default useClickEvent;
