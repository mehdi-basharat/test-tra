import { createContext, useContext, useMemo } from 'react';

import type { FC } from 'react';

import type { UserDetailsContextProps, UserDetailsContextType } from '@/model/user-details';

import { useUserDetailsQuery } from '@/repository/user-details';

/**
 * @constant AuxContext
 */
const UserDetailsContext = createContext<UserDetailsContextType>(undefined);

/**
 * @function UserDetailsProvider
 * @param {UserDetailsContextProps} props
 */
const UserDetailsProvider: FC<UserDetailsContextProps> = props => {
  const { children, userId } = props;

  const { data: user } = useUserDetailsQuery({ variables: { userId } });

  const value = useMemo(() => {
    return { user } satisfies UserDetailsContextType;
  }, [user]);

  return <UserDetailsContext.Provider value={value}>{children}</UserDetailsContext.Provider>;
};

/**
 * @function useUserDetailsContext
 */
const useUserDetailsContext = () => {
  const context = useContext<UserDetailsContextType>(UserDetailsContext);

  if (context === undefined) {
    throw new Error('useUserDetailsContext must be used within a UserDetailsContext Provider');
  }

  return context;
};

export default UserDetailsProvider;

export { UserDetailsContext, UserDetailsProvider, useUserDetailsContext };
