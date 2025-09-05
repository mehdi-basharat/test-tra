import CheckIcon from '@/assets/icons';
import { VerificationSuccessSvg } from '@/assets/svg/verification';

import { Card, CardContent } from '@/components/ui/card';

const VerificationSuccess = () => {
  return (
    <Card className="w-full flex-1 border-none shadow-none drop-shadow-none sm:max-w-[90vw] sm:rounded-2xl sm:border-gray-100 sm:drop-shadow-md">
      <CardContent className="flex h-full flex-col items-center justify-center gap-4 overflow-hidden p-3 text-center sm:rounded-2xl sm:p-10">
        <div className="flex items-center justify-center gap-2">
          <div className="w-5">
            <CheckIcon />
          </div>
          <div className="whitespace-nowrap text-base font-semibold sm:text-lg"> Your ID Verification Success</div>
        </div>
        <VerificationSuccessSvg />
        <div>
          Congratulations!
          <br />
          Your ID verification has been approved.
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationSuccess;
