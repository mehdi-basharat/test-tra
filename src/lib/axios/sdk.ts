import axios from 'axios';

import { TYR_SDK_API_URL, TYRADS_SDK_API_KEY, TYRADS_SDK_API_SECRET } from '@/constants';

interface Dependencies {
  params?: unknown;
}

const getTyrSDKInstance = (deps?: Dependencies) => {
  const { params } = deps ?? {};

  const instance = axios.create({
    baseURL: TYR_SDK_API_URL,
    params,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'X-API-Key': TYRADS_SDK_API_KEY,
      'X-API-Secret': TYRADS_SDK_API_SECRET,
    },
  });

  return instance;
};

export const tyrSDKAxiosInstance = (deps?: Dependencies) => {
  return getTyrSDKInstance(deps);
};

export { getTyrSDKInstance };
