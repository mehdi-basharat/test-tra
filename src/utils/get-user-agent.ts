const getDeviceTypeFromUserAgent = () => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera: string }).opera;
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream: string }).MSStream) {
    return 'iOS';
  }
  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  return 'Desktop';
};

const getDeviceType = () => {
  const uaData = (navigator as Navigator & { userAgentData?: { mobile: boolean; platform: string } }).userAgentData;

  if (uaData) {
    if (uaData.mobile) {
      if (uaData.platform === 'iOS') return 'iOS';
      if (uaData.platform === 'Android') return 'Android';
    }
    return 'Desktop';
  }

  // Fallback to user agent string for older browsers
  return getDeviceTypeFromUserAgent();
};

export default getDeviceType;
