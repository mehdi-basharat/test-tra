'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

import { FACEBOOK_PIXEL_ID } from '@/constants';

import * as pixel from '../../lib/fb-pixel';

const FacebookPixelScript = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    pixel.pageview();
  }, [pathname, loaded]);

  return (
    <Script
      data-pixel-id={FACEBOOK_PIXEL_ID}
      id="fb-pixel"
      src="/scripts/fb-pixel.js"
      strategy="worker"
      onLoad={() => setLoaded(true)}
    />
  );
};

export default FacebookPixelScript;
