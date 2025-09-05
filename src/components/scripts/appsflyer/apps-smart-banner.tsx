import Script from 'next/script';

import { APPSFLYER_WEB_KEY } from '@/constants';

const AppsflyerSmartBannerScript = () => {
  return (
    <Script
      data-smart-banner-web-key={APPSFLYER_WEB_KEY}
      id="appsflyer-smart-banner"
      src="/scripts/smart-banner.js"
      strategy="worker"
    />
  );
};

export default AppsflyerSmartBannerScript;
