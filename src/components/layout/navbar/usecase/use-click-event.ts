import { useCallback } from 'react';

import { trackLoginClick, trackSignupClick } from '../dataLayers';

const useClickEvent = () => {
  const onLoginlick = useCallback(() => {
    trackLoginClick();
  }, []);

  const onSignupClick = useCallback(() => {
    trackSignupClick();
  }, []);

  return { handleOnLoginClick: onLoginlick, handleOnSignupClick: onSignupClick };
};

export default useClickEvent;
