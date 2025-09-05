import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/constants';

import { TEMP_APP_DATA } from '../../a/[platform]/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // google's limit is 50,000 URLs per sitemap

  return TEMP_APP_DATA.map(app => ({ url: `${BASE_URL}/a/${app.platform.toLowerCase()}?id=${app.package_name}` }));
}
