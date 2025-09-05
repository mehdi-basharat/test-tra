/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Link from 'next/link';

import useClickEvent from '@/components/layout/navbar/usecase/use-click-event';
import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import { TypographyH2, TypographyH3, TypographyH4 } from '@/components/ui/typography/heading';

const step = [
  {
    title: 'Jessica M., Phoenix AZ',
    desc: "I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!",
    img: '/star_01.png',
  },
  {
    title: 'Mike R., Denver CO',
    desc: "Started as a skeptic, now I earn $200+ monthly. My wife thinks I'm crazy for getting paid to game!",
    img: '/star_02.png',
  },
  {
    title: 'Rachel T., Austin, TX',
    desc: 'I just play when I’m waiting for the kids at school or before bed. and I’ve already cashed out twice.',
    img: '/star_03.png',
  },
];

export default async function AppRoute() {
  const { handleOnSignupClick } = useClickEvent();

  const works = [
    {
      title: 'Download the Tyr Rewards',
      desc: 'Sing up and download Tyr Rewars App',
    },
    {
      title: 'Pick games you actually enjoy',
      desc: 'Play mobile games and complete in-game challenges and earn money',
    },
    {
      title: 'Play & level up — get rewarded instantly',
      desc: 'Cashout. Redeem your coins upon your wish',
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="bg-white">
        <div className="p-4 sm:flex sm:gap-24 sm:px-16 sm:py-12">
          <TypographyH1 className="mb-8 text-center sm:mb-0 sm:text-left">
            Just Finished a Survey? Here’s a Way to Earn Even More…
          </TypographyH1>

          <Image
            alt="herro_banner_playing_mobile_games_02"
            className="rounded-lg shadow-lg"
            height={811}
            src="/herro_banner_playing_mobile_games_02.png"
            width={1440}
          />
        </div>

        <TypographyH2 className="mb-2 text-center font-thin">
          Get real rewards by playing mobile games. Seriously.
        </TypographyH2>
        <TypographyH2 className="text-center font-thin">It takes just minutes to start.</TypographyH2>

        <div className="flex justify-center py-12">
          <Link href="/signup" onClick={handleOnSignupClick}>
            <Button className="rounded-full bg-[#2be675] px-12 py-8 shadow-lg">
              <TypographyH2 className="font-black text-white">Start Earning Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">Why You’ll Love Tyr Rewards:</TypographyH1>

        <Image alt="img_24" className="mb-8 hidden w-full sm:block" height={724} src="/img_24.png" width={1285} />

        <Image alt="img_24" className="w-full sm:hidden" height={601} src="/img_31.png" width={341} />
        <Image alt="img_24" className="w-full sm:hidden" height={601} src="/img_32.png" width={341} />
        <Image alt="img_24" className="w-full sm:hidden" height={601} src="/img_33.png" width={341} />
        <Image alt="img_24" className="w-full sm:hidden" height={601} src="/img_34.png" width={341} />

        <Link href="/signup" onClick={handleOnSignupClick}>
          <Button className="w-full rounded-[20px] rounded-full bg-[#2be675] px-12 py-8 shadow-lg">
            <TypographyH2 className="text-white">Start Earning Now</TypographyH2>
          </Button>
        </Link>
      </section>

      <section className="bg-white px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-5 text-center font-bold">How it Works?</TypographyH1>

        <div className="flex flex-col justify-center gap-12 sm:flex-row">
          <div className="sm:w-1/3">
            <Image alt="img_25" className="rounded-lg shadow-lg" height={531} src="/img_25.png" width={402} />
          </div>

          <div className="sm:w-1/2">
            {works.map(({ title, desc }) => (
              <div key={title} className="grid gap-4 border-b border-black py-4 sm:grid-cols-2">
                <TypographyH3>{title}</TypographyH3>
                <TypographyH3 className="font-thin">{desc}</TypographyH3>
              </div>
            ))}
          </div>
        </div>

        <Link href="/signup" onClick={handleOnSignupClick}>
          <Button className="my mt-8 w-full rounded-[20px] rounded-full bg-[#2be675] px-12 py-8 shadow-lg">
            <TypographyH2 className="text-white">Start Earning Now</TypographyH2>
          </Button>
        </Link>
      </section>

      <section className="bg-gray-100 px-4 py-12 sm:px-16">
        <TypographyH1 className="pb-2 text-center font-bold">Join 2.5M+ happy users</TypographyH1>
        <TypographyH2 className="pb-12 text-center font-thin">
          Join 2.5 million Americans who've already earned over $700+ Monthly Playing Mobile Games
        </TypographyH2>

        <div className="grid gap-4 sm:grid-cols-3">
          {step.map(({ title, desc, img }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center  justify-center rounded-[30px] border-2 border-black p-4 ${index === 0 ? 'bg-[#29E675]' : index === 1 ? 'bg-black' : 'bg-white'} p-1 p-2 shadow-xl`}
            >
              <TypographyH2 className={`text-center font-bold ${index === 1 ? 'text-white' : 'text-black'}`}>
                {title}
              </TypographyH2>

              <div className="py-2">
                <Image alt={img} height={56} src={img} width={252} />
              </div>

              <TypographyH4 className={`text-center font-bold ${index === 1 ? 'text-white' : 'text-black'}`}>
                {desc}
              </TypographyH4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
