import { Loader2 } from 'lucide-react';

import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Loader2 className="animate-spin" />
    </div>
  );
};

export const DialogLoader = () => {
  return (
    <Dialog open={true}>
      <DialogContent className="w-fit">
        <DialogTitle className="hidden" />
        <Loader2 className="animate-spin" />
      </DialogContent>
    </Dialog>
  );
};
