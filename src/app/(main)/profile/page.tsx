import type { Metadata } from 'next';

import ProfilePage from './Profile';

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function ProfileRoute() {
  return <ProfilePage />;
}
