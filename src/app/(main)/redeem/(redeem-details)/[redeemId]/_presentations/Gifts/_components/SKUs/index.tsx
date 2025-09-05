import dynamic from 'next/dynamic';

import { useSession } from 'next-auth/react';

import Switch from '@/components/data-display/switch-component';
import RadialProgress from '@/components/feedback/radial-progress';
import { Card, CardContent } from '@/components/ui/card';

import { useUserTyrPointsQuery } from '@/repository/user-tyr-points';

import { convertDollarsToPoints, convertPointsToDollars } from '@/utils/conversion';
import { formatNumber } from '@/utils/formatter';

import { useRedeemDetailsContext } from '../../../../_context';
import { useEffect, useState } from 'react';

const LazyConfirmRedeemDialog = dynamic(() => import('../ConfirmRedeemDialog'), { loading: () => <p>Loading...</p> });
const LazyConfirmVerifyDialog = dynamic(() => import('../ConfirmVerifyDialog'), { loading: () => <p>Loading...</p> });

type Props = {
  amount: number;
};

const SKUs = (props: Props) => {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { amount } = props;
  const { isVerified, product } = useRedeemDetailsContext();
  const { data: session } = useSession();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const formattedAmount = formatNumber(amount, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });

  const { data: points } = useUserTyrPointsQuery({
    variables: { userId: session?.user?.user_id || sessionLocalStorage?.user_id },
  });

  const isEligibleToClaim = convertPointsToDollars(points.balance) >= amount;

  return (
    <Card>
      <CardContent className="flex min-h-[6rem] items-center justify-between gap-3 p-4">
        <div>
          <div className="mb-3 text-sm font-semibold sm:text-base">
            Amount:&nbsp;
            {formattedAmount}
          </div>
          <div className="text-wrap break-normal text-xs text-muted-foreground sm:text-sm">
            {isEligibleToClaim
              ? 'You are eligible to claim'
              : `You need ${formatNumber(convertDollarsToPoints(amount) - points.balance)} more`}
          </div>
        </div>
        {isEligibleToClaim ? (
          <Switch condition={String(isVerified)}>
            <Switch.Case
              component={() => (
                <LazyConfirmRedeemDialog amount={amount} title={`${product.product_name} ${formattedAmount}?`} />
              )}
              when="true"
            />
            <Switch.Case component={LazyConfirmVerifyDialog} when="false" />
          </Switch>
        ) : (
          <div className="flex items-center justify-center">
            <RadialProgress max={convertDollarsToPoints(amount)} size={60} strokeWidth={5} value={points.balance} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SKUs;
