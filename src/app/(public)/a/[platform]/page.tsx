import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { uniqueId } from 'lodash';
import type { Metadata } from 'next';
import { IoIosStar } from 'react-icons/io';

import ImageSlider from '@/components/data-display/image-slider';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TypographyH1, TypographyH2, TypographyH3, TypographyH5, TypographyP } from '@/components/ui/typography';

import { cn } from '@/lib/utils';

import type { ServerSideComponentProps } from '@/types';

import { formatNumber } from '@/utils/formatter';

import SignUp from './_components/signup-button';
import SocialProof from './_components/social-proof';
import { TEMP_APP_DATA } from './constants';

interface Ratings {
  one_star_ratings: number;
  two_star_ratings: number;
  three_star_ratings: number;
  four_star_ratings: number;
  five_star_ratings: number;
}

const renderWithNewlines = (text: string) => {
  return { __html: text.replace(/\n/g, '<br />') };
};

const getBestAndWorstRating = (ratings: Ratings) => {
  const stars = [
    { rating: '5', count: ratings.five_star_ratings },
    { rating: '4', count: ratings.four_star_ratings },
    { rating: '3', count: ratings.three_star_ratings },
    { rating: '2', count: ratings.two_star_ratings },
    { rating: '1', count: ratings.one_star_ratings },
  ];

  const bestRating = stars.find(star => star.count > 0)?.rating || 'No ratings';
  const worstRating = stars.reverse().find(star => star.count > 0)?.rating || 'No ratings';

  return { bestRating, worstRating };
};

export async function generateMetadata(props: ServerSideComponentProps<{}, { id: string }>): Promise<Metadata> {
  const { searchParams } = props;

  const id = searchParams.id;
  const data = TEMP_APP_DATA.find(data => data.package_name === id) || null;

  if (!data) return {};

  const screenshots = data.screenshots.split(',').slice(0, 3);

  return {
    title: `Download ${data.app_title} and earn rewards!`,
    description: data.short_description,
    openGraph: {
      type: 'website',
      title: data.app_title,
      description: data.short_description,
      images: screenshots,
    },
    twitter: {
      card: 'summary',
      title: data.app_title,
      description: data.short_description,
      images: screenshots,
    },
  };
}

export default async function PlatformRoute(props: ServerSideComponentProps<unknown, { id: string }>) {
  const {
    searchParams: { id = '' },
  } = props;
  const session = await getServerSession();
  const data = TEMP_APP_DATA.find(data => data.package_name === id) || null;

  if (!data) return notFound();

  const { bestRating, worstRating } = getBestAndWorstRating(data);

  const screenshots = data.screenshots.split(',');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: data.app_title,
    downloadUrl: data.preview_url,
    description: data.short_description,
    operatingSystem: data.platform,
    image: data.thumbnail,
    applicationCategory: data.app_category,
    contentRating: data.content_rating,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data.rating,
      ratingCount: data.user_ratings_count,
      bestRating,
      worstRating,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Organization',
      name: data.developer,
      url: data.website,
    },
    publisher: {
      '@type': 'Organization',
      name: data.developer,
    },
    screenshot: screenshots[0],
    inLanguage: 'English',
  };

  const details = [
    {
      title: 'Version',
      value: '-',
    },
    {
      title: 'Updated on',
      value: '-',
    },
    {
      title: 'Platform',
      value: data.platform,
    },
    {
      title: 'Requires Android',
      value: '-',
    },
    {
      title: 'In-app purchases',
      value: `${formatNumber(data.iap_min, { currency: 'USD', style: 'currency' })} - ${formatNumber(data.iap_max, { currency: 'USD', style: 'currency' })} per item`,
      hide: data.iap_min === 0 && data.iap_max === 0,
    },
    {
      title: 'Content rating',
      value: data.content_rating,
    },
    {
      title: 'Released on',
      value: '-',
    },
    {
      title: 'Developer',
      value: data.developer,
    },
  ];

  const contentRatingInNumber = data.content_rating.match(/\d+/);

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />
      <Card className="mx-auto h-full flex-1 rounded-none border-none shadow-none sm:overflow-hidden sm:rounded-2xl sm:border-gray-100 sm:drop-shadow-md">
        <CardHeader className="relative flex h-80 justify-end overflow-hidden bg-black p-0 text-white md:h-96">
          <div className="absolute inset-y-0 -right-28 h-[80%] sm:-right-1 sm:h-full">
            <video
              className="h-full w-full object-cover"
              poster={screenshots[0]}
              preload="auto"
              tabIndex={-1}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={data.promo_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(0,0,0)_0%,rgba(0,0,0,0)_30%),linear-gradient(to_top,rgb(0,0,0)_0%,rgba(0,0,0,0)_30%)]" />
          </div>
          <div className="relative flex items-start gap-5 border-none p-6 sm:py-12">
            <Image alt="thumbnail" className="w-24 rounded-2xl" height={0} src={data.thumbnail} width={100} />
            <div>
              <TypographyH1 className="!md:text-3xl m-0 mb-1 !text-xl font-normal">{data.app_title}</TypographyH1>
              <Link href={data.website}>
                <TypographyH2 className="mb-3 text-sm font-normal text-green-500">{data.developer}</TypographyH2>
              </Link>
              <div className="flex items-center gap-5 text-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1 ">
                    <span className="text-sm sm:text-base">
                      {formatNumber(data.rating, { maximumFractionDigits: 1 })}
                    </span>
                    <IoIosStar size={13} />
                  </div>
                  <span className="whitespace-nowrap text-[0.7rem] font-light text-gray-300 sm:text-xs">
                    {formatNumber(data.user_ratings_count, { notation: 'compact' })} Reviews
                  </span>
                </div>
                <Separator className="h-5 bg-gray-600" orientation="vertical" />
                <div className="flex flex-col items-center gap-1 ">
                  <span className="text-sm sm:text-base">
                    {formatNumber(data.downloads_min, { notation: 'compact' })}+
                  </span>
                  <div className="whitespace-nowrap text-[0.7rem] font-light text-gray-300 sm:text-xs">Downloads</div>
                </div>
                <Separator className="hidden h-5 bg-gray-600 md:block" orientation="vertical" />
                <div className="hidden flex-col items-center gap-1 md:flex">
                  <span
                    className={cn(
                      'rounded-sm bg-white text-black mix-blend-screen',
                      contentRatingInNumber ? 'px-0.5' : 'px-1',
                    )}
                  >
                    {contentRatingInNumber ? `${contentRatingInNumber}+` : data.content_rating[0]}
                  </span>
                  <div className="whitespace-nowrap text-[0.7rem] text-xs font-light text-gray-300 sm:text-xs">
                    {data.content_rating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <div
          className={cn(
            'sticky top-0 z-10 flex w-full flex-col gap-4 bg-black p-5 text-center text-white sm:hidden',
            session && 'hidden',
          )}
        >
          {!session && (
            <>
              <SocialProof className="font-light" />
              <SignUp />
            </>
          )}
        </div>
        <CardContent className="lg:px-10">
          <div className="flex py-6 text-xs sm:text-sm">
            <div>Category: {data.app_category}</div>
            <div className="flex-1 text-center">IAP: {data.iap_min || data.iap_max ? 'Yes' : 'No'}</div>
            <div className="text-right">Price: Free</div>
          </div>
          <div className="h-[15vw] max-h-[25rem] min-h-[15rem] w-full max-w-[87.5vw] overflow-hidden lg:min-h-[20rem]">
            <ImageSlider images={screenshots} />
          </div>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
            <div className="w-full">
              <TypographyH3 className="text-lg font-normal sm:text-xl">About this game</TypographyH3>
              <TypographyP
                className="break-all text-sm font-normal text-muted-foreground"
                dangerouslySetInnerHTML={renderWithNewlines(data.long_description)}
              />
            </div>
            <div className="flex h-fit w-full flex-col gap-4 lg:max-w-[20rem] lg:rounded-2xl lg:bg-slate-50 lg:p-4 lg:shadow-sm">
              <TypographyH3 className="text-md font-normal">App Specs</TypographyH3>
              <Separator />
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
                {details.map(detail => {
                  if (detail.hide) return;

                  return (
                    <div key={uniqueId()}>
                      <TypographyH5 className="text-sm font-normal">{detail.title}</TypographyH5>
                      <span className="text-sm font-light text-gray-500">{detail.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
