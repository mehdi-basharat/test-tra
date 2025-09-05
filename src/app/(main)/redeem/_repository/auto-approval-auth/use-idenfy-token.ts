import { tyradsAxiosInstance } from '@/lib/axios';

import type { IdenfyTokenMutationType } from '../../_model/auto-approval-auth';

export const getIdenfyToken = async (): Promise<IdenfyTokenMutationType> => {
  const axios = tyradsAxiosInstance();

  const res = await axios.post('/v1/auto-approval-auth/idenfy-token');

  return res.data;
};
