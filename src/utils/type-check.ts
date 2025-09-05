/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosResponse } from 'axios';

import type { BaseResponse } from '@/model';

export const isAxiosResponse = (data: any): data is AxiosResponse => {
  return data && typeof data === 'object' && 'data' in data;
};

export const isResponseHasError = <T>(data: any): data is BaseResponse<T> => {
  return data && 'error' in data;
};
