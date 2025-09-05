import { isServer, MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import { toast } from '@/components/ui/use-toast';

import type { BaseResponse } from '@/model';

const showGenericErrorMsgToast = (err: any) => {
  console.log('@ERROR Uh oh! Something went wrong. 1', err);

  // toast({ variant: 'destructive', title: 'Uh oh! Something went wrong. 1' });
};
const showErrorMsgToast = (msg: string) => {
  console.log('@ERROR Uh oh! Something went wrong. 2', msg);
  return msg;

  // toast({ variant: 'destructive', title: 'Uh oh! Something went wrong. 2', description: msg, duration: 3000 });
};

const WHITELIST_ERROR_CODE = [1002];

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // with SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
        retry: failureCount => failureCount < 1,
        refetchOnWindowFocus: false,
      },
    },
    mutationCache: new MutationCache({
      onSuccess: data => {
        const dt: any = data as AxiosResponse<BaseResponse>;
        if (!dt?.data?.success && !WHITELIST_ERROR_CODE?.includes(dt?.data?.error?.code)) {
          showErrorMsgToast(dt?.data?.error?.message);
        }
      },
      onError: showGenericErrorMsgToast,
    }),
    queryCache: new QueryCache({
      onSuccess: data => {
        const dt = data as BaseResponse;
        if (!dt.success && !WHITELIST_ERROR_CODE.includes(dt.error.code)) {
          showErrorMsgToast(dt.error.message + String(dt.error.code));
        }
      },
      onError: showGenericErrorMsgToast,
    }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // server: always make a new query client
    return makeQueryClient();
  } else {
    // browser: make a new query client if we don't already have one
    // this is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
