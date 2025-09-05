import { sendGTMEvent } from '@/lib/gtm';

export const trackLoginClick = () => {
  const property = {
    event: 'clickLogin',
    eventCategory: 'homepage',
    eventAction: 'click login on navbar',
    eventLabel: 'Login',
  };
  sendGTMEvent(property);
};

export const trackSignupClick = () => {
  const property = {
    event: 'clickSignup',
    eventCategory: 'homepage',
    eventAction: 'click signup on navbar',
    eventLabel: 'Register',
  };
  sendGTMEvent(property);
};
