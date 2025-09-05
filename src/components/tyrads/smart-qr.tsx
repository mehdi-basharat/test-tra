'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { getCookie } from 'cookies-next';
import { noop } from 'lodash';
import { Loader } from 'lucide-react';

import { Button } from '@/components/ui/button';

type Props = {
  onInstallClick?: () => void;
};

const SmartQR = (props: Props) => {
  const { onInstallClick = noop } = props;

  const [resultUrl, setResultUrl] = useState('No output from script');

  const QRRendered = useRef(false);
  const bannerRendered = useRef(false);

  const os = getCookie('os');
  const isMobile = os === 'iOS' || os === 'Android';

  useEffect(() => {
    if (!QRRendered.current) {
      if (typeof window !== 'undefined' && window.AF_SMART_SCRIPT) {
        const result = window.result?.clickURL;
        if (result) {
          setResultUrl(result);
          if (isMobile) return;
          window.AF_SMART_SCRIPT.displayQrCode('my_qr_code_div_id');
        }
      }

      QRRendered.current = true;
    }
  }, [isMobile]);

  useEffect(() => {
    if (!bannerRendered.current) {
      if (typeof window !== 'undefined' && window.AF) {
        window.AF('banners', 'showBanner');
      }

      bannerRendered.current = true;
    }

    return () => {
      if (typeof window !== 'undefined' && window.AF) {
        window.AF('banners', 'hideBanner');
      }
    };
  }, []);

  return os === 'iOS' || os === 'Android' ? (
    <Link className="w-full" href={resultUrl ? resultUrl : '#'} onClick={onInstallClick}>
      <Button className="w-full" size="sm">
        Install
      </Button>
    </Link>
  ) : (
    <div className="z-10" id="my_qr_code_div_id" />
  );
};

export default dynamic(() => Promise.resolve(SmartQR), {
  ssr: false,
  loading: () => <Loader className="flex h-full items-center" />,
});
