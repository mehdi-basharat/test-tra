import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const Coin = (props: Props) => {
  const { className } = props;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute bottom-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-[1em] text-white shadow-inner drop-shadow-[2px_2px_1px_rgba(0,0,0,0.25)]',
        className,
      )}
    >
      <div className="flex h-[80%] w-[80%] items-center justify-center rounded-full bg-yellow-400 shadow-inner">$</div>
    </div>
  );
};

export default Coin;
