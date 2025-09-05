'use client';
import 'swiper/css';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { uniqueId } from 'lodash';
import type { FunctionComponent, HTMLProps } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

import { cn } from '@/lib/utils';

import { getImageDimensions } from '@/utils/images';

import { Button } from '../ui/button';

type ImageSliderProps = HTMLProps<HTMLDivElement> & {
  images: string[];
};

const ImageSlider: FunctionComponent<ImageSliderProps> = ({ images }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [_, setActiveIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState<Array<{ url: string; width: number; height: number }>>([]);

  useEffect(() => {
    const getImgDimensions = async () => {
      const dimensions = await getImageDimensions(images);

      setImageDimensions(dimensions);
    };

    if (!imageDimensions.length) {
      getImgDimensions();
    }
  }, [imageDimensions.length, images]);

  return (
    <div className="flex h-full w-full max-w-[95vw] items-center gap-4 overflow-hidden">
      <Button
        className="absolute left-5 z-30 hidden h-12 w-12 rounded-full p-3 text-2xl sm:block"
        variant="outline"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <IoChevronBack />
      </Button>
      <Swiper
        className="h-full w-full overflow-hidden"
        slidesPerView="auto"
        spaceBetween={10}
        onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {imageDimensions.map(({ url, width, height }) => {
          return (
            <SwiperSlide
              key={uniqueId()}
              className={cn(
                'overflow-hidden rounded-lg',
                width > height ? '!w-[30rem] lg:!w-[35rem]' : '!w-36 lg:!w-44',
              )}
            >
              <Image
                alt="image"
                blurDataURL={url}
                draggable={false}
                objectFit="cover"
                placeholder="blur"
                src={url}
                fill
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Button
        className="absolute right-5 z-30 hidden h-12 w-12 rounded-full p-3 text-2xl sm:block"
        variant="outline"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <IoChevronForward />
      </Button>
    </div>
  );
};

export default ImageSlider;
