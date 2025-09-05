'use client';
import Link from 'next/link';

import { useSession } from 'next-auth/react';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import { Loader2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';

import useDisclosure from '@/hooks/use-disclosure';

import { cn } from '@/lib/utils';

import { useUserTyrPointsQuery } from '@/repository/user-tyr-points';

import { convertPointsToDollars } from '@/utils/conversion';
import { formatNumber, formatNumberToCompact } from '@/utils/formatter';
import { useEffect, useState } from 'react';

const UserPoints = () => {
  const { data: session } = useSession();
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { isOpen: isPoint, toggle: togglePoint } = useDisclosure(true);

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { data: points, loading: pointsFetching } = useUserTyrPointsQuery({
    variables: { userId: session?.user?.user_id || sessionLocalStorage?.user_id },
  });

  return (
    <div className="flex items-center justify-end gap-2">
      <div className="flex items-center gap-4 rounded-full bg-slate-700 p-2">
        <SwitchPrimitives.Root
          className={cn(
            'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            'h-6 w-14 data-[state=checked]:bg-yellow-300',
          )}
          id="point"
          onClick={togglePoint}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
              'h-7 w-7 shadow-inner data-[state=checked]:translate-x-8',
            )}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-yellow-500 shadow-inner">
              <div className="flex h-[80%] w-[80%] items-center justify-center rounded-full bg-yellow-400 text-lg font-bold shadow-inner drop-shadow-lg">
                {isPoint ? 'T' : '$'}
              </div>
            </div>
          </SwitchPrimitives.Thumb>
        </SwitchPrimitives.Root>
        <div className="min-w-[3.5rem] pr-4 text-right">
          {pointsFetching ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Label className="text-sm sm:text-base" htmlFor="point">
              {isPoint
                ? formatNumberToCompact(points.balance, 2)
                : formatNumber(convertPointsToDollars(points.balance), {
                    style: 'currency',
                    currency: 'USD',
                    notation: 'compact',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
            </Label>
          )}
        </div>
      </div>
      <Link href="/profile">
        <Avatar className="h-[30px] w-[30px]">
          <AvatarImage
            alt={session?.user?.first_name || sessionLocalStorage?.first_name}
            src={session?.user?.image || sessionLocalStorage?.image}
          />
          <AvatarFallback className="bg-blue-500 capitalize">
            {session?.user?.first_name?.[0] || sessionLocalStorage?.first_name?.[0] || session?.user?.email?.[0]}
          </AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default UserPoints;
