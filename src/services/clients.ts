import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { TYR_SDK_API_URL } from '@/constants';

export async function client(
  endpoint: string | string[],
  {
    data,
    method = 'GET',
    params,
    apiURL = TYR_SDK_API_URL,
    token,
    build,
    headers: customHeaders,
    ...customConfig
  }: any = {},
) {
  const config = {
    url: `${apiURL}${endpoint}`,
    method: method || (data ? 'POST' : 'GET'),
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(build && { build: String(build) }),
      ...customHeaders,
    },
    ...customConfig,
  };

  if (params) {
    config.params = params;
    config.method = 'GET';
  }

  if (data) {
    config.data = data;
  }

  return axios(config)
    .then(async (response: AxiosResponse<any, any>) => {
      // console.log(
      //   `@success res, url = ${response.config.url} , METHOD = ${response.config.method}`,
      //   response
      // );

      return response;
    })
    .catch((e: any) => {
      console.log(`@Error res, url = ${e.config.url} , METHOD = ${e.config.method}`, e);
      return e;
    });
}
