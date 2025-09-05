import { sendGTMEvent } from '@/lib/gtm';

export const trackLoginClick = () => {
  const property = {
    event: 'clickLogin',
    eventCategory: 'login page',
    eventAction: 'click sign in button',
    eventLabel: 'Sign In',
  };
  sendGTMEvent(property);
};

export const trackLoginWithGoogleClick = () => {
  const property = {
    event: 'clickLogin',
    eventCategory: 'login page',
    eventAction: 'click sign in with google button',
    eventLabel: 'Sign in with Google Account',
  };
  sendGTMEvent(property);
};

export const trackLoginWithAppleClick = () => {
  const property = {
    event: 'clickLogin',
    eventCategory: 'login page',
    eventAction: 'click sign in with Apple button',
    eventLabel: 'Sign in with Apple Account',
  };
  sendGTMEvent(property);
};

export const trackLoginWithFacebookClick = () => {
  const property = {
    event: 'clickLogin',
    eventCategory: 'login page',
    eventAction: 'click sign in with Facebook button',
    eventLabel: 'Sign in with Facebook Account',
  };
  sendGTMEvent(property);
};

export const trackSignupClick = () => {
  const property = {
    event: 'clickSignup',
    eventCategory: 'login page',
    eventAction: 'click signup link',
    eventLabel: "Don't have an account? Sign Up",
  };
  sendGTMEvent(property);
};
