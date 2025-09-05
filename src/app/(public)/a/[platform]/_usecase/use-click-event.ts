import { useCallback } from 'react';

import { trackSignInClick, trackSignupClick, trackSignupMobileClick } from '../_dataLayers';

const useClickEvent = () => {
  const onSignupMobileClick = useCallback(() => {
    trackSignupMobileClick();
  }, []);
  const onSignupClick = useCallback(() => {
    trackSignupClick();
  }, []);

  const onSigninClick = useCallback(() => {
    trackSignInClick();
  }, []);

  return {
    handleOnSignupMobileClick: onSignupMobileClick,
    handleOnSignupClick: onSignupClick,
    handleOnSigninClick: onSigninClick,
  };
};

export default useClickEvent;
