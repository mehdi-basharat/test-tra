import { sendGTMEvent } from '@/lib/gtm';

import type {
  TrackUserVerificationFailedImpressionParams,
  TrackUserVerificationSuccessImpressionParams,
} from '../_model/data-layers';

export const trackUserVerificationSuccessImpression = (params: TrackUserVerificationSuccessImpressionParams) => {
  const { userId, email } = params;

  sendGTMEvent({
    event: 'viewSuccessUserVerification',
    eventCategory: 'verification page',
    eventAction: 'user status verification',
    eventLabel: '',
    userId,
    email,
  });
};

export const trackUserVerificationFailedImpression = (params: TrackUserVerificationFailedImpressionParams) => {
  const { userId, email } = params;

  sendGTMEvent({
    event: 'viewFailedUserVerification',
    eventCategory: 'verification page',
    eventAction: 'user status verification',
    eventLabel: '',
    userId,
    email,
  });
};
