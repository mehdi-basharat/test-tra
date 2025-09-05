import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  return NextResponse.json({ token });
}
