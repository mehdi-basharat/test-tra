import type { NextFetchEvent, NextRequest } from 'next/server';
import type { NextResponse } from 'next/server';

import qs from 'qs';

import type { CustomMiddleware } from './chain';

export const PUBLIC_ROUTES = ['/', '/privacy-policy', '/terms-of-service'];
export const PRIVATE_ROUTES = ['/profile', '/offerwall', '/redeem'];
export const AUTH_ROUTES = ['/login', '/signup'];

export default function withStoreIncomingURLMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
    const { nextUrl } = request;

    const incomingParams = qs.parse(nextUrl.searchParams.toString());
    const existingCookie = request.cookies.get('offer')?.value;
    const existingParams = existingCookie ? qs.parse(existingCookie) : {};

    const mergedParams = { ...existingParams, ...incomingParams };

    response.cookies.set('offer', qs.stringify(mergedParams), {
      maxAge: 3 * 30 * 24 * 60 * 60, // 90 days
    });

    return middleware(request, event, response);
  };
}
