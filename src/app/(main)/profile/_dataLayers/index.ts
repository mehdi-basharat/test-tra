import { sendGTMEvent } from '@/lib/gtm';
import { track } from '@amplitude/analytics-browser';
import * as amplitude from '@amplitude/analytics-browser';

export const trackLogoutClick = async (session: any) => {
  try {
    const property = {
      event: 'clickLogout',
      eventCategory: 'profile page',
      eventAction: 'click logout button',
      eventLabel: 'Logout',
    };
    sendGTMEvent(property);
    track('Logout', {
      ...session?.user,
      source: session?.user?.provider ?? 'email',
    });
    amplitude.reset();
    await window?.Verisoul?.reinitialize();
  } catch (error) {
    console.log('ERROR path: tyrrewards-webapp/src/app/(main)/profile/_dataLayers/index.ts', error);
  }
};
