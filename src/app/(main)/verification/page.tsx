'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

import Switch from '@/components/data-display/switch-component';
import { Button } from '@/components/ui/button';

import type { ServerSideComponentProps } from '@/types';

import VerificationFailed from './_components/VerificationFailed';
import VerificationSuccess from './_components/VerificationSuccess';
import useViewEvent from './_usecase/use-view-event';

export default function VerificationStatusRoute(props: ServerSideComponentProps<{}, { status: string }>) {
  const { searchParams } = props;
  const { status } = searchParams;
  const ref = useRef<null | boolean>(null);

  const { handleOnViewPage } = useViewEvent({ status });

  useEffect(() => {
    if (!ref.current && status) {
      handleOnViewPage();
      ref.current = true;
    }
  }, [handleOnViewPage, status]);

  return (
    <section className="m-auto flex w-full max-w-[120rem] flex-1 flex-col items-center gap-8 px-3 sm:pt-10">
      <Switch condition={status}>
        <Switch.Case component={VerificationSuccess} when="success" />
        <Switch.Case component={VerificationFailed} when="failed" />
        <Switch.Default component={VerificationFailed} />
      </Switch>
      <Link className="w-full sm:w-fit" href="/redeem">
        <Button className="mb-10 w-full md:mb-0">Back to Redeem Page</Button>
      </Link>
    </section>
  );
}
