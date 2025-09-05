import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { tyradsAxiosInstance } from '@/lib/axios';

export async function POST(req: NextRequest) {
  try {
    const axios = tyradsAxiosInstance();

    const form = await req.formData();
    const res = await axios.postForm('/v1/register/send_otp', form);

    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}
