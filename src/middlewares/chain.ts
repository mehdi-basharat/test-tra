import type { NextMiddlewareResult } from 'next/dist/server/web/types';
import type { NextFetchEvent, NextRequest } from 'next/server';
import type { NextResponse } from 'next/server';

export type CustomMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse,
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;

type MiddlewareFactory = (next: CustomMiddleware) => CustomMiddleware;

export default function chain(middlewares: MiddlewareFactory[], index = 0): CustomMiddleware {
  if (index >= middlewares.length) {
    return (_request: NextRequest, _event: NextFetchEvent, response: NextResponse) => response;
  }

  const currentMiddleware = middlewares[index];
  const nextMiddleware = chain(middlewares, index + 1);

  return (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
    return currentMiddleware((req, evt, res) => nextMiddleware(req, evt, res))(request, event, response);
  };
}
