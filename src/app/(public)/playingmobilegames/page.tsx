/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Link from 'next/link';

import useClickEvent from '@/components/layout/navbar/usecase/use-click-event';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import { TypographyP } from '@/components/ui/typography/common';
import { TypographyH2, TypographyH3, TypographyH4 } from '@/components/ui/typography/heading';

const step = [
  {
    title: 'Login',
    desc: 'Sing up and download Tyr Rewars App',
    img: '/login_img.png',
    icn: '/one.png',
  },
  {
    title: 'Play Mobile Games',
    desc: 'Complete in-game challenges and earn money',
    img: '/play_img.png',
    icn: '/two.png',
  },
  {
    title: 'Cashout',
    desc: 'Redeem your coins upon your wish',
    img: '/cash_img.png',
    icn: '/three.png',
  },
];

export default async function AppRoute() {
  const { handleOnSignupClick } = useClickEvent();

  const join = [
    {
      quote: "I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!",
      author: 'Jessica M., Phoenix AZ',
    },
    {
      quote: "Started as a skeptic, now I earn $200+ monthly. My wife thinks I'm crazy for getting paid to game!",
      author: 'Mike R., Denver CO',
    },
    {
      quote: 'I just play when I’m waiting for the kids at school or before bed. and I’ve already cashed out twice.  ',
      author: 'Rachel T., Austin, TX',
    },
    {
      quote: 'It’s honestly the easiest way I’ve found to earn something extra without changing my routine.',
      author: 'Dylan M., Seatle, WA',
    },
  ];

  const question = [
    {
      title: 'How do I earn money with Tyr Rewards?',
      desc: 'Every minute you play, you earn. Complete tasks, reach milestones, and watch your balance grow — in real time.',
    },
    {
      title: 'How do milestones work?',
      desc: 'Each game has milestones (e.g. reach a level or complete a mission). Hitting them unlocks rewards!',
    },
    {
      title: ' How do I get paid?',
      desc: 'Via Paypal, gift cards, or other options inside the app.  You can select your best option.',
    },
    {
      title: 'Is there a minimum payout?',
      desc: 'Yes can cashout as soon as you hit the minimum threshold (usually $5).',
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-t from-[#04da4c] to-[#18f98d] p-4 sm:flex sm:gap-4 sm:px-16 sm:py-12">
        <Image
          alt="herro_banner_playing_mobile_games_02"
          className="rounded-lg shadow-lg"
          height={811}
          src="/herro_banner_playing_mobile_games_02.png"
          width={1440}
        />

        <div>
          <div className="pb-0 pt-4">
            <TypographyH1 className="mb-4 text-center text-white">Start earning on</TypographyH1>

            <TypographyH1 className="mb-4 hidden text-center text-white sm:block">your mobile</TypographyH1>
            <TypographyH1 className="mb-4 text-center text-white text-white sm:hidden">
              your mobile playing
            </TypographyH1>

            <TypographyH1 className="text-center text-white sm:hidden">games</TypographyH1>
            <TypographyH1 className="hidden text-center text-white sm:block">playing games</TypographyH1>
          </div>

          <div className="mt-3 flex flex-col items-center sm:mt-0 sm:flex-col-reverse sm:gap-12">
            <Link href="/signup" onClick={handleOnSignupClick}>
              <Button className="rounded-[20px] bg-gradient-to-t from-[#2f0378] to-[#7215bc] px-12 py-8">
                <TypographyH2 className="text-white">Get Started</TypographyH2>
              </Button>
            </Link>

            <TypographyH4 className="!mt-0 py-3 text-center text-white">
              Join 2.5 million Americans who've already earned over $700+ Monthly Playing Mobile Games
            </TypographyH4>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">Getting started is easy</TypographyH1>

        <div className="grid gap-4 sm:grid-cols-3">
          {step.map(({ title, desc, img, icn }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center rounded-lg border-2 bg-white p-1 p-2 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Image alt={icn} className="rounded-full" height={32} src={icn} width={43} />
                <TypographyH2 className="text-center font-bold">{title}</TypographyH2>
              </div>

              <TypographyH4 className="text-center font-bold">{desc}</TypographyH4>
              <div className="py-2">
                <Image
                  alt={img}
                  className="rounded-full"
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

        <div className="flex justify-center pt-12">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[20px] bg-gradient-to-t from-[#2804dc] to-[#6318fa] px-12 py-8">
              <TypographyH2 className="text-white">Start Earning Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <div className="h-[12px] bg-gray-300" />

      <section className="bg-gray-100 px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">Choose from 100+ Games You Already Love!</TypographyH1>

        <div className="flex flex-col items-center justify-center">
          <Image alt="games_img" height={339} src="/games_img.png" width={794} />

          <Image alt="arrow_img" height={219} src="/arrow_img.png" width={183} />

          <TypographyH1 className="pt-4 text-center">and Get Paid!!!</TypographyH1>

          <Image alt="payment_img" height={272} src="/payment_img.png" width={449} />
        </div>

        <div className="flex justify-center">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[20px] bg-gradient-to-t from-[#2804dc] to-[#6318fa] px-12 py-8">
              <TypographyH4 className="text-white">Donwload Tyr Rewards App</TypographyH4>
            </Button>
          </Link>
        </div>
      </section>

      <div className="h-[12px] bg-gray-300" />

      <section className="bg-gray-100 px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">Join 2.5M+ happy users</TypographyH1>

        <div className="grid gap-4 sm:grid-cols-2">
          {join.map(({ quote, author }) => (
            <div key={author} className="rounded-lg border-2 bg-white p-4 shadow-lg">
              <div className="flex items-start gap-6">
                <Image alt="quote_img" height={30} src="/quote_img.png" width={30} />

                <TypographyH4>{quote}</TypographyH4>
              </div>

              <TypographyP className="pl-12">{author}</TypographyP>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[20px] bg-gradient-to-t from-[#2804dc] to-[#6318fa] px-12 py-8">
              <TypographyH2 className="text-white">Start Earning Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <div className="h-[6px] bg-gray-300" />

      <section className="bg-gray-100 px-4 py-12 sm:px-16">
        <div className="flex flex-col-reverse justify-center gap-12 sm:flex-row">
          <div className="sm:w-1/2">
            <TypographyH1 className="hidden pb-8 sm:block">what the experts say</TypographyH1>

            <div className="flex items-start gap-6">
              <Image alt="quote_img" height={30} src="/quote_img.png" width={30} />

              <TypographyH1>
                In today’s digital economy, reward apps like Tyr Rewards offer one of the most legitimate and accessible
                ways to earn extra income. The best part? Users can cash out fast — sometimes within hours — simply by
                playing games they already enjoy. It’s a win-win.
              </TypographyH1>
            </div>
          </div>

          <div className="sm:w-1/2">
            <TypographyH1 className="pb-8 sm:hidden">what the experts say</TypographyH1>

            <Image alt="expert_img" className="rounded-lg shadow-lg" height={490} src="/expert_img.png" width={392} />

            <TypographyP>Jason Grant, Mobile Marketing Strategist & Advisor</TypographyP>
          </div>
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[20px] bg-gradient-to-t from-[#2804dc] to-[#6318fa] px-12 py-8">
              <TypographyH2 className="text-white">Start Earning Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <div className="h-[6px] bg-gray-300" />

      <section className="bg-gradient-to-t from-[#04da4c] to-[#18f98d] p-4 sm:px-16 sm:py-12">
        <div className="flex flex-col items-center justify-center">
          <TypographyH1 className="mb-4 rounded-lg border-2 border-2 border-black bg-white p-4 text-2xl shadow-lg sm:rounded-[0px] sm:border-[0px] sm:bg-transparent sm:p-0 sm:p-0 sm:text-base sm:shadow-none">
            Your Questions, Answered
          </TypographyH1>

          <Image alt="answer-img" className="py-4 shadow-lg sm:hidden" height={400} src="/answer-img.png" width={375} />

          <div className="rounded-lg border-2 bg-white bg-white p-2 ">
            {question.map(({ title, desc }) => (
              <div key={title} className="mb-2 rounded-lg border-2 bg-white p-2 shadow-lg">
                <TypographyH4 className="text-center">{title}</TypographyH4>

                <div className="my-4 h-[6px] bg-[#e48406] sm:hidden" />

                <TypographyP className="!mt-0 text-center">{desc}</TypographyP>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-[20px] bg-gradient-to-t from-[#2804dc] to-[#6318fa] px-12 py-8">
              <TypographyH2 className="text-white">Sign Up Now</TypographyH2>
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
