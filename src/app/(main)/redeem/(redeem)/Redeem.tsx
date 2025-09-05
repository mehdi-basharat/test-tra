'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';

import { cn } from '@/lib/utils';

import { formatNumber } from '@/utils/formatter';
import { setFallbackImage } from '@/utils/images';

import { useTremendousListProductsQuery } from '../_repository/products';

import RedeemPageLoader from './_loaders/RedeemLoader';
import useClickEvent from './_usecase/use-click-event';

import ErrorAccountSuspendFeedback from '@/components/feedback/error-account-suspend';
import { useUserDetailsContext } from '@/context/user-details/user-details-context';
import useAmplitudeContext from '@/hooks/use-amplitude';
import { useSession } from 'next-auth/react';
import { useUserDetailsQuery } from '@/repository/user-details';

function RedeemPage() {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { user } = useUserDetailsContext();
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { trackAmplitudeEvent }: any = useAmplitudeContext();

  const { data: products } = useTremendousListProductsQuery({
    variables: { ...(user.country && { country: user.country }) },
    userId: user.id,
  });

  const { handleOnRedeemDetailsClick } = useClickEvent();

  useEffect(() => {
    trackAmplitudeEvent('Redeem', {
      ...session?.user,
      ...sessionLocalStorage,
      source: session?.user?.provider ? session?.user?.provider : 'apple',
      status,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { originalData: originalDataUser }: any = useUserDetailsQuery({
    variables: {
      userId: session?.user?.user_id ? session?.user?.user_id : sessionLocalStorage?.user_id,
    },
  });

  if (originalDataUser?.error?.message === 'Account Suspended') {
    return <ErrorAccountSuspendFeedback className="h-dvh bg-blue-50" />;
  }

  return (
    <Suspense fallback={<RedeemPageLoader />}>
      <section className="mx-auto flex w-full flex-1 sm:pt-10 sm:max-w-screen-3xl">
        <Card className="m-auto h-full w-full border-none shadow-none sm:max-w-[90vw] sm:rounded-2xl sm:border-gray-100 sm:drop-shadow-md">
          <CardContent className="flex flex-col items-center justify-center gap-2 p-3 sm:gap-4 sm:p-10 sm:py-10">
            <Link
              className="flex h-[25vw] max-h-[17rem] min-h-[11rem] w-full flex-col gap-2 overflow-hidden rounded-2xl border pb-3 text-center hover:border-yellow-400"
              href={`/redeem/paypal`}
              onClick={() => handleOnRedeemDetailsClick('Paypal')}
            >
              <div className="flex flex-1 items-center justify-center border-b bg-blue-900 p-10">
                <div className="relative h-full w-full max-w-[15rem]">
                  <Image
                    alt="paypal"
                    blurDataURL="/assets/logo/paypal.webp"
                    className="w-auto rounded-2xl object-contain drop-shadow-lg"
                    draggable={false}
                    placeholder="blur"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={'/assets/logo/paypal.webp'}
                    fill
                    priority
                  />
                </div>
              </div>
              <div className="px-2">
                <div className="text-sm font-semibold">PayPal International</div>
                <div className="text-xs">{`Starting from ${formatNumber(1, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}`}</div>
              </div>
            </Link>
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {products.products
                .filter(redeem => redeem.product_name !== 'paypal')
                .map(redeem => {
                  const image = redeem.icon;

                  return (
                    <Link
                      key={redeem.product_id}
                      className="flex h-full max-h-[15rem] min-h-[12rem] flex-col gap-3 overflow-hidden rounded-2xl border pb-3 text-center hover:border-yellow-400"
                      href={`/redeem/${redeem.product_id}`}
                      onClick={() => {
                        handleOnRedeemDetailsClick(redeem.product_name || '');
                      }}
                    >
                      <div className="h-[7rem] border-b">
                        {image ? (
                          <div className={cn('relative h-full')}>
                            <Image
                              alt={redeem.product_name || ''}
                              blurDataURL={image}
                              className="object-contain"
                              draggable={false}
                              quality={50}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              src={image}
                              fill
                              onError={setFallbackImage}
                            />
                          </div>
                        ) : (
                          <div className="text-md flex h-full items-center justify-center bg-gray-100 p-3 text-center font-semibold lg:text-2xl">
                            {redeem.product_name}
                          </div>
                        )}
                      </div>
                      <div className="px-2">
                        <div className="text-sm font-semibold">{redeem.product_name}</div>
                        <div className="text-xs">{`Starting from ${formatNumber(redeem.amount || 0, { style: 'currency', currency: redeem.currency_code, minimumFractionDigits: 0 })}`}</div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      </section>
    </Suspense>
  );
}

export default RedeemPage;
