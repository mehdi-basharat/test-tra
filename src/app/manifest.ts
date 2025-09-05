import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tyr Rewards',
    short_name: 'Tyr',
    description:
      'The Greatest Rewards Platform! Play, earn, and enjoy endless gifts, cash rewards, and exclusive perks. Start earning with Tyr Rewards today!',
    start_url: '/',
    display: 'standalone',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
  };
}
