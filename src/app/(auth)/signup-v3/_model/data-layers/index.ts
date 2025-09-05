export type TrackSignupConversionParams = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  offerId?: string;
  source: 'credentials' | 'google';
};
