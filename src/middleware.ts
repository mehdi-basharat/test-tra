import { chain, withAuthMiddleware, withStoreIncomingURLMiddleware, withUserAgentMiddleware } from '@/middlewares';

const middlewares = [withAuthMiddleware, withUserAgentMiddleware, withStoreIncomingURLMiddleware];

export default chain(middlewares);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - script (script files)
     * - assets (assets files)
     */
    '/((?!api|_next/static|_next/image|assets|favicon.ico|icons|script|manifest.webmanifest).*)',
  ],
};
