/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Link from 'next/link';

import useClickEvent from '@/components/layout/navbar/usecase/use-click-event';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import { TypographyH2, TypographyH3, TypographyH4 } from '@/components/ui/typography/heading';

export default async function AppRoute() {
  const stepGet = [
    {
      title: 'Install the free app on your smartphone.',
      img: '/login_img.png',
    },
    {
      title: 'Choose your favorite games from a huge selection.',
      img: '/play_img.png',
    },
    {
      title: 'Start playing and earning cash — anytime, anywhere.',
      img: '/img_04.png',
    },
  ];

  const { handleOnSignupClick } = useClickEvent();

  const stepRewards = [
    'PayPal Cash',
    'Amazon, Spotify Gift Cards',
    'Xbox & PlayStation Gift Cards',
    'Walmart, Target, and Visa Prepaid Cards...',
  ];

  return (
    <main className="flex flex-col">
      <section className="bg-gray-100 px-4 py-12 sm:px-16">
        <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center">
          <div className="h-[1px] w-full bg-black" />
          <div className="flex border-2 border-black p-1">
            <TypographyH2 className="bg-black px-1 py-1.5 text-center font-light text-white">PERSONAL</TypographyH2>
            <TypographyH2 className="bg-white px-1 py-1.5 text-center font-light text-black">FINANCES</TypographyH2>
          </div>
        </div>

        <TypographyH1 className="py-6 font-medium sm:text-center">
          This Free App Lets You Earn Real Rewards Just by Playing Mobile Games
        </TypographyH1>

        <TypographyH3 className="pb-4 font-medium">
          By Jessica T. | Updated June 2025 | Personal Finance & Side Hustles
        </TypographyH3>

        <Image
          alt="free-game-01"
          className="hidden w-full sm:block"
          height={657}
          src="/free-game-01.png"
          width={1167}
        />

        <Image alt="img_05" className="rounded-lg shadow-lg sm:hidden" height={390} src="/img_05.png" width={390} />

        <TypographyH4 className="pb-8 pt-4 font-light">
          Real users are cashing out fast just by playing mobile games — whether they're on the couch, in the car, on
          the train, or just killing time.
        </TypographyH4>

        <TypographyH3 className="pb-4 font-light">
          We all love a good mobile game to pass the time—whether it’s while waiting in line, sipping coffee, or winding
          down at night. But what if I told you there's a way to actually make real money while doing it?
        </TypographyH3>

        <TypographyH3 className="pb-8 font-light">
          Well, that’s exactly what’s happening with a fast-growing app called Tyr Rewards, and it’s quickly gaining
          popularity among casual gamers and side hustle seekers in the U.S.
        </TypographyH3>

        <Link href="/signup" onClick={handleOnSignupClick}>
          <Button className="w-full rounded-[20px] bg-gradient-to-t from-[#06027e] to-[#8229ff] px-12 py-8">
            <TypographyH2 className="text-white">Start Earning Now</TypographyH2>
          </Button>
        </Link>
      </section>

      <div className="h-[12px] bg-gray-300" />

      <section className="bg-gray-100 px-4 py-12 sm:px-16">
        <TypographyH3 className="pb-8 font-light">
          Everyday users are making hundreds — even thousands — of dollars a month just by playing games on their phones
          in their spare time. No experience, no special skills. Just a phone, an internet connection, and a few minutes
          a day.y with just a few taps.
        </TypographyH3>

        <div className="rounded-lg border border-black px-4 py-8 shadow-lg">
          <TypographyH1 className="pb-2 text-center font-bold">Is It Legit? I Tested It.</TypographyH1>
          <TypographyH1 className="pb-12 text-center font-bold">Here’s What Happened</TypographyH1>

          <TypographyH3 className="pb-8 text-center font-light italic">
            I downloaded the app out of curiosity—and I’ll be honest, I was skeptical. But after installing a few casual
            games (Candy-style match games, tycoon builders, and puzzle games), I was racking up points pretty quickly.
          </TypographyH3>

          <TypographyH3 className="pb-8 text-center font-light italic">
            After about 3 days of playing on my commute and lunch breaks , I had enough to redeem a $10 PayPal payout.
            It hit my account in under 5 minutes.
          </TypographyH3>

          <TypographyH3 className="pb-8 text-center font-light italic">
            And the best part? I didn’t change anything about my routine. I just played games I would’ve played anyway.
          </TypographyH3>
        </div>
      </section>

      <div className="h-[12px] bg-gray-300" />

      <section className="bg-white px-4 py-12 sm:px-16">
        <div className="flex flex-col justify-center gap-12 sm:flex-row">
          <div className="sm:w-1/2">
            <TypographyH1 className="pb-8">Here's How It Works</TypographyH1>

            <TypographyH3 className="pb-12 font-light">
              These apps are part of a growing industry that rewards players for reaching new levels, completing
              challenges, or simply spending time in the game. The more you play, the more you can earn. And yes — users
              can cash out their earnings via PayPal, bank deposit, or even gift cards.
            </TypographyH3>

            <TypographyH3 className="font-light">
              Whether you're watching TV, waiting for your coffee, or relaxing at home — you could be earning real money
              with just a few taps.
            </TypographyH3>
          </div>

          <div className="sm:w-1/2">
            <Image alt="img-02" className="w-full rounded-lg shadow-lg" height={473} src="/img-02.png" width={473} />
          </div>
        </div>

        <div className="my-12 flex flex-col items-center justify-center rounded-lg border border-black px-8 py-4 shadow-lg">
          <div className="flex items-center gap-4 pb-8">
            <Image alt="pro-tip" height={57} src="/pro-tip.png" width={81} />

            <TypographyH1>Pro Tip</TypographyH1>
          </div>

          <TypographyH3 className="text-center italic sm:font-normal">
            The more you play (even different games), the faster you rack up rewards. The app learns what you like and
            tailors suggestions so you’re never bored.
          </TypographyH3>
        </div>

        <Link href="/signup" onClick={handleOnSignupClick}>
          <Button className="w-full rounded-[20px] bg-gradient-to-t from-[#2804dc] to-[#6318fa] px-12 py-8">
            <TypographyH2 className="text-xl text-white sm:text-3xl">Start Earning Money</TypographyH2>
          </Button>
        </Link>
      </section>

      <div className="h-[12px] bg-gray-300" />

      <section className="bg-white px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">What Kind of Rewards Can You Get? </TypographyH1>

        <div className="flex flex-col items-center justify-center">
          <Image alt="img-03" height={447} src="/img-03.png" width={738} />

          <div className="my-12 flex flex-col justify-center rounded-lg border border-black px-8 py-4 shadow-lg">
            <TypographyH3 className="mb-4 font-medium">
              Here are just a few of the popular rewards users can choose from:
            </TypographyH3>

            {stepRewards.map((reward, index) => (
              <TypographyH3 key={index} className="font-medium">
                • {reward}
              </TypographyH3>
            ))}
          </div>
        </div>

        <Link href="/signup" onClick={handleOnSignupClick}>
          <Button className="w-full rounded-[20px] bg-gradient-to-t from-[#2804dc] to-[#6318fa] px-12 py-8">
            <TypographyH4 className="text-xl text-white sm:text-3xl">Start Earning Money</TypographyH4>
          </Button>
        </Link>
      </section>

      <div className="h-[12px] bg-gray-300" />

      <section className="bg-white px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">Getting Started Is Super Easy</TypographyH1>

        <div className="grid gap-4 sm:grid-cols-3">
          {stepGet.map(({ title, img }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center rounded-lg border-2 bg-white p-1 p-2 shadow-xl"
            >
              <TypographyH4 className="text-center font-bold">{title}</TypographyH4>
              <div className="py-2">
                <Image
                  alt={img}
                  className="rounded-lg"
                  height={143}
                  src={img}
                  style={{
                    objectFit: 'cover',
                    height: 150,
                  }}
                  width={147}
                />
              </div>
            </div>
          ))}
        </div>

        <TypographyH1 className="py-5 text-center font-bold">Ready to Start Earning While You Play?</TypographyH1>

        <TypographyH4 className="pb-5 text-center font-bold">
          Tap below to create your account and download the app. You could start making money within minutes — just by
          playing games you already enjoy.
        </TypographyH4>

        <Link href="/signup" onClick={handleOnSignupClick}>
          <Button className="w-full rounded-[20px] bg-gradient-to-t from-[#2804dc] to-[#6318fa] px-12 py-8">
            <TypographyH2 className="text-xl text-white sm:text-3xl">Sign Up Now & Start Earning</TypographyH2>
          </Button>
        </Link>
      </section>
    </main>
  );
}
