'use client';
import dynamic from 'next/dynamic';
import { memo, useRef, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { Loader } from '../feedback/loading';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const TyrAdsIframeV3 = memo((props: any) => {
  const { className = false } = props;
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { data: session } = useSession();

  let baseUrl: any;
  if (typeof window !== 'undefined') {
    baseUrl = window.location.origin;
  }

  const isStaging = baseUrl.includes('localhost') || baseUrl.includes('staging');

  const query = {
    // age: 21,
    // gender: 1,
    token: sessionLocalStorage?.token ? sessionLocalStorage?.token : session?.user?.token,
    isStaging,
  };

  const enabledRes = sessionLocalStorage?.token ? sessionLocalStorage?.token : session?.user?.token;

  const { data, isLoading } = useQuery({
    queryKey: ['api-sdk-v3', query],
    queryFn: async (): Promise<any> => axios.post('/api/sdkv3', query),
    enabled: !!enabledRes,
  });

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoading ? (
        <Loader className="flex h-full items-center" />
      ) : (
        <iframe
          ref={iframeRef}
          className={cn('border-0 !border-none', isLoading ? 'hidden' : 'block', className)}
          height="650"
          id="tyrads_iframe"
          src={data?.data?.data?.iframe_url}
          style={{
            border: '0',
          }}
          width="2500"
        />
      )}
    </>
  );
});

TyrAdsIframeV3.displayName = 'TyrAdsIframeV3';

export default dynamic(() => Promise.resolve(TyrAdsIframeV3), {
  ssr: false,
  loading: () => <Loader className="flex h-full items-center" />,
});
