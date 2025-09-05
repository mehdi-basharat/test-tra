import type { MetadataRoute } from 'next';

import { APP_ENV, BASE_URL } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules:
      APP_ENV === 'production' || APP_ENV === 'local'
        ? [
            {
              userAgent: '*',
              allow: ['/', '/a/*'],
              disallow: ['/profile', '/offerwall', '/redeem', '/redeem/*'],
            },
          ]
        : [
            {
              userAgent: '*',
              disallow: '*',
            },
          ],
    sitemap: [`${BASE_URL}/sitemap.xml`, `${BASE_URL}/sitemap/apps/sitemap.xml`],
  };
}
