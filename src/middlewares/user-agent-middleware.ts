import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse, userAgent } from 'next/server';

import type { CustomMiddleware } from './chain';

export default function withUserAgentMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const { nextUrl } = request;
    const { device, os } = userAgent(request);

    const url = nextUrl;
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

    url.searchParams.set('viewport', viewport);
    url.searchParams.set('os', os.name || 'unknown');

    const response = NextResponse.rewrite(url);
    response.cookies.set('os', os.name || 'unknown');

    return middleware(request, event, response);
  };
}
