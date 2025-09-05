import { VerificationSuccessSvg } from '@/assets/svg/verification';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import useEventClaim from '../../../../_usecase/use-event-claim';

const ConfirmVerifyDialog = () => {
  const { generatingToken, handleOnGenerateIdenfyToken } = useEventClaim();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit" size="sm">
          Claim Now
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[22rem]">
        <DialogHeader>
          <DialogTitle className="mb-4 text-center leading-6">Verify your ID</DialogTitle>
          <DialogDescription className="mt-4 flex flex-col items-center gap-4 text-center">
            <VerificationSuccessSvg />
            <span>
              Before you start redeeming gift cards, please verify your ID. This process may takes up to 5 minutes.
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:justify-center sm:gap-12">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              No
            </Button>
          </DialogClose>
          <Button loading={generatingToken} type="button" onClick={handleOnGenerateIdenfyToken}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmVerifyDialog;
