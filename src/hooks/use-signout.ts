import { useCallback } from 'react';

import type { SignOutParams } from 'next-auth/react';
import { signOut } from 'next-auth/react';

import { useQueryClient } from '@tanstack/react-query';

type Dependencies = {
  options?: SignOutParams<false>;
};
const useSignOut = (deps?: Dependencies) => {
  const { options } = deps || {};
  const queryClient = useQueryClient();

  const onSignOut = useCallback(() => {
    signOut(options);
    queryClient.clear();
  }, [options, queryClient]);

  return { handleOnSignOut: onSignOut };
};

export default useSignOut;
