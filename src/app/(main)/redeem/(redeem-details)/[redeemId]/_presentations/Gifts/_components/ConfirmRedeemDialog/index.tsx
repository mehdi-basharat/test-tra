import dynamic from 'next/dynamic';

import { DialogLoader } from '@/components/feedback/loading';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';

import useDisclosure from '@/hooks/use-disclosure';

const LazyDialogContent = dynamic(() => import('./lazy-content'), { loading: () => <DialogLoader /> });

type Props = {
  title: string;
  amount: number;
};

const ConfirmRedeemDialog = (props: Props) => {
  const { isOpen, toggle, open, close } = useDisclosure();

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <Button className="w-fit" size="sm" onClick={open}>
        Claim Now
      </Button>
      {isOpen && <LazyDialogContent {...props} close={close} />}
    </Dialog>
  );
};

export default ConfirmRedeemDialog;
