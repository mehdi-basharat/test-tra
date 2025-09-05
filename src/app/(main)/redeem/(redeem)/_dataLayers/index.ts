import { sendGTMEvent } from '@/lib/gtm';

import type { DataLayerParameters } from '@/types';

export const trackRedeemDetailsClick = (params: Partial<DataLayerParameters>) => {
  const { eventLabel = '' } = params;

  sendGTMEvent({
    event: 'clickRewardDetails',
    eventCategory: 'redeem page',
    eventAction: 'click reward details on redeempage',
    eventLabel,
  });
};
