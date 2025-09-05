import { getSession } from 'next-auth/react';

import axios from 'axios';

import { API_URL, TYR_REWARDS_ACMOSOFT } from '@/constants';

interface Dependencies {
  params?: unknown;
  baseURL?: any;
}

const getTyradsInstance = (deps?: Dependencies) => {
  const { params, baseURL = API_URL } = deps ?? {};

  const instance = axios.create({
    baseURL,
    params,
    withCredentials: true,
    headers: { build: 999, platform: 'web' },
  });

  instance.interceptors.request.use(async function (req) {
    const session = await getSession();

    if (session) {
      const token = session.user.token;
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  });

  return instance;
};

export const tyradsAxiosInstance = (deps?: Dependencies) => {
  return getTyradsInstance(deps);
};

export { getTyradsInstance };
