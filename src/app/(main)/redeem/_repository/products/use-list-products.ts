import { useMemo } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';
import qs from 'qs';

import { tyradsAxiosInstance } from '@/lib/axios';

import type { TremendousProductsQueryType } from '../../_model/products/list-products-api-types';

type Dependencies = {
  variables?: { country?: string; currency?: string };
  userId: string;
};

export const getTremendousListProducts = async (qs?: string, token?: string) => {
  const axios = tyradsAxiosInstance();

  const res = await axios.get<TremendousProductsQueryType>(`/v1/tremendous-giftcards?${qs}`, {
    ...(token && { headers: { Authorization: 'Bearer ' + token } }),
  });

  return res.data;
};

const useTremendousListProductsQuery = (deps?: Dependencies) => {
  const { variables, userId } = deps || {};

  const queryString = qs.stringify({ ...variables });

  const { data, isPending, error } = useSuspenseQuery({
    queryKey: ['tremendous', 'list-products'],
    queryFn: () => (!!userId ? getTremendousListProducts(queryString) : null),
  });

  if (error) throw new Error(error.message);

  return useMemo(() => {
    const normalized = {
      products: data?.success ? data?.data || [] : [],
    };

    return {
      data: normalized,
      loading: isPending,
      error,
    };
  }, [data, isPending, error]);
};

export default useTremendousListProductsQuery;
