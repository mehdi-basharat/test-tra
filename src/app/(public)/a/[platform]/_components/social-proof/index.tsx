'use client';

import { useEffect } from 'react';

import { random } from 'lodash';
import CountUp from 'react-countup';

import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

import { createAppStore } from '../../_store';

type Props = {
  className?: string;
};

const useAppStore = createAppStore({ number: 96372 });

const SocialProof = (props: Props) => {
  const { className } = props;
  const { number, prevNumber, increment } = useAppStore();

  useEffect(() => {
    const interval = setInterval(increment, random(3000, 5000));
    return () => clearInterval(interval);
  }, [increment]);

  return (
    <div className={cn('flex w-full items-center justify-center gap-1', className)}>
      <div className="flex w-auto flex-1 flex-col items-center gap-1">
        <span className="text-xl font-semibold text-primary md:text-2xl">
          <CountUp duration={5} end={number} prefix="$" start={prevNumber} />
        </span>
        <div className="whitespace-nowrap text-xs">Paid out</div>
      </div>
      <Separator className="h-5 bg-gray-600" orientation="vertical" />
      <div className="flex w-20 flex-1 flex-col items-center gap-1">
        <span className="text-xl font-semibold text-primary md:text-2xl">
          <CountUp end={1326254} start={0} />
        </span>
        <div className="whitespace-nowrap text-xs">Players joined</div>
      </div>
      <Separator className="h-5 bg-gray-600" orientation="vertical" />
      <div className="flex flex-1 flex-col items-center gap-1">
        <span className="text-xl font-semibold text-blue-500 md:text-2xl">Paypal</span>
        <div className="whitespace-nowrap text-xs">Instant payout</div>
      </div>
    </div>
  );
};

export default SocialProof;
