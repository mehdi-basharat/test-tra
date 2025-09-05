import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import './embla.css';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: any, min: any, max: any) => Math.min(Math.max(number, min), max);

const EmblaCarousel = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const { slides, options } = props;

  const methods = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 3000 })]);

  const [emblaRef, emblaApi] = methods;
  const tweenFactor = useRef(0);
  const tweenNodes: any = useRef([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: any) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode: any) => {
      return slideNode.querySelector('.embla__slide__number');
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: any) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: any, eventName?: any): any => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap: any, snapIndex: any) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex: any) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem: any) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode: any = tweenNodes.current[slideIndex];

        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="embla">
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container">
          {slides.map((item: any, index: any) => {
            const { img, title, desc } = item;
            const isHighlighted = emblaApi?.selectedScrollSnap() === index;

            return (
              <div key={`${index + 1}`} className="embla__slide">
                <div className="embla__slide__number">
                  <div
                    className={`${isHighlighted ? 'bg-[url(/bg-highlight.svg)] bg-contain bg-center bg-no-repeat p-6' : ''}`}
                  >
                    <Image
                      alt={img}
                      className="animate-[wiggle_2s_ease-in-out_infinite] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)]"
                      height={282}
                      src={img}
                      style={{
                        filter: isHighlighted ? 'blur(0)' : 'blur(1.5rem)',
                      }}
                      width={281}
                    />
                    <p className="mt-6 text-center font-semibold">{title}</p>
                    <p className="text-center font-normal">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isHovered && (
        <div className="-mt-[300px] flex items-center justify-between">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </div>
      )}

      <div className="mt-[250px] flex justify-center">
        {/* <div className="embla__buttons">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </div> */}

        <div className="embla__dots">
          {scrollSnaps.map((_: any, index: any) => (
            <DotButton
              key={`${index + 1}`}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
