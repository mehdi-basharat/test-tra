import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

import { tyradsAxiosInstance } from '@/lib/axios';

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });
    const axios = tyradsAxiosInstance();

    const searchParams = req.nextUrl.searchParams.toString();

    const res = await axios.get(`/v1/points${searchParams ? `?${searchParams}` : ''}`, {
      headers: {
        ...(token?.token ? { Authorization: 'Bearer ' + token.token } : {}),
      },
    });

    return NextResponse.json(res.data);
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Failed to process the request';

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
