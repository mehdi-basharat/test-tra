import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { API_URL } from '@/constants';
import { tyradsAxiosInstance } from '@/lib/axios';

export async function POST(req: NextRequest) {
  try {
    const jsonBody = await req.json();

    const axios = tyradsAxiosInstance();

    const res = await axios.post(
      API_URL + 'v1/integration/iframe',
      {
        // age: jsonBody.age,
        // gender: jsonBody.gender,
      },
      {
        headers: {
          buid: '9999',
          Authorization: `Bearer ${jsonBody?.token}`,
        },
      },
    );

    return NextResponse.json(res.data);
  } catch (error) {
    console.log('@error api/sdkv3', error);

    // return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}
