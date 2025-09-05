import type { BaseResponse } from '@/model';

export type TremendousRetrieveProductQueryType = BaseResponse<ProductData>;

export interface ProductData {
  product_id?: string;
  product_name?: string;
  redeem_instruction?: RedeemInstruction;
  country?: string;
  icon?: string;
  currency_code?: string;
  redeem_options?: Record<string, string>;
}

export interface RedeemInstruction {
  concise?: string;
  verbose?: string;
}
