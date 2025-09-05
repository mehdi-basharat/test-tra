import { useMemo } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';
import qs from 'qs';

import { tyradsAxiosInstance } from '@/lib/axios';

import { isResponseHasError } from '@/utils/type-check';

import type { TremendousRetrieveProductQueryType } from '../../_model/products/retrieve-products-api-types';

type Dependencies = {
  variables: { productId: string };
  enabled?: boolean;
};

export const getTremendousRetrieveProduct = async (qs: string, token?: string) => {
  const axios = tyradsAxiosInstance();

  const res = await axios.get<TremendousRetrieveProductQueryType>(`/v1/tremendous-giftcards/product_details?${qs}`, {
    ...(token && { headers: { Authorization: 'Bearer ' + token } }),
  });

  return res.data;
};

const useTremendousRetrieveProductQuery = (deps: Dependencies) => {
  const { variables, enabled } = deps;
  const { productId } = variables;

  const queryString = qs.stringify({ ...variables });

  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ['tremendous', 'retrieve-products', productId],
    queryFn: () => (enabled ? getTremendousRetrieveProduct(queryString) : null),
  });

  if (error) throw new Error(error.message);
  if (isResponseHasError<TremendousRetrieveProductQueryType>(data)) throw new Error();

  return useMemo(() => {
    return {
      data: data?.data,
      loading: isLoading,
      error,
    };
  }, [data, isLoading, error]);
};

export default useTremendousRetrieveProductQuery;
