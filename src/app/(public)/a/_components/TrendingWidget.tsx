'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoChevronForward } from 'react-icons/io5';
import { A11y, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { Button } from '@/components/ui/button';
import { TypographyH3 } from '@/components/ui/typography';

import { formatNumberToCompact } from '@/utils/formatter';

type Props = {
  title?: string;
  data: Array<{
    title: string;
    image: string;
    points: number;
    rewards: number;
    url: string;
    thumbnail: string;
    categories: string[];
  }>;
};

const TrendingWidget = (props: Props) => {
  const { title, data } = props;
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex flex-col gap-8">
      {title && <TypographyH3>{title}</TypographyH3>}
      <div className="flex max-w-[95vw] items-center gap-4 overflow-hidden">
        <Swiper
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          className="max-h-56 min-h-56"
          grid={{ fill: 'column', rows: 3 }}
          modules={[Grid, A11y]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={1.1}
          spaceBetween={10}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
        >
          {Array(20)
            .fill(data[0])
            .map((item, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <SwiperSlide key={`${item.title}-${index}`}>
                  <div className="flex items-center gap-3 font-sans">
                    <span className="ml-3">{index + 1}</span>
                    <Link className="w-full" href={item.url}>
                      <div className="flex h-full flex-col overflow-hidden rounded-md border">
                        <div className="flex items-center gap-3 bg-gray-50 p-3 text-xs  sm:gap-5">
                          <div className="w-10 min-w-8">
                            <Image alt="" height={50} src={item.thumbnail} width={50} />
                          </div>
                          <div className="flex flex-1 flex-col gap-1">
                            <span className="line-clamp-1">{item.title}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-4">
                                <Image
                                  alt="tpoints"
                                  className="w-full"
                                  height={10}
                                  src="/assets/logo/tpoints.png"
                                  width={10}
                                />
                              </div>
                              <span>{formatNumberToCompact(item.points, 2)}</span>
                              <span className="text-ellipsis whitespace-nowrap text-2xs italic text-muted-foreground">
                                {`${item.rewards} Rewards`}
                              </span>
                            </div>
                          </div>
                          <Button size="xs">Play Now</Button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Button
          className="hidden h-12 w-12 rounded-full p-3 text-2xl sm:block"
          variant="outline"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <IoChevronForward />
        </Button>
      </div>
    </div>
  );
};

export default TrendingWidget;
