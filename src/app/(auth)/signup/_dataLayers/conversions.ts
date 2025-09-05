import { getCookie } from 'cookies-next';
import qs from 'qs';

import { fbTrackEvent } from '@/lib/fb-pixel';
import { sendGTMEvent } from '@/lib/gtm';

import type { OfferCookie } from '@/types/cookies';

import type { TrackSignupConversionParams } from '../_model/data-layers';

export const trackSignupConversion = (params: TrackSignupConversionParams): void => {
  const { userId, email, firstName, lastName, source } = params;

  const offer = getCookie('offer');
  const parsedOffer: OfferCookie = qs.parse(String(offer) || '');

  fbTrackEvent('CompleteRegistration', { email, source });
  sendGTMEvent<Omit<TrackSignupConversionParams, 'source'>>({
    event: 'conversionSignup',
    eventCategory: 'signup page',
    eventAction: parsedOffer.utm_id ? 'successfully signup - EF offer' : 'successfully signup',
    eventLabel: '',
    userId,
    email,
    firstName,
    lastName,
    offerId: parsedOffer.utm_id,
  });
};
