'use client';
import Image from 'next/image';
import Link from 'next/link';

import CountUp from '@/components/data-display/count-up';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography';

import SmartQr from '../../components/tyrads/smart-qr';

import Coin from './_components/Coin';
import useClickEvent from './_usecase/use-click-event';
import { useSession } from 'next-auth/react';
import { useUserDetailsQuery } from '@/repository/user-details';
import { useState, useEffect } from 'react';
import ErrorAccountSuspendFeedback from '@/components/feedback/error-account-suspend';

type Props = {
  os: string;
};

const Home = (props: Props) => {
  const { os } = props;
  const { data: session } = useSession();

  const [sessionLocalStorage, setSessionLocalStorage] = useState<any>();

  useEffect(() => {
    const handleSessionFromLocalStorage = () => {
      const parseSession = JSON.parse(localStorage.getItem('sessions') as any);
      setSessionLocalStorage(parseSession);
    };

    handleSessionFromLocalStorage();
  }, []);

  const { originalData: originalDataUser }: any = useUserDetailsQuery({
    variables: {
      userId: session?.user?.user_id ? session?.user?.user_id : sessionLocalStorage?.user_id,
    },
  });

  const { handleOnSignupClick, handleOnInstallClick, handleOnUserAcquisitionClick, handleOnMonetizationClick } =
    useClickEvent();

  if (originalDataUser?.error?.message === 'Account Suspended') {
    return <ErrorAccountSuspendFeedback className="h-dvh bg-blue-50" />;
  } else {
    return (
      <main className="flex flex-col gap-16 pb-10 sm:gap-32 sm:py-20">
        <section className="relative m-auto h-[28rem] w-full max-w-[70rem] sm:px-8">
          <Image
            alt="amazon gift card"
            className="absolute -top-20 left-1/3 z-10 hidden h-24 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] motion-safe:animate-[float_6s_ease-in-out_infinite] sm:-top-10 sm:block"
            height={0}
            src="/assets/pages/home/amazon-gift-card.png"
            width={140}
          />
          <Image
            alt="google play card"
            className="absolute -right-14 top-52 z-10 hidden h-40 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] motion-safe:animate-[float_6s_ease-in-out_0.25s_infinite] sm:block"
            height={0}
            src="/assets/pages/home/google-play-card.png"
            width={125}
          />
          <Image
            alt="paypal"
            className="absolute -bottom-10 left-40 z-10 hidden h-[4.5rem] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] motion-safe:animate-[float_6s_ease-in-out_0.5s_infinite] sm:block"
            height={0}
            src="/assets/pages/home/paypal-card.png"
            width={125}
          />
          <div className="relative h-full overflow-hidden bg-[linear-gradient(90deg,#2CB388_0%,#134D3B_100%)] px-5 py-10 text-white sm:rounded-xl sm:px-10 sm:pb-16 sm:pt-20">
            <div className="relative z-20 flex h-full flex-col">
              <TypographyH1 className="mt-0 flex-1 font-semibold tracking-normal">
                The <u className="font-bold tracking-normal">GREATEST</u> #1
                <br />
                reward platform
                <br />
                ever. seriously.
              </TypographyH1>
              <div>
                <CountUp className="text-3xl sm:text-4xl" end={1326254} separator="." start={0} />
                <br />
                Players joined
              </div>
            </div>
            <Image
              alt="games"
              blurDataURL="/assets/games.png"
              className="absolute -bottom-[13rem] -right-[50px] hidden w-64 rotate-[25deg] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] sm:w-96 md:block"
              draggable={false}
              height={0}
              loading="lazy"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/assets/games.png"
              width={0}
            />
            <Image
              alt="guitar guy"
              blurDataURL="/assets/pages/home/guitar-guy.png"
              className="absolute bottom-0 left-0 h-auto w-60 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] sm:left-1/2 sm:w-96 sm:animate-[wiggle_2s_ease-in-out_infinite]"
              draggable={false}
              height={0}
              placeholder="blur"
              quality={50}
              sizes="(max-width: 576px) 33vw, (max-width: 768px) 50vw, (max-width: 1200px) 100vw, 50vw, 33vw"
              src="/assets/pages/home/guitar-guy.png"
              width={0}
              priority
            />
          </div>
          <div className="absolute -top-20 left-40 h-[20rem] w-[20rem] bg-[rgba(255,0,0,0)] sm:-top-60 sm:left-[80%]">
            <Coin className="bottom-10 left-[5%] animate-[tyr-coins_1.2s_linear_infinite]" />
            <Coin className="left-[15%] animate-[tyr-coins_1.4s_linear_infinite]" />
            <Coin className="bottom-10 left-[25%] animate-[tyr-coins_1.6s_linear_infinite]" />
            <Coin className="left-[35%] animate-[tyr-coins_1.8s_linear_infinite]" />
            <Coin className="bottom-10 left-[45%] animate-[tyr-coins_1.8s_linear_infinite]" />
            <Coin className="left-[55%] animate-[tyr-coins_1.6s_linear_infinite]" />
            <Coin className="bottom-10 left-[65%] animate-[tyr-coins_1.4s_linear_infinite]" />
          </div>
        </section>
        <section className="m-auto max-w-[60rem] px-8">
          <TypographyH2 className="m-auto mb-24 max-w-[40rem] text-center">
            We handpicked amazing games that can make you good money
          </TypographyH2>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
              <Image alt="image" className="h-56" height={0} src="/assets/pages/home/get-paid.png" width={220} />
              <div>
                <TypographyH3>Get paid every minute your play</TypographyH3>
                <TypographyP>
                  Turn your playtime into real earnings with our app/website. Every minute you spend gaming or engaging
                  in tasks translates into instant rewards. It couldn&apos;t be easier!
                </TypographyP>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row-reverse">
              <Image alt="image" className="h-56" height={0} src="/assets/pages/home/get-big-rewards.png" width={225} />
              <div>
                <TypographyH3>Get big rewards achieving milestones</TypographyH3>
                <TypographyP>
                  We have a variety of games to choose from, each with tailored milestones designed to enhance your
                  experience. By completing these milestones, you&apos;ll unlock exciting rewards and significant
                  prizes, making your gameplay even more rewarding!
                </TypographyP>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 sm:mt-16 sm:flex-row">
              <Image alt="image" className="h-40" height={0} src="/assets/pages/home/quick-rewards.png" width={300} />
              <div>
                <TypographyH3>Quick rewards for easy payout</TypographyH3>
                <TypographyP>
                  If you&apos;re seeking quick rewards and easy payouts, check out our Microcharge boost. It helps you
                  reach milestones faster in your favorite games. Start boosting your progress today and enjoy an
                  enhanced gameplay experience!
                </TypographyP>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-fit bg-blue-50 bg-[url('/assets/pages/home/bg.png')] bg-center bg-no-repeat object-contain p-10 sm:h-[95vh]">
          <Image
            alt="potion"
            className="absolute -top-5 left-2 h-16 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] motion-safe:animate-[float_6s_ease-in-out_infinite] sm:left-52 sm:top-20"
            height={0}
            src="/assets/pages/home/potion.png"
            width={60}
          />
          <Image
            alt="star"
            className="absolute right-0 top-28 h-16 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] motion-safe:animate-[float_6s_ease-in-out_0.25s_infinite] sm:right-32 sm:top-52"
            height={0}
            src="/assets/pages/home/star.png"
            width={70}
          />
          <Image
            alt="crown"
            className="absolute bottom-20 left-1/4 h-16 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)] motion-safe:animate-[float_6s_ease-in-out_0.5s_infinite]"
            height={0}
            src="/assets/pages/home/crown.png"
            width={80}
          />
          <div className="relative m-auto flex h-full max-w-screen-lg flex-col items-center gap-8 sm:justify-between md:flex-row">
            <div>
              <TypographyP className="text-3xl font-light sm:whitespace-nowrap">
                <b className="font-semibold">Play more than 500 games</b>
                <span className="inline-block sm:hidden">&nbsp;</span>
                <br className="hidden sm:block" />
                directly on our apps/website
              </TypographyP>
              <TypographyP className="hidden text-2xl font-light sm:block">Start now!</TypographyP>
            </div>
            <div className="flex w-full min-w-52 max-w-xs flex-col items-center gap-3 text-center">
              {!(os === 'iOS' || os === 'Android') ? (
                <div className="whitespace-nowrap">Scan me to download</div>
              ) : null}
              {os !== 'iOS' ? <SmartQr onInstallClick={handleOnInstallClick} /> : null}
              <div className="my-6 flex w-full items-center gap-2">
                {os !== 'iOS' ? (
                  <>
                    <Separator className="w-5/12" />
                    <span className="w-2/12 text-center">OR</span>
                    <Separator className="w-5/12" />
                  </>
                ) : null}
              </div>
              <Link className="w-full" href="/signup" onClick={handleOnSignupClick}>
                <Button className="w-full font-normal">Sign up</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="m-auto max-w-[60rem] px-8">
          <TypographyH2 className="m-auto mb-16 max-w-[40rem] text-center">
            Get payout with various payout options
          </TypographyH2>
          <div className="mt-2 flex max-w-[40rem] flex-wrap items-center justify-center gap-4">
            <div className="flex h-[5rem] items-center justify-center">
              <Image alt="payment" height={0} src="/assets/pages/home/giftcards/paypal.png" width={125} />
            </div>
            <div className="flex h-[5rem] items-center justify-center rounded-md bg-blue-50">
              <Image alt="payment" height={0} src="/assets/pages/home/giftcards/visa.png" width={125} />
            </div>
            <div className="flex h-[5rem] items-center justify-center overflow-hidden rounded-md">
              <Image
                alt="payment"
                className="h-full"
                height={0}
                src="/assets/pages/home/giftcards/google-play.png"
                width={125}
              />
            </div>
            <div className="flex h-[5rem] items-center justify-center overflow-hidden rounded-md">
              <Image
                alt="payment"
                className="h-full object-cover"
                height={0}
                src="/assets/pages/home/giftcards/apple.png"
                width={125}
              />
            </div>
            <div className="flex h-[5rem] items-center justify-center overflow-hidden rounded-md">
              <Image
                alt="payment"
                className="h-full object-cover"
                height={0}
                src="/assets/pages/home/giftcards/amazon.png"
                width={125}
              />
            </div>
            <div className="flex h-[5rem] items-center justify-center">
              <Image alt="payment" height={0} src="/assets/pages/home/giftcards/spotify.png" width={125} />
            </div>
            <div className="flex h-[5rem] items-center justify-center overflow-hidden rounded-md">
              <Image
                alt="payment"
                className="h-full object-cover"
                height={0}
                src="/assets/pages/home/giftcards/ps.png"
                width={125}
              />
            </div>
            <div className="flex h-[5rem]  items-center justify-center overflow-hidden rounded-md">
              <Image
                alt="payment"
                className="h-full object-cover"
                height={0}
                src="/assets/pages/home/giftcards/ebay.png"
                width={125}
              />
            </div>
          </div>
        </section>
        <section className="m-auto max-w-[60rem] px-8">
          <TypographyH2 className="m-auto mb-8 max-w-[40rem] text-center">
            Use our technology to grow business
          </TypographyH2>
          <div className="m-auto flex w-fit items-center gap-5">
            <Link href="https://tyrads.com/user-acquisition/" onClick={handleOnUserAcquisitionClick}>
              <Button>User Acquisition</Button>
            </Link>
            <Link href="https://tyrads.com/monetization/" onClick={handleOnMonetizationClick}>
              <Button>Monetization</Button>
            </Link>
          </div>
        </section>
      </main>
    );
  }
};

export default Home;
