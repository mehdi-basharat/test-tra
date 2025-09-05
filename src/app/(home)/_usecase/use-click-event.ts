import { useCallback } from 'react';

import {
  trackInstallClick,
  trackMonetizationClick,
  trackSignupClick,
  trackUserAcquisitionClick,
} from '../_model/data-layers';

const useClickEvent = () => {
  const onSignupClick = useCallback(() => {
    trackSignupClick();
  }, []);

  const onInstallClick = useCallback(() => {
    trackInstallClick();
  }, []);

  const onUserAcquisitionClick = useCallback(() => {
    trackUserAcquisitionClick();
  }, []);

  const onMonetizationClick = useCallback(() => {
    trackMonetizationClick();
  }, []);

  return {
    handleOnSignupClick: onSignupClick,
    handleOnInstallClick: onInstallClick,
    handleOnUserAcquisitionClick: onUserAcquisitionClick,
    handleOnMonetizationClick: onMonetizationClick,
  };
};

export default useClickEvent;
