/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Link from 'next/link';

import useClickEvent from '@/components/layout/navbar/usecase/use-click-event';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import { TypographyH2, TypographyH3, TypographyH4, TypographyH6 } from '@/components/ui/typography/heading';
const step = [
  {
    title: 'Login',
    desc: 'Sing up and download Tyr Rewars App',
    img: '/img_91.png',
  },
  {
    title: 'Play Mobile Games',
    desc: 'Complete in-game challenges and earn money',
    img: '/img_92.png',
  },
  {
    title: 'Cashout',
    desc: 'Redeem your coins upon your wish',
    img: '/img_93.png',
  },
];

const testimony = [
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
  {
    desc: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
    author: 'Jessica M.',
    job: 'Phoenix, AZ.',
  },
];

const game = [
  {
    title: 'Call of Dra...',
    img: '/img_71.png',
    price: '$99',
  },
  {
    title: 'Dice Drea...',
    img: '/img_72.png',
    price: '$99',
  },
  {
    title: 'Raid: Shad...',
    img: '/img_73.png',
    price: '$99',
  },
  {
    title: 'Mafia City',
    img: '/img_74.png',
    price: '$99',
  },
  {
    title: 'June’s Jo...',
    img: '/img_75.png',
    price: '$99',
  },
  {
    title: 'Lonely S...',
    img: '/img_76.png',
    price: '$99',
  },
  {
    title: 'Animals &...',
    img: '/img_77.png',
    price: '$99',
  },
  {
    title: 'Age of Apes',
    img: '/img_78.png',
    price: '$99',
  },
  {
    title: 'Lords Mo...',
    img: '/img_79.png',
    price: '$99',
  },
  {
    title: 'Coin Master',
    img: '/img_80.png',
    price: '$99',
  },
  {
    title: 'Call of Dra...',
    img: '/img_71.png',
    price: '$99',
  },
  {
    title: 'Dice Drea...',
    img: '/img_72.png',
    price: '$99',
  },
  {
    title: 'Raid: Shad...',
    img: '/img_73.png',
    price: '$99',
  },
  {
    title: 'Mafia City',
    img: '/img_74.png',
    price: '$99',
  },
  {
    title: 'June’s Jo...',
    img: '/img_75.png',
    price: '$99',
  },
  {
    title: 'Lonely S...',
    img: '/img_76.png',
    price: '$99',
  },
  {
    title: 'Animals &...',
    img: '/img_77.png',
    price: '$99',
  },
  {
    title: 'Age of Apes',
    img: '/img_78.png',
    price: '$99',
  },
  {
    title: 'Lords Mo...',
    img: '/img_79.png',
    price: '$99',
  },
  {
    title: 'Coin Master',
    img: '/img_80.png',
    price: '$99',
  },
];

export default async function AppRoute() {
  const { handleOnSignupClick } = useClickEvent();

  return (
    <main className="flex flex-col">
      <section className="flex h-80 items-center bg-[url(/banner_90.png)] bg-contain bg-no-repeat px-4 sm:h-lvh sm:bg-cover sm:bg-top sm:px-24 sm:py-24">
        <div className=" flex flex-col gap-2 sm:gap-6">
          <div>
            <TypographyH1 className="text-md text-[#1E2020] sm:text-base">Get Paid to Play</TypographyH1>
            <TypographyH1 className="text-md text-[#1E2020] sm:text-base">Mobile Games</TypographyH1>
          </div>

          <div>
            <TypographyH2 className="text-md text-[#1E2020] sm:text-2xl">Join 2.5M players earning</TypographyH2>
            <TypographyH2 className="text-md text-[#1E2020] sm:text-2xl">$700+ monthly</TypographyH2>
          </div>

          <Link className="hidden sm:block" href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[16px] px-12 py-8">
              <TypographyH2>Let’s Get Started</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-12 sm:bg-[url(/banner_02.png)] sm:bg-cover sm:bg-center sm:px-16 sm:pb-32">
        <div className="mb-12 flex justify-center sm:hidden">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[16px] px-12 py-8">
              <TypographyH2>Let’s Get Started</TypographyH2>
            </Button>
          </Link>
        </div>

        <TypographyH1 className="pb-28 text-center text-[#1E2020] sm:mt-12">Getting Started Is Easy</TypographyH1>

        <div className="grid gap-24 sm:grid-cols-3 sm:gap-4">
          {step.map(({ title, desc, img }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-xl"
            >
              <div className="-mt-20">
                <Image alt={img} height={141} src={img} width={186} />
              </div>

              <TypographyH2 className="text-center text-[#1E2020]">{title}</TypographyH2>

              <TypographyH4 className="text-center font-normal text-[#1E2020]">{desc}</TypographyH4>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[16px] px-12 py-8">
              <TypographyH2>Start Earning Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-12 sm:bg-[url(/banner_03.png)] sm:bg-cover sm:bg-center sm:px-40 sm:pb-32">
        <TypographyH1 className="pb-5 text-center text-[#1E2020]">
          Choose from 100+ Games You Already Love!
        </TypographyH1>

        <div className="mx-auto w-full max-w-sm px-4 sm:py-24 md:max-w-md md:px-6 lg:max-w-2xl">
          <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex animate-infinite-scroll items-center justify-center p-8 md:justify-start [&_div]:mx-2">
              {game.map(({ title, price, img }) => (
                <div
                  key={title}
                  className="flex flex-col items-center justify-center rounded-lg bg-white p-2 shadow-xl"
                >
                  <div className="w-[88px] sm:w-[100px]">
                    <Image alt={img} height={100} src={img} width={100} />
                  </div>

                  <TypographyH4 className="hidden font-thin text-[#1E2020] sm:block">{title}</TypographyH4>
                  <TypographyH4 className="hidden text-[#1E2020] sm:block">{price}</TypographyH4>
                  <TypographyH6 className="font-thin text-[#1E2020] sm:hidden">{title}</TypographyH6>
                  <TypographyH6 className="text-[#1E2020] sm:hidden">{price}</TypographyH6>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TypographyH1 className="mb-12 text-center text-[#1E2020]">Join 2.5M+ happy users</TypographyH1>

        <div className="mx-auto w-full max-w-sm px-4 md:max-w-md md:px-6 lg:max-w-2xl">
          <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex animate-infinite-scroll items-center justify-center p-8 md:justify-start [&_div]:mx-2">
              {testimony.map(({ author, desc, job }) => (
                <div key={author} className="w-[200px] rounded-[32px] bg-white p-4 shadow-lg">
                  <TypographyH6 className="font-normal text-[#1E2020]">{desc}</TypographyH6>

                  <TypographyH6 className="mt-4 text-[#1E2020]">{author}</TypographyH6>
                  <TypographyH6 className="font-thin text-[#1E2020]">{job}</TypographyH6>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[16px] px-12 py-8">
              <TypographyH2>Join & Start Earning</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-12 sm:bg-[url(/banner_04.png)] sm:bg-cover sm:bg-center sm:px-40 sm:pb-32">
        <TypographyH1 className="mb-2 text-center">Expert Says</TypographyH1>

        <div className="flex flex-col gap-4 rounded-[24px] bg-white p-12 shadow-lg lg:flex-row">
          <div className="flex justify-center lg:w-2/5 lg:justify-start">
            <Image
              alt="expert_img"
              className="rounded-[24px] shadow-lg"
              height={490}
              src="/expert_img.png"
              width={392}
            />
          </div>

          <div className="lg:w-3/5">
            <TypographyH2 className="font-thin text-[#1E2020]">
              In today’s digital economy, reward apps like Tyr Rewards offer one of the most legitimate and accessible
              ways to earn extra income. The best part? Users can cash out fast — sometimes within hours — simply by
              playing games they already enjoy. It’s a win-win.
            </TypographyH2>
            <TypographyH6 className="mt-4 text-[#1E2020]">Jason Grant,</TypographyH6>
            <TypographyH6 className="font-thin text-[#1E2020]">Mobile Marketing Strategist & Advisor</TypographyH6>
          </div>
        </div>
      </section>

      <section className="px-8 sm:px-16 sm:pb-32">
        <TypographyH1 className="mb-2 text-center">Questions? We Have Answers </TypographyH1>

        <div className="flex flex-col gap-2">
          {Array.from({ length: 5 })
            .map((_, index) => `Slide ${index + 1}`)
            .map(slideContent => {
              return (
                <div key={slideContent} className="flex flex-col gap-4 rounded-[24px] bg-white p-4 shadow-lg">
                  <TypographyH6 className="text-[#1E2020]">Q: How do I earn money with Tyr Rewards?</TypographyH6>
                  <TypographyH6 className="font-thin text-[#1E2020]">
                    A: very minute you play, you earn. Complete tasks, reach milestones, and watch your balance grow —
                    in real time.r
                  </TypographyH6>
                </div>
              );
            })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[16px] px-12 py-8">
              <TypographyH2>Sign Up Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-[url(/banner_05.png)] bg-cover bg-bottom bg-no-repeat px-4 py-12 sm:px-16 sm:py-60">
        <div className="flex flex-col justify-center sm:items-center sm:gap-16 sm:gap-8 lg:flex-row">
          <div className="flex flex-col gap-2">
            <div>
              <TypographyH1 className="text-center lg:text-left">Start Earning</TypographyH1>
              <TypographyH1 className="text-center lg:text-left">While You Play</TypographyH1>
            </div>

            <div>
              <TypographyH3 className="text-center font-normal lg:text-left">
                Thousands are already getting paid.
              </TypographyH3>
              <TypographyH3 className="text-center font-normal lg:text-left">Are you?</TypographyH3>
            </div>
          </div>

          <div>
            <Image alt="img_81" height={295} src="/img_81.png" width={801} />
          </div>
        </div>
      </section>
    </main>
  );
}
