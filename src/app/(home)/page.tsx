import type { ServerSideComponentProps } from '@/types';

import Home from './Home';

export default async function HomeRoute(props: ServerSideComponentProps<{}>) {
  const { searchParams } = props;

  return <Home {...searchParams} />;
}
