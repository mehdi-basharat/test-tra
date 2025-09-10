/* eslint-disable @next/next/no-async-client-component */
// 'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { TypographyH1 } from '@/components/ui/typography';
import { TypographyH2, TypographyH3, TypographyH4, TypographyH6 } from '@/components/ui/typography/heading';
import CountUp from '@/components/data-display/count-up';
import { headers } from 'next/headers';
import { companyData } from './companie-config';

export default async function AppRoute() {
  const headersList = headers();
  const host = headersList.get('host') || 'tyrrewards.com';

  const company = companyData[host]  || companyData['tyrewards.com'];

  const questions = [
    {
      q: 'Q: How do I earn money with Tyr Rewards?',
      w: 'A: very minute you play, you earn. Complete tasks, reach milestones, and watch your balance grow — in real time.',
    },
    {
      q: 'Q: How do milestones work? ',
      w: 'A: Each game has milestones (e.g. reach a level or complete a mission). Hitting them unlocks rewards! ',
    },
    {
      q: 'Q: How do I get paid?',
      w: 'A: Via Paypal, gift cards, or other options inside the app.  You can select your best option. ',
    },
    {
      q: 'Q: Is there a minimum payout?',
      w: 'A: You can cashout as soon as you hit the minimum threshold (usually $5).',
    },
  ];

  const users = [
    {
      says: "“I've earned $1,247 in 3 months just playing games during my commute. This is literally free money!”",
      auth: 'Phoenix, AZ.',
      job: 'Phoenix, AZ.',
    },
    {
      says: "Started as a skeptic, now I earn $200+ monthly. My wife thinks I'm crazy for getting paid to game!",
      auth: 'Mike R.',
      job: 'Denver, CO.',
    },
    {
      says: '“I just play when I’m waiting for the kids at school or before bed. and I’ve already cashed out twice.”',
      auth: 'Rachel T.',
      job: 'Austin, TX.',
    },
    {
      says: '“It’s honestly the easiest way I’ve found to earn something extra without changing my routine.”',
      auth: 'Dylan M.',
      job: 'Seattle, WA.',
    },
  ];

  const numbers = [
    {
      icn: '/icn_11.png',
      title: (
        <span>
          <CountUp className="text-center" end={1326254} start={0} /> +
        </span>
      ),
      description: 'Games & apps to explore and earn',
    },
    {
      icn: '/icn_12.png',
      title: (
        <span>
          {'<'}
          <CountUp className="text-center" end={5} start={0} />
          {' Mins'}
        </span>
      ),
      description: 'First cash-out',
    },
    {
      icn: '/icn_13.png',
      title: (
        <span>
          $<CountUp className="text-center" end={9926254} start={0} />+
        </span>
      ),
      description: 'Average weekly earnings per user',
    },
    {
      icn: '/icn_14.png',
      title: (
        <span>
          <CountUp className="text-center" end={2.5} separator="." start={0} />+ Mill
        </span>
      ),
      description: 'Users rewarded globally',
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="flex flex-col-reverse px-4 py-4 sm:flex-row sm:items-center sm:px-24 sm:py-24">
        <div className="flex flex-col gap-2 sm:gap-6">
          <div className="hidden sm:block">
            <TypographyH1 className="text-md text-[#CFCFCF] sm:text-base">Instant Rewards</TypographyH1>
            <TypographyH1 className="text-md text-[#CFCFCF] sm:text-base">for Playing</TypographyH1>
            <TypographyH1 className="text-md text-[#CFCFCF] sm:text-base">Mobile Games</TypographyH1>
          </div>

          <div className="sm:hidden">
            <TypographyH1 className="text-center text-2xl text-[#CFCFCF] sm:text-base">
              Instant Rewards for Playing
            </TypographyH1>
            <TypographyH1 className="text-center text-2xl text-[#CFCFCF] sm:text-base">Mobile Games</TypographyH1>
          </div>

          <div>
            <TypographyH2 className="text-md text-center font-light text-[#CFCFCF] sm:text-left sm:text-2xl">
              Discover fun mobile games and start earning gift cards or PayPal cash with {company.name}
            </TypographyH2>
          </div>

          <Link className="hidden sm:block" href="https://tyrrewards.com" target="_blank">
            <Button className="rounded-[16px] px-12 py-8">
              <TypographyH2>Get Started</TypographyH2>
            </Button>
          </Link>
        </div>

        <div>
          <Image
            alt="banner_91"
            className="animate-[wiggle_2s_ease-in-out_infinite] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)]"
            height={549}
            src="/banner_91.png"
            width={512}
          />
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-16 sm:pb-32">
        <div className="mb-12 flex justify-center sm:hidden">
          <Link href="https://tyrrewards.com" target="_blank">
            <Button className="rounded-[16px] px-12 py-8">
              <TypographyH2>Let’s Get Started</TypographyH2>
            </Button>
          </Link>
        </div>

        <TypographyH1 className="pb-8 text-center text-2xl text-[#CFCFCF] sm:mt-12 sm:text-base">
          Why you’ll love {company.name}
        </TypographyH1>

        <div className="flex flex-col items-center justify-center">
          <Image
            alt="img_88"
            className="animate-[wiggle_2s_ease-in-out_infinite] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)]"
            height={351}
            src="/img_88.png"
            width={590}
          />

          <TypographyH2 className="text-md mt-8 text-center text-[#CFCFCF] sm:text-left sm:text-2xl">
            Fun Mobile Games
          </TypographyH2>
          <TypographyH2 className="text-md text-center font-light text-[#CFCFCF] sm:text-left sm:text-2xl">
            Choose from 100+ fun games and start earning
          </TypographyH2>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-40 sm:pb-32">
        <TypographyH1 className="pb-5 text-center text-[#CFCFCF]">Getting started is easy</TypographyH1>

        <div className="hidden flex-col items-center justify-center py-10 sm:flex">
          <Image alt="img_89" height={180} src="/img_89.png" width={1160} />
        </div>

        <div className="flex flex-col items-center justify-center py-6 sm:hidden">
          <Image alt="img_87" height={250} src="/img_87.png" width={348} />
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="https://tyrrewards.com" target="_blank">
            <Button className="rounded-[16px] px-12 py-8">
              <TypographyH2>Start Earning Now</TypographyH2>
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 sm:px-40">
        <TypographyH1 className="pb-8 text-center text-[#CFCFCF]">Our Numbers</TypographyH1>

        <div className="rounded-xl bg-[url(/img_98.png)] bg-cover bg-center bg-no-repeat p-8 xl:bg-[url(/img_86.png)]">
          <div className="flex flex-col items-center gap-10 xl:flex-row xl:gap-2">
            {numbers.map(item => (
              <div key={item.icn} className="flex flex-col items-center gap-2">
                <Image alt={item.icn} height={56} src={item.icn} width={56} />
                <TypographyH2 className="text-center text-[#CFCFCF]">{item.title}</TypographyH2>
                <TypographyH3 className="text-center font-thin text-[#CFCFCF]">
                  Games & apps to explore and earn
                </TypographyH3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-16 sm:py-24">
        <div className="flex flex-col justify-center sm:items-center sm:gap-16 sm:gap-8 lg:flex-row">
          <div className="flex flex-col gap-2">
            <div>
              <TypographyH1 className="text-center text-white lg:text-left">Start Earning</TypographyH1>
              <TypographyH1 className="text-center text-white lg:text-left">While You Playing</TypographyH1>

              <Link className="hidden sm:block" href="https://tyrrewards.com" target="_blank">
                <Button className="mt-10  rounded-[16px] px-12 py-8 ">
                  <TypographyH2>Start Earning Now</TypographyH2>
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              alt="img_81"
              className="animate-[wiggle_2s_ease-in-out_infinite] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)]"
              height={295}
              src="/img_81.png"
              width={801}
            />

            <Link className="sm:hidden" href="https://tyrrewards.com" target="_blank">
              <Button className="mt-10 w-full rounded-[16px] px-12 py-8">
                <TypographyH2>Start Earning Now</TypographyH2>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-40">
        <TypographyH1 className="pb-8 text-center text-[#CFCFCF]">What our users Say</TypographyH1>

        <div className="grid gap-4 sm:grid-cols-2">
          {users.map(({ says, auth, job }) => (
            <div
              key={says}
              className="flex  flex-col items-center justify-center rounded-xl bg-[#212628] p-1 p-2 shadow-xl"
            >
              <div className="py-2">
                <Image alt="stars" height={41} src="/stars.png" width={242} />
              </div>
              <TypographyH4 className="text-center font-thin text-[#CFCFCF]">{says}</TypographyH4>
              <TypographyH4 className="mt-4 text-center text-[#CFCFCF]">{auth}</TypographyH4>
              <TypographyH4 className="text-center font-thin text-[#CFCFCF]">{job}</TypographyH4>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 sm:px-16 sm:py-24">
        <TypographyH1 className="my-8 text-center text-[#CFCFCF]">Questions? We Have Answers </TypographyH1>

        <div className="grid place-items-center gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            {questions.map(item => {
              return (
                <div key={item.q} className="flex flex-col gap-4 rounded-[24px] bg-[#212628] p-4 shadow-lg">
                  <TypographyH6 className="text-[#CFCFCF]">{item.q}</TypographyH6>
                  <TypographyH6 className="font-thin text-[#CFCFCF]">{item.w}</TypographyH6>
                </div>
              );
            })}
          </div>

          <div>
            <Image
              alt="contact"
              className="animate-[wiggle_2s_ease-in-out_infinite] object-center drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)]"
              height={350}
              src="/contact.png"
              width={350}
            />
            <TypographyH2 className="text-[#CFCFCF]">Still looking for answers?</TypographyH2>

            <Link href="https://tyrrewards.com" target="_blank">
              <Button className="mt-4 w-full rounded-[16px] px-12 py-8">
                <TypographyH2>Contact Us</TypographyH2>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
