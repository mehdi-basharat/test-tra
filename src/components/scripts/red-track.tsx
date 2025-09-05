'use client';

import Script from 'next/script';

const RedTrackScript = () => {
  return (
    <Script
      src="https://start.play-tyrrewards.com/uniclick.js?attribution=lastpaid&cookiedomain=tyrrewards.com&cookieduration=90&defaultcampaignid=683ffd569524f9317f56aa0d&regviewonce=false"
      strategy="afterInteractive"
    />
  );
};

export default RedTrackScript;
