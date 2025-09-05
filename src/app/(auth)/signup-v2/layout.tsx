import RedTrackScriptSignUpV2 from '@/components/scripts/red-track-sign-up-v2';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <RedTrackScriptSignUpV2 />
      {children}
    </>
  );
}
