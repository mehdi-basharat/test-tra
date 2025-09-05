import * as admin from 'firebase-admin';

import { FIREBASE_PROJECT_ID } from '@/constants';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/gm, '\n'),
    }),
  });
}
