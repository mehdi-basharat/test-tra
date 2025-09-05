import { useParams } from 'next/navigation';

import { toast } from 'sonner';

import CheckIcon from '@/assets/icons';

import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { formatNumber } from '@/utils/formatter';

import useEventClaim from '../../../../_usecase/use-event-claim';

type Props = {
  title: string;
  amount: number;
  close: () => void;
};

const Content = (props: Props) => {
  const { redeemId } = useParams<{ redeemId: string }>();
  const { title, amount, close } = props;

  const { creatingOrder, handleOnCreateOrder, handleOnCreateOrderPaypal } = useEventClaim();

  const handleOnYesClick = async () => {
    let isSuccess = false;

    if (redeemId === 'paypal') {
      const res = await handleOnCreateOrderPaypal(formatNumber(amount, { maximumFractionDigits: 2 }));
      isSuccess = res.data.success;
    } else {
      const res = await handleOnCreateOrder(formatNumber(amount, { maximumFractionDigits: 2 }));
      isSuccess = res.data.success;
    }

    if (isSuccess) {
      close();
      toast(
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <CheckIcon />
            <div className="font-bold">Redeem Success</div>
          </div>
          <div>You successfuly redeem your rewards! Enjoy!</div>
        </div>,
      );
    }
  };

  return (
    <DialogContent className="w-[22rem]">
      <DialogHeader>
        <DialogTitle className="text-center leading-6">{title}</DialogTitle>
        <DialogDescription className="text-center">
          Are you sure you want to redeem your TPoints with this item?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="gap-2 sm:justify-center sm:gap-12">
        <DialogClose asChild>
          <Button type="button" variant="outline">
            No
          </Button>
        </DialogClose>
        <Button loading={creatingOrder} type="button" onClick={handleOnYesClick}>
          Yes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default Content;
