import { useMemo } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';

import { tyradsAxiosInstance } from '@/lib/axios';

import type { TremendousRetrieveProductQueryType } from '../../_model/products/retrieve-products-api-types';

export const getTremendousRetrievePaypal = async (token?: string) => {
  const axios = tyradsAxiosInstance();

  const res = await axios.get<TremendousRetrieveProductQueryType>(`/v1/payouts/paypal`, {
    ...(token && { headers: { Authorization: 'Bearer ' + token } }),
  });

  return res.data;
};

type Depedencies = {
  enabled?: boolean;
};

const useTremendousRetrievePaypalQuery = (deps?: Depedencies) => {
  const { enabled } = deps || {};

  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ['tremendous', 'retrieve-products', 'paypal'],
    queryFn: () => (enabled ? getTremendousRetrievePaypal() : null),
  });

  if (error) throw new Error(error.message);

  return useMemo(() => {
    return {
      data: (data?.success && data.data) || {},
      loading: isLoading,
      error,
    };
  }, [data, isLoading, error]);
};

export default useTremendousRetrievePaypalQuery;
