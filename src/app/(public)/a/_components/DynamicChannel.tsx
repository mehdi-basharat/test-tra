'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoChevronForward } from 'react-icons/io5';
import { A11y, Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TypographyH3 } from '@/components/ui/typography';

import { cn } from '@/lib/utils';

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

const CATEGORY_COLOR: Record<string, string> = {
  puzzle: 'bg-purple-300',
  easy: 'bg-green-300',
};

const DynamicChannel = (props: Props) => {
  const { title, data } = props;
  const swiperRef = useRef<SwiperType | null>(null);
  const [_, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {title && <TypographyH3>{title}</TypographyH3>}
      <div className="flex max-w-[95vw] items-center gap-4 overflow-hidden">
        {/* {activeIndex > 0 && (
          <Button
            className="hidden h-12 w-12 rounded-full p-3 text-2xl sm:block"
            variant="outline"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoChevronBack />
          </Button>
        )} */}
        <Swiper
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="min-h-60 xl:max-h-60 xl:min-h-60"
          modules={[Navigation, Virtual, A11y]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={1.1}
          spaceBetween={10}
          virtual
          onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
        >
          {Array(5)
            .fill(data[0])
            .map((item, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <SwiperSlide key={`${item.title}-${index}`} className="h-full" virtualIndex={index}>
                  <Link className="h-full" href={`/a/android`}>
                    <div className="flex h-full flex-col overflow-hidden rounded-md border font-sans shadow-lg">
                      <div className="relative flex-1">
                        <div className="absolute left-2 top-2 z-[1] flex gap-1">
                          {item.categories.map((category: string, index: number) => {
                            return (
                              <Badge
                                // eslint-disable-next-line react/no-array-index-key
                                key={`${category}-${index}`}
                                className={cn(
                                  'text-2xs text-black',
                                  CATEGORY_COLOR[category.toLowerCase()] && CATEGORY_COLOR[category.toLowerCase()],
                                )}
                              >
                                {category}
                              </Badge>
                            );
                          })}
                        </div>
                        <Image
                          alt=""
                          blurDataURL={item.image}
                          className="object-cover"
                          draggable={false}
                          loading="lazy"
                          placeholder="blur"
                          quality={75}
                          src={item.image}
                          fill
                        />
                      </div>
                      <div className="flex items-center gap-3 bg-[#012230] p-3 text-xs text-white sm:gap-5">
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

export default DynamicChannel;
