import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';

import { tyradsAxiosInstance } from '@/lib/axios';

import type { PointsQueryType } from '@/model/user-tyr-points';

export const getUserTyrPoints = async (userId: string, token?: string) => {
  const axios = tyradsAxiosInstance();

  const res = await axios.get<PointsQueryType>('/api/points?user_id=' + userId, {
    baseURL: '',
    // ...(token && { headers: { Authorization: 'Bearer ' + token } }),
  });

  return res.data;
};

type Dependencies = {
  variables: { userId?: string };
};

const useUserTyrPointsQuery = (deps: Dependencies) => {
  const {
    variables: { userId = '' },
  } = deps;

  const { data, isPending, error } = useQuery({
    queryKey: ['points', userId],
    queryFn: () => getUserTyrPoints(userId),
    refetchInterval: 1000 * 60,
    enabled: !!userId,
  });

  return useMemo(() => {
    const dt = (data?.success && data.data) || {};

    const normalized = { earned: dt.earned ?? 0, redeemed: dt.redeemed ?? 0, balance: dt.balance ?? 0 };

    return {
      data: normalized,
      loading: isPending,
      error,
    };
  }, [data, isPending, error]);
};

export default useUserTyrPointsQuery;
