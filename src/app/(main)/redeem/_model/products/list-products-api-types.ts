import type { BaseResponse } from '@/model';

export type TremendousProductsQueryType = BaseResponse<ProductsData[]>;

export interface ProductsData {
  user_id?: string;
  product_id?: string;
  product_name?: string;
  discount_percentage?: number;
  icon?: string;
  can_buy?: boolean;
  skus?: Sku[];
  country?: string;
  amount?: number;
  currency_code?: string;
}

export interface Sku {
  min?: number;
  max?: number;
}
