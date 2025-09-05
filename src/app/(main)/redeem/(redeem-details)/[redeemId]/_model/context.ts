import type { ProductData } from '../../../_model/products/retrieve-products-api-types';

export type RedeemDetailsContextProps = {
  children: React.ReactNode;
  isVerified: boolean;
  product: ProductData;
};

export type RedeemDetailsContextType = { isVerified: boolean; product: ProductData } | undefined;
