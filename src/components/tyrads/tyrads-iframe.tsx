'use client';
import { memo, useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { useSession } from 'next-auth/react';

import { TYRADS_SDK_API_KEY, TYRADS_SDK_API_SECRET } from '@/constants';

import { cn } from '@/lib/utils';

import { Loader } from '../feedback/loading';

type Props = {
  className?: string;
  isFromRegister?: boolean;
};

const TyrAdsIframe = memo((props: Props) => {
  const { className = false } = props;
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { data: session } = useSession();

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const iframeSrc = `https://websdk.tyrads.com/?apiKey=${TYRADS_SDK_API_KEY}&apiSecret=${TYRADS_SDK_API_SECRET}&userID=${session?.user?.user_id || sessionLocalStorage?.user_id}&platform=web&newUser=false`;

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader className="flex h-full items-center" />}
      <iframe
        ref={iframeRef}
        className={cn('border-0 !border-none', loading ? 'hidden' : 'block', className)}
        height="650"
        id="tyrads_iframe"
        src={iframeSrc}
        style={{
          border: '0',
        }}
        width="2500"
        onLoad={() => {
          handleLoad();
        }}
      />
    </>
  );
});

TyrAdsIframe.displayName = 'TyrAdsIframe';

export default dynamic(() => Promise.resolve(TyrAdsIframe), {
  ssr: false,
  loading: () => <Loader className="flex h-full items-center" />,
});
