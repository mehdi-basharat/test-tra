'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import HaveAccount from '@/app/(auth)/_components/HaveAccount';

import SmartQr from '@/components/tyrads/smart-qr';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import useClickEvent from '../../_usecase/use-click-event';
import { TEMP_APP_DATA } from '../../constants';
import SocialProof from '../social-proof';

const OfferWithSignup = () => {
  const searchParams = useSearchParams();
  const { handleOnSignupClick, handleOnSigninClick } = useClickEvent();

  const data = TEMP_APP_DATA.find(data => data.package_name === searchParams.get('id')) || null;

  if (!data) return null;

  return (
    <div className="mx-auto mb-4 w-full max-w-[90vw] sm:max-w-full xl:w-[30rem]">
      <div className="sticky top-5 flex flex-col gap-5">
        <Card className="flex flex-col items-center gap-4 rounded-2xl bg-[url('/assets/bg.png')] bg-[length:75rem] bg-[center_top_-20rem] bg-no-repeat py-3">
          <CardHeader className="w-full pb-0 text-center">
            <div className="mx-auto mb-5 w-52">
              <Image
                alt="tyr rewards logo"
                draggable={false}
                height={47}
                src="/assets/logo/tyr-rewards-logo4.png"
                width={256}
                priority
              />
            </div>
            <CardTitle className="text-xl">Want to play {data.app_title}?</CardTitle>
          </CardHeader>
          <SocialProof />
          <CardContent className="w-full">
            <Link href="/signup" onClick={handleOnSignupClick}>
              <Button className="w-full">Sign up</Button>
            </Link>
          </CardContent>
          <CardFooter>
            <HaveAccount onSignInClick={handleOnSigninClick} />
          </CardFooter>
        </Card>
        <Card className="relative hidden h-48 overflow-hidden rounded-2xl bg-[url('/assets/bg.png')] bg-[length:75rem] bg-[center_top_-20rem] bg-no-repeat sm:h-64 md:block">
          <CardHeader className="p-3 sm:p-6 sm:pb-3">
            <CardTitle className="text-base font-light sm:text-xl">
              <span className="font-semibold">Play more than a 100 games</span>
              <br />
              directly on our apps
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <SmartQr />
            <Image
              alt="games"
              className="absolute -bottom-[150px] -right-[50px] w-52 rotate-[25deg] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] sm:-bottom-[200] sm:w-64"
              draggable={false}
              height={0}
              loading="lazy"
              src="/assets/games.png"
              width={400}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(OfferWithSignup), { ssr: false });
