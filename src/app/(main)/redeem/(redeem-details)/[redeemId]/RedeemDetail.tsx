'use client';

import { useParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { uniqueId } from 'lodash';

import { Card, CardContent } from '@/components/ui/card';
import { TypographyH4 } from '@/components/ui/typography';

import { useTremendousRetrievePaypalQuery, useTremendousRetrieveProductQuery } from '../../_repository/products';

import ProductBanner from './_components/ProductBanner';
import RedeemDetailsProvider from './_context';
import RedeemDetailLoader from './_loaders/RedeemDetailLoader';
import Gifts from './_presentations/Gifts';
import useAmplitudeContext from '@/hooks/use-amplitude';
import { useSession } from 'next-auth/react';

type Props = {
  isVerified: boolean;
};

const RedeemDetailPage = (props: Props) => {
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const { isVerified } = props;
  const { redeemId } = useParams<{ redeemId: string }>();
  const { trackAmplitudeEvent }: any = useAmplitudeContext();
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { data: otherProduct } = useTremendousRetrieveProductQuery({
    variables: { productId: redeemId },
    enabled: redeemId !== 'paypal',
  });
  const { data: paypal } = useTremendousRetrievePaypalQuery({ enabled: redeemId === 'paypal' });

  const product = otherProduct ?? paypal;

  useEffect(() => {
    trackAmplitudeEvent('RedeemDetail', {
      ...session?.user,
      ...sessionLocalStorage,
      source: session?.user?.provider ? session?.user?.provider : 'apple',
      status,
      ...otherProduct,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) return null;

  return (
    <Suspense fallback={<RedeemDetailLoader />}>
      <RedeemDetailsProvider isVerified={isVerified} product={product}>
        <div className="mx-auto flex w-full flex-1 sm:pt-10 sm:max-w-screen-3xl">
          <Card className="m-auto min-h-full w-full border-none shadow-none sm:max-w-[90vw] sm:rounded-2xl sm:border-gray-100 sm:drop-shadow-md">
            <CardContent className="flex flex-col gap-3 p-3 sm:gap-4 sm:p-10 sm:py-10">
              <ProductBanner />
              <section>
                <TypographyH4 className="mb-3">Redeem Instruction</TypographyH4>
                <details className="text-muted-foreground">
                  <summary className="mb-2 text-sm">See Details</summary>
                  <ul className="text-xs" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    {(product.redeem_instruction?.verbose || product.redeem_instruction?.concise || '-')
                      .split('\r\n')
                      .map(line => (
                        <li key={uniqueId()} className="mb-1">
                          {line.replace(/^\d+./, match => `${match} `)}
                        </li>
                      ))}
                  </ul>
                </details>
              </section>
              <Gifts />
            </CardContent>
          </Card>
        </div>
      </RedeemDetailsProvider>
    </Suspense>
  );
};

export default RedeemDetailPage;
