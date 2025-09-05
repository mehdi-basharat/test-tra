import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

import { tyradsAxiosInstance } from '@/lib/axios';

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    const axios = tyradsAxiosInstance();

    const form = await req.formData();
    const res = await axios.postForm('/v1/tremendous-giftcards', {
      headers: {
        ...(token?.token ? { Authorization: 'Bearer ' + token.token } : {}),
      },
    });

    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}
