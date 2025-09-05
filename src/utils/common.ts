import { APP_ENV } from '@/constants';

export const isProduction = APP_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';

export const matchesAny = (target: string, values: string[], patterns?: RegExp[]): boolean => {
  if (values.includes(target)) return true;

  return patterns?.some(pattern => pattern.test(target)) ?? false;
};
