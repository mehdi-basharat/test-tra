'use client';
import { useRouter } from 'next/navigation';

import SignupPage from '@/app/(auth)/signup/Signup';

import { Dialog, DialogContent } from '@/components/ui/dialog';

const InterceptSignupPage = () => {
  const router = useRouter();

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent
        className="r h-[95vh] max-w-[90vw] overflow-auto px-0 lg:max-w-screen-md"
        withCloseButton
        onInteractOutside={e => e.preventDefault()}
      >
        <span className="m-auto">
          <SignupPage />
        </span>
      </DialogContent>
    </Dialog>
  );
};

export default InterceptSignupPage;
