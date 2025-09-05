'use client';

import dynamic from 'next/dynamic';

import type { CountUpProps } from 'react-countup';
import CountUp from 'react-countup';

const CountUpCSR = (props: CountUpProps) => {
  return <CountUp {...props} />;
};

export default dynamic(() => Promise.resolve(CountUpCSR), { ssr: true });
