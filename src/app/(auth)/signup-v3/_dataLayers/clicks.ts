import { sendGTMEvent } from '@/lib/gtm';
import { track } from '@amplitude/analytics-browser';

export const trackSignupClick = () => {
  const property = {
    event: 'clickSignup',
    eventCategory: 'signup page',
    eventAction: 'click sign up button',
    eventLabel: 'Sign up with email',
  };
  sendGTMEvent(property);
  track('Registration Flow', {
    step_name: 'click_email_signup',
  });
  track('Registration Flow', {
    step_name: 'view_email_signup_page',
  });
};

export const trackSignupWithGoogleClick = () => {
  const property = {
    event: 'clickSignup',
    eventCategory: 'signup page',
    eventAction: 'click sign up with google button',
    eventLabel: 'Sign up with Google Account',
  };
  sendGTMEvent(property);
  track('Registration Flow', {
    step_name: 'click_google_signup',
  });
};

export const trackLoginClick = () => {
  const property = {
    event: 'clickLogin',
    eventCategory: 'signup page',
    eventAction: 'click sign in link',
    eventLabel: 'Already have an account? Sign In',
  };
  sendGTMEvent(property);
};
