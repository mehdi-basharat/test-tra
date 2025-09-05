import { useCallback } from 'react';

import { trackRedeemDetailsClick } from '../_dataLayers';

const useClickEvent = () => {
  const onRedeemDetailsClick = useCallback((productName: string) => {
    trackRedeemDetailsClick({ eventLabel: productName });
  }, []);

  return { handleOnRedeemDetailsClick: onRedeemDetailsClick };
};

export default useClickEvent;
