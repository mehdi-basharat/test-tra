'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getCookie } from 'cookies-next';

import { Button } from '@/components/ui/button';

import useClickEvent from './_usecase/use-click-event';

const DownloadButtons = () => {
  const { handleDownloadAndroidClick, handleDownloadIOSClick } = useClickEvent();
  const [resultUrl, setResultUrl] = useState('');
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const os = getCookie('os');
    setIsIOS(os === 'iOS');
    if (typeof window !== 'undefined') {
      const result = window.result?.clickURL;
      if (result) {
        setResultUrl(result);
      }
    }
  }, []);

  const downloadUrl = resultUrl || 'https://tyrrewards.onelink.me/UyjW/bxyszgp5';

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Link className="w-full md:w-56" href={downloadUrl}>
        <Button
          className="w-full p-6"
          variant="outline"
          onClick={isIOS ? handleDownloadIOSClick : handleDownloadAndroidClick}
        >
          <Image
            alt={isIOS ? 'app store' : 'google play store'}
            height={0}
            src={isIOS ? '/assets/logo/apple-app-store-v2.png' : '/assets/logo/google-play-store.svg'}
            width={20}
          />
          &nbsp; {isIOS ? 'Download on App Store' : 'Download on Google Play'}
        </Button>
      </Link>
    </div>
  );
};

export default DownloadButtons;
