import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { matchesAny } from '@/utils/common';

import type { CustomMiddleware } from './chain';

export const PUBLIC_ROUTES = ['/', '/privacy-policy', '/terms-of-service'];
export const PRIVATE_ROUTES = ['/profile', '/offerwall', '/redeem'];
export const AUTH_ROUTES = ['/login', '/signup'];
export const PRIVATE_ROUTES_REGEXES = [/^\/redeem\/.*$/];

export default function withAuthMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const { nextUrl } = request;

    const INTENDED_HOME_PATH = '/';

    if (nextUrl.pathname !== INTENDED_HOME_PATH) {
      return NextResponse.redirect(new URL(INTENDED_HOME_PATH, nextUrl));
    }

    const session =
      !!request.cookies.get('next-auth.session-token')?.value ||
      !!request.cookies.get('session-token-apple')?.value ||
      !!request.cookies.get('__Secure-next-auth.session-token')?.value;

    const fromRegister = request.cookies.get('fromRegister')?.value;
    const isLoginSuccess = request.cookies.get('is-login-success')?.value;

    const isAuthenticated = session;
    const isAuthRoute = matchesAny(nextUrl.pathname, AUTH_ROUTES);
    const isPrivate = matchesAny(nextUrl.pathname, PRIVATE_ROUTES, PRIVATE_ROUTES_REGEXES);

    // redirect to offerwall when from register and flickering to login
    if (request.nextUrl.pathname === '/login' && fromRegister === 'true') {
      const response = NextResponse.redirect(new URL('/offerwall', request.url));
      return response;
    }

    // redirect to the offerwall when a user accesses the new user route if they are not a new user
    const isNewUser = request.cookies.get('is-new-user')?.value;
    // if (nextUrl.pathname === '/new-user' && !isNewUser && isAuthenticated)
    //   return NextResponse.redirect(new URL('/offerwall', nextUrl));

    // Bypass auth check if fromRegister is true
    if (!isAuthenticated && !isAuthRoute && isPrivate) {
      if (fromRegister === 'true' || isLoginSuccess === 'true') {
        return middleware(request, event, NextResponse.next());
      }
      return NextResponse.redirect(new URL('/login', nextUrl));
    }

    // Redirect authenticated users away from auth routes
    if (isAuthenticated && isAuthRoute) {
      return NextResponse.redirect(new URL('/offerwall', nextUrl));
    }

    return middleware(request, event, NextResponse.next());
  };
}
