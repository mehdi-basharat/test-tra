import { tyradsAxiosInstance } from '@/lib/axios';

import type { AutoApprovalAuthMutationType } from '../../_model/auto-approval-auth/api-types';

export const getAutoApprovalAuth = async (token?: string): Promise<AutoApprovalAuthMutationType> => {
  const axios = tyradsAxiosInstance();

  const res = await axios.post(
    '/v1/auto_approval_auth',
    {},
    {
      ...(token && { headers: { Authorization: 'Bearer ' + token } }),
    },
  );

  return res.data;
};
