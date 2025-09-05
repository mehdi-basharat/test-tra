import type { Metadata } from 'next';
import VerisoulCheckPage from './VerisoulCheckPage';

export const metadata: Metadata = {
  title: 'verisoul-id-check',
};

const VerisoulCheckRoute = () => {
  return <VerisoulCheckPage />;
};

export default VerisoulCheckRoute;
