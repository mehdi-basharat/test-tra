import type { BaseResponse } from '../types';

export type PointsQueryType = BaseResponse<PointsData>;

export interface PointsData {
  earned?: number;
  redeemed?: number;
  balance?: number;
}
