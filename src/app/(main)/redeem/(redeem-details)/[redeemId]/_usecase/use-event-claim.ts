import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useSession } from 'next-auth/react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import useAxios from '@/hooks/use-axios';

import type { BaseResponse } from '@/model';

import type { IdenfyTokenMutationType } from '../../../_model/auto-approval-auth';
import { useRedeemDetailsContext } from '../_context';
import type { CreateOrderVariables } from '../_model/create-order/api-types';

const useEventClaim = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { product } = useRedeemDetailsContext();

  const mutateGetIdenfyToken = useMutation<AxiosResponse<IdenfyTokenMutationType>>({
    mutationFn: () => axios.post('/api/idenfy', {}, { baseURL: '' }),
  });

  const mutateCreateOrder = useMutation({
    mutationFn: (params: CreateOrderVariables): Promise<AxiosResponse<BaseResponse<unknown>>> =>
      axios.postForm(`/v1/tremendous-giftcards`, params),
  });

  const mutateCreateOrderPaypal = useMutation({
    mutationFn: (params: CreateOrderVariables): Promise<AxiosResponse<BaseResponse<unknown>>> =>
      axios.postForm(`/v1/payouts`, params),
  });

  const onGenerateIdenfyToken = useCallback(async () => {
    const res = await mutateGetIdenfyToken.mutateAsync();

    if (!res.data.success) return;

    router.push(
      `https://app.prod.verisoul.ai/?session_id=${res.data.data?.token}&redirect_url=${encodeURIComponent(`https://app.tyrrewards.net/id-check/redirect?session_id=${res.data.data?.token}&cl=react`)}`,
    );
  }, [mutateGetIdenfyToken, router]);

  const onCreateOrder = useCallback(
    async (amount: string) => {
      return mutateCreateOrder.mutateAsync(
        { amount, email: session?.user?.email || sessionLocalStorage?.email, product_id: product.product_id },
        {
          onSuccess: () => queryClient.invalidateQueries({ queryKey: ['points', session?.user.user_id] }),
        },
      );
    },
    [mutateCreateOrder, product, queryClient, session, sessionLocalStorage],
  );

  const onCreateOrderPaypal = useCallback(
    async (amount: string) => {
      return mutateCreateOrderPaypal.mutateAsync(
        { amount, email: session?.user?.email || sessionLocalStorage?.email },
        {
          onSuccess: () => queryClient.invalidateQueries({ queryKey: ['points', session?.user.user_id] }),
        },
      );
    },
    [mutateCreateOrderPaypal, queryClient, session, sessionLocalStorage],
  );

  return {
    generatingToken: mutateGetIdenfyToken.isPending,
    creatingOrder: mutateCreateOrder.isPending || mutateCreateOrderPaypal.isPending,
    handleOnGenerateIdenfyToken: onGenerateIdenfyToken,
    handleOnCreateOrder: onCreateOrder,
    handleOnCreateOrderPaypal: onCreateOrderPaypal,
  };
};

export default useEventClaim;
