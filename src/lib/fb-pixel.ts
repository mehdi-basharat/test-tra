export const pageview = () => {
  window?.fbq('track', 'PageView');
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const fbTrackEvent = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && typeof window?.fbq === 'function') {
    window?.fbq('track', name, options);
  } else {
    console.warn('fbq is not defined');
  }
};
