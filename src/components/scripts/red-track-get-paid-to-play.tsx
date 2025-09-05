'use client';

import Script from 'next/script';

const RedTrackScriptGetPaidToplay = () => {
  return (
    <Script src="https://start.play-tyrrewards.com/uniclick.js?attribution=lastpaid&cookiedomain=tyrrewards.com&cookieduration=90&defaultcampaignid=685dade91d219ef15a212353&regviewonce=false" />
  );
};

export default RedTrackScriptGetPaidToplay;
