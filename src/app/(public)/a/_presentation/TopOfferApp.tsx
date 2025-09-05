'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaAndroid, FaApple } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { IoChevronForward } from 'react-icons/io5';
import { A11y, Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { formatNumberToCompact } from '@/utils/formatter';

const TopOfferApp = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-6">
        <div className="flex gap-2">
          <Button className="rounded-full text-xs" size="sm" variant="outline">
            <FaAndroid className="mr-2 h-4 w-4" /> Android
          </Button>
          <Button className="rounded-full text-xs" size="sm" variant="outline">
            <FaApple className="mr-2 h-4 w-4" /> iOS
          </Button>
        </div>
        <div>
          <Input
            autoComplete="search"
            className="rounded-full bg-secondary"
            endIcon={<IoIosSearch size={20} />}
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex max-w-[90vw] items-center gap-4 overflow-hidden">
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
          className="min-h-60 xl:max-h-80 xl:min-h-80"
          modules={[Navigation, Virtual, A11y]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={1.1}
          spaceBetween={10}
          virtual
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
        >
          {Array.from({ length: 5 })
            .map((_, index) => `Slide ${index + 1}`)
            .map((slideContent, index) => {
              return (
                <SwiperSlide key={slideContent} className="h-full" virtualIndex={index}>
                  <Link className="h-full" href={`/a/android`}>
                    <div className="flex h-full flex-col overflow-hidden rounded-md border font-sans shadow-lg">
                      <div className="relative flex-1">
                        <div className="absolute left-2 top-2 z-[1] flex gap-1">
                          <Badge className="bg-purple-300 text-2xs text-black">Puzzle</Badge>
                          <Badge className="bg-green-300 text-2xs text-black">Easy</Badge>
                        </div>
                        <Image
                          alt=""
                          blurDataURL="/image.png"
                          className="object-cover"
                          draggable={false}
                          placeholder="blur"
                          quality={75}
                          src="/image.png"
                          fill
                        />
                      </div>
                      <div className="flex items-center gap-3 bg-[#012230] p-3 text-xs text-white sm:gap-5">
                        <div className="w-10 min-w-8">
                          <Image alt="" height={50} src="/small.png" width={50} />
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                          <span>Royal Match</span>
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
                            <span>{formatNumberToCompact(41520000, 2)}</span>
                            <span className="text-ellipsis whitespace-nowrap text-2xs italic text-muted-foreground">
                              20 Rewards
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

export default TopOfferApp;
