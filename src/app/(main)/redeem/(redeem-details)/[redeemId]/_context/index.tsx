import { createContext, useContext, useMemo } from 'react';

import type { FC } from 'react';

import type { RedeemDetailsContextProps, RedeemDetailsContextType } from '../_model';

/**
 * @constant AuxContext
 */
const RedeemDetailsContext = createContext<RedeemDetailsContextType>(undefined);

/**
 * @function RedeemDetailsProvider
 * @param {RedeemDetailsContextProps} props
 */
const RedeemDetailsProvider: FC<RedeemDetailsContextProps> = props => {
  const { children, isVerified, product } = props;

  const value: RedeemDetailsContextType = useMemo(() => {
    return { isVerified, product };
  }, [isVerified, product]);

  return <RedeemDetailsContext.Provider value={value}>{children}</RedeemDetailsContext.Provider>;
};

/**
 * @function useRedeemDetailsContext
 */
const useRedeemDetailsContext = () => {
  const context = useContext<RedeemDetailsContextType>(RedeemDetailsContext);

  if (context === undefined) {
    throw new Error('useRedeemDetailsContext must be used within a RedeemDetailsContext Provider');
  }

  return context;
};

export default RedeemDetailsProvider;

export { RedeemDetailsContext, RedeemDetailsProvider, useRedeemDetailsContext };
