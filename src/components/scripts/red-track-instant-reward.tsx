'use client';

import Script from 'next/script';

const RedTrackScriptInstantReward = () => {
  return (
    <Script
      src="https://start.play-tyrrewards.com/uniclick.js?attribution=lastpaid&cookiedomain=tyrrewards.com&cookieduration=90&defaultcampaignid=6870bcfcdb2170d3427570c7&regviewonce=false"
      strategy="afterInteractive"
    />
  );
};

export default RedTrackScriptInstantReward;
