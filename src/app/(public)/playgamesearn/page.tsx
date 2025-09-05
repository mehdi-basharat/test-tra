/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Link from 'next/link';

import useClickEvent from '@/components/layout/navbar/usecase/use-click-event';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import { TypographyH2, TypographyH3, TypographyH4 } from '@/components/ui/typography/heading';

const testi = [
  {
    content:
      'I downloaded the app out of curiosity... now I make a little extra each week just playing during my lunch break!',
    author: 'Mike T., California',
    img: '/img_21.png',
  },
  {
    content: 'I’m obsessed! I just play a few games before bed and the rewards add up fast',
    author: 'Jordan R., Florida',
    img: '/img_22.png',
  },
  {
    content: 'It’s legit. Got my first PayPal. Super easy and actually kinda fun.',
    author: 'Ashley W., Texas',
    img: '/img_23.png',
  },
];

const answered = [
  {
    content: 'How do I earn money with Tyr Rewards?',
    author:
      'Every minute you play, you earn. Complete tasks, reach milestones, and watch your balance grow — in real time.',
  },
  {
    content: 'How do milestones work?',
    author: 'Each game has milestones (e.g. reach a level or complete a mission). Hitting them unlocks rewards!',
  },
  {
    content: 'How do I get paid?',
    author: 'Via PayPal, gift cards, or other options inside the app.  You can select your best option.',
  },
  {
    content: 'Is there a minimum payout?',
    author: 'You can cash out as soon as you hit the minimum threshold (usually $5).',
  },
];

const step = [
  {
    title: 'Fast and Highest Payouts',
    desc: 'Withdraw your earnings instantly. We pay faster and more than the rest. Access to your money when you want it.',
    img: '/img_50.png',
  },
  {
    title: 'Play Your Favorite Games',
    desc: 'Choose from over 100 of the most popular mobile games and get rewarded just for playing.',
    img: '/img_51.png',
  },
  {
    title: 'Earn Real Money No Tricks',
    desc: 'Get paid for hitting milestones, completing levels.. The more you play, the more you earn',
    img: '/img_52.png',
  },
  {
    title: '100% Free  Safe & Secure',
    desc: 'No subscriptions, no hidden fees. Download, play, and start earning. Simple as that.',
    img: '/img_54.png',
  },
];

const how = [
  {
    title: 'Sign up for free',
    desc: 'Download our app on Google Play or Apple App Store.',
    img: '/img_11.png',
  },
  {
    title: 'Play Games',
    desc: 'Enjoy free games on your phone and complete fun challenges to earn coins.',
    img: '/img_12.png',
  },
  {
    title: 'Cash out your rewards',
    desc: 'Exchange collected coins for cash or a variety of gift cards .',
    img: '/img_13.png',
  },
];

export default async function AppRoute() {
  const { handleOnSignupClick } = useClickEvent();

  return (
    <main className="flex flex-col">
      <section className="items-center bg-[#97d2f8] p-4 sm:flex sm:gap-4 sm:px-16 sm:py-12">
        <div className="sm:w-1/2">
          <div className="pb-0 pt-4">
            <TypographyH1 className="mb-4 text-center">Play Games &</TypographyH1>

            <TypographyH1 className="mb-4 text-center">Earn Money !</TypographyH1>

            <TypographyH2 className="text-center">Sing up NOW for FREE</TypographyH2>
          </div>

          <div className="flex flex-col items-center pt-8 sm:mt-0 sm:flex-col">
            <Link href="/signup" onClick={handleOnSignupClick}>
              <Button className="rounded-full  border border-black bg-[#ffd712] px-12 py-8">
                <TypographyH2 className="text-black">Start Earning Now</TypographyH2>
              </Button>
            </Link>

            <div className="flex items-center">
              <Image alt="poin" height={56} src="/poin_01.png" width={55} />
              <TypographyH3 className="!mt-0">Play your favorite mobile games</TypographyH3>
            </div>

            <TypographyH3 className="!mt-0">and</TypographyH3>

            <div className="flex items-center">
              <TypographyH3 className="!mt-0">cash out in real money </TypographyH3>
              <Image alt="emoji_01" height={56} src="/emoji_01.png" width={55} />
            </div>
          </div>
        </div>

        <div className="sm:w-1/2">
          <Image alt="img_06" height={646} src="/img_06.png" width={646} />
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">Why Us?</TypographyH1>

        <div className="mb-5 flex items-center justify-center">
          <Image alt="icn_love" className="rounded-full" height={77} src="/icn_love.png" width={66} />
          <TypographyH2 className="text-center font-light">Why Thousands of Gamers Love Us</TypographyH2>
        </div>

        <div className="grid gap-4 sm:grid-cols-4">
          {step.map(({ title, desc, img }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center rounded-lg border-2 bg-white p-1 p-2 shadow-xl"
            >
              <TypographyH2 className="text-center font-bold">{title}</TypographyH2>

              <TypographyH4 className="text-center font-bold">{desc}</TypographyH4>
              <div className="py-2">
                <Image alt={img} height={221} src={img} width={221} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-full  border border-black bg-[#ffd712] px-12 py-8">
              <TypographyH2 className="text-black">Start Earning Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">How It Works?</TypographyH1>

        <div className="grid gap-4 sm:grid-cols-3">
          {how.map(({ title, desc, img }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center justify-center rounded-[30px] border-2 bg-white p-8 shadow-xl ${index === 0 ? 'bg-[#80C8F8]' : index === 1 ? 'bg-[#ffe45e]' : 'bg-[#FF7DA4]'}`}
            >
              <div className="flex flex-col gap-8 sm:flex-row">
                <div className="flex flex-col items-center gap-8 sm:items-start">
                  <div className="flex">
                    <TypographyH2 className="flex rounded-full bg-white px-4 py-2 text-center font-bold text-black">
                      {index + 1}
                    </TypographyH2>
                  </div>

                  <TypographyH2 className="text-left text-2xl font-black">{title}</TypographyH2>
                </div>
                <Image alt={img} height={184} src={img} width={183} />
              </div>
              <TypographyH4 className="text-center font-light sm:text-left">{desc}</TypographyH4>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-full  border border-black bg-[#ffd712] px-12 py-8">
              <TypographyH2 className="text-black">Start Earning Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-16">
        <div className="flex flex-col justify-center gap-12 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:w-1/2">
            <TypographyH1 className="font-thin">
              See what <span className="font-black">our</span>
            </TypographyH1>
            <TypographyH1 className="ont-black">Members say:</TypographyH1>

            <Image alt="arrow_02" className="hidden sm:block" height={386} src="/arrow_02.svg" width={500} />
          </div>

          <div className="sm:w-1/2">
            <div className="grid gap-4 sm:grid-cols-1">
              {testi.map(({ content, author, img }) => (
                <div
                  key={content}
                  className="flex flex-col items-center rounded-lg border-2 bg-white p-1 p-2 shadow-xl sm:flex-row"
                >
                  <Image alt={img} height={112} src={img} width={111} />

                  <div>
                    <TypographyH4 className="text-center sm:text-left">{content}</TypographyH4>

                    <TypographyH3 className="mt-4 text-center font-bold sm:text-left">{author}</TypographyH3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-full  border border-black bg-[#ffd712] px-12 py-8">
              <TypographyH2 className="text-white">Join then right now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-[#98D2F8] px-4 py-12 sm:px-16">
        <div className="flex flex-col justify-center gap-12 sm:flex-row">
          <div className="flex flex-col items-center gap-4 sm:w-1/2">
            <TypographyH1 className="font-thin">Your Questions,</TypographyH1>
            <TypographyH1 className="ont-black">Answered</TypographyH1>

            <Image alt="arrow_03" className="hidden sm:block" height={386} src="/arrow_03.svg" width={500} />
          </div>

          <div className="sm:w-1/2">
            <div className="grid gap-4 sm:grid-cols-1">
              {answered.map(({ content, author }) => (
                <div key={content} className="flex items-center rounded-lg bg-[#FFD614] p-4 shadow-xl">
                  <div>
                    <TypographyH2 className="mb-6 text-center sm:text-start">{content}</TypographyH2>

                    <TypographyH4 className="text-center font-bold sm:text-start">{author}</TypographyH4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-12">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-full  border border-black bg-[#ffd712] px-12 py-8">
              <TypographyH2 className="text-white">Start earning now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="p-4 sm:px-16 sm:py-12">
        <div className="flex flex-col justify-center gap-8 sm:flex-row">
          <div>
            <TypographyH1 className="text-center">Start Earning While You Play</TypographyH1>
            <TypographyH3 className="text-center">Thousands are already getting paid</TypographyH3>
            <TypographyH3 className="text-center">— are you?</TypographyH3>
          </div>

          <div>
            <Image alt="payment-2_img" height={264} src="/payment-2_img.png" width={630} />
          </div>
        </div>
      </section>
    </main>
  );
}
