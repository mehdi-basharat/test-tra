import { useMutation, useQuery } from '@tanstack/react-query';

import { TYR_REWARDS_ACMOSOFT } from '@/constants';

import { client } from '../clients';

const fetchCreateIframe = async ({ query = {} }: any) => {
  return client('/api/v1/integration/iframe', {
    method: 'POST',
    apiURL: TYR_REWARDS_ACMOSOFT,
    token: query?.token,
    build: 9999,
    data: {
      age: query?.age,
      gender: query?.gender,
    },
  }).then((data: any) => {
    return data;
  });
};

const useCreateIframe = ({ query = {}, options }: any = {}) => {
  return useQuery({
    queryKey: ['iframe-sdk-v3', query],
    queryFn: () => fetchCreateIframe({ query }),
    ...options,
  }) as any;
};

function useCreateIframeSubmit({ options }: any) {
  return useMutation({
    mutationFn: (reqBody: any) =>
      client('/api/v1/integration/iframe', {
        method: 'POST',
        data: {
          age: reqBody.age,
          gender: reqBody.gender,
        },
        apiURL: TYR_REWARDS_ACMOSOFT,
        build: 9999,
        token: reqBody?.token,
      }),
    ...options,
  }) as any;
}

export { useCreateIframe, useCreateIframeSubmit };
