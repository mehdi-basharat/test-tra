export type BaseResponse<T = unknown> = { success: true; data: T } | { success: false; error: Error };

interface Error {
  message: string;
  code: number;
}
