import { useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';

import { tyradsAxiosInstance } from '@/lib/axios';

import type { UserDetailsQueryType } from '@/model/user-details';

import normalizeUserDetails from './normalizer';

export const getUserDetails = async (userId = '', token?: string) => {
  const axios = tyradsAxiosInstance();

  try {
    const res = await axios.get<UserDetailsQueryType>('/v1/users/' + userId, {
      ...(token && { headers: { Authorization: 'Bearer ' + token } }),
    });

    return res.data;
  } catch (err) {
    throw new Error('Failed to fetch user details');
  }
};

type Dependencies = {
  variables: { userId?: string };
};

const useUserDetailsQuery = (deps: Dependencies) => {
  const {
    variables: { userId },
  } = deps;

  const { data, isPending, error } = useQuery({
    queryKey: ['user-details', userId],
    queryFn: () => (!!userId ? getUserDetails(userId) : null),
  });

  return useMemo(() => {
    const normalized = normalizeUserDetails(data);

    return {
      originalData: data,
      data: normalized,
      loading: isPending,
      error,
    };
  }, [data, isPending, error]);
};

export default useUserDetailsQuery;
