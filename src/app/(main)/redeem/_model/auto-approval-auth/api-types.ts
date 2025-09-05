import type { BaseResponse } from '@/model';

export type AutoApprovalAuthMutationType = BaseResponse<AutoApprovalAuthData>;

export interface AutoApprovalAuthData {
  last_status?: number;
  verification_needed?: boolean;
}
