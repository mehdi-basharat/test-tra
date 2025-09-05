import { sendGTMEvent } from '@/lib/gtm';
import { track } from '@amplitude/analytics-browser';

export const trackSignupMobileClick = () => {
  sendGTMEvent({
    event: 'clickSignup',
    eventCategory: 'landing page',
    eventAction: 'click signup on offer cta',
    eventLabel: 'Sign Up',
  });
};

export const trackSignupClick = () => {
  sendGTMEvent({
    event: 'clickSignup',
    eventCategory: 'landing page',
    eventAction: 'click signup on cta',
    eventLabel: 'Sign Up',
  });
};

export const trackSignInClick = () => {
  const property = {
    event: 'clickLogin',
    eventCategory: 'landing page',
    eventAction: 'click signin on cta',
    eventLabel: 'Already have an account? Sign In',
  };
  sendGTMEvent(property);
};
