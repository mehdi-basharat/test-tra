import { sendGTMEvent } from '@/lib/gtm';

import type { TrackSignInConversionParams } from '../_model/data-layers';

export const trackLoginConversion = (params: TrackSignInConversionParams) => {
  const { userId, email, firstName, lastName } = params;

  sendGTMEvent<TrackSignInConversionParams>({
    event: 'conversionLogin',
    eventCategory: 'login page',
    eventAction: 'successfully login',
    eventLabel: '',
    userId,
    email,
    firstName,
    lastName,
  });
};
