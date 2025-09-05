import { useCallback, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import { trackUserVerificationFailedImpression, trackUserVerificationSuccessImpression } from '../_dataLayers';

type Dependencies = {
  status: string;
};

const useViewEvent = (deps: Dependencies) => {
  const { status } = deps;
  const { data: session } = useSession();
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const onViewPage = useCallback(() => {
    if (status === 'success') {
      trackUserVerificationSuccessImpression({
        userId: session?.user?.user_id || sessionLocalStorage?.user_id,
        email: session?.user?.email || sessionLocalStorage?.email,
      });
    } else if (status === 'failed') {
      trackUserVerificationFailedImpression({
        userId: session?.user?.user_id || sessionLocalStorage?.user_id,
        email: session?.user?.email || sessionLocalStorage?.email,
      });
    }
  }, [session, status, sessionLocalStorage]);

  return { handleOnViewPage: onViewPage };
};

export default useViewEvent;
