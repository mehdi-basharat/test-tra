import type { BaseResponse } from '@/model';

export type IdenfyTokenMutationType = BaseResponse<IdenfyTokenData>;

export interface IdenfyTokenData {
  token?: string;
}
