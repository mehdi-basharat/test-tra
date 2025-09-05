'use client';

import FailedVerisoulIdCheck from '@/components/feedback/failed-verisoul-id-check';
import SuccessAccountSuspendFeedback from '@/components/feedback/success-verisoul-id-check';
import { useSearchParams } from 'next/navigation';

const VerisoulCheckPage = () => {
  const searchParams = useSearchParams();

  const result = searchParams.get('result');

  if (result === 'success') {
    return <SuccessAccountSuspendFeedback className="h-dvh bg-blue-50" />;
  } else {
    return <FailedVerisoulIdCheck className="h-dvh bg-blue-50" />;
  }
};

export default VerisoulCheckPage;
