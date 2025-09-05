import { fbTrackEvent } from '@/lib/fb-pixel';
import { sendGTMEvent } from '@/lib/gtm';

export const trackDownloadAndroidClick = () => {
  fbTrackEvent('Lead');
  sendGTMEvent({
    event: 'clickInstall',
    eventCategory: 'web2app',
    eventAction: 'click install on web2app',
    eventLabel: 'Download on Google Play',
  });
};

export const trackDownloadIOSClick = () => {
  fbTrackEvent('Lead');
  sendGTMEvent({
    event: 'clickInstall',
    eventCategory: 'web2app',
    eventAction: 'click install on web2app',
    eventLabel: 'Download on App Store',
  });
};

export const trackSignupClick = () => {
  sendGTMEvent({
    event: 'clickSignup',
    eventCategory: 'homepage',
    eventAction: 'click signup on banner',
    eventLabel: 'Sign Up',
  });
};

export const trackInstallClick = () => {
  sendGTMEvent({
    event: 'clickInstall',
    eventCategory: 'homepage',
    eventAction: 'click install on banner',
    eventLabel: 'Install',
  });
};

export const trackUserAcquisitionClick = () => {
  sendGTMEvent({
    event: 'clickUserAcquisition',
    eventCategory: 'homepage',
    eventAction: 'click user acquisition on homepage',
    eventLabel: 'User Acquisition Details',
  });
};

export const trackMonetizationClick = () => {
  sendGTMEvent({
    event: 'clickMonetization',
    eventCategory: 'homepage',
    eventAction: 'click monetization on homepage',
    eventLabel: 'Monetization Details',
  });
};
