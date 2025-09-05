import type { Metadata } from 'next';

import OfferwallPage from './Offerwall';

export const metadata: Metadata = {
  title: 'Offers',
};

const OfferwallRoute = () => {
  return <OfferwallPage />;
};

export default OfferwallRoute;
