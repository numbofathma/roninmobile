'use client';

import React, { memo, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import Loader from '@/components/Loader';
import SvgIcon from '@/components/SvgIcon';
import style from './Carousel.module.scss';
import useBreakpoint from '@/hooks/useBreakpointDetect';
import { Orientation, SvgIcons } from '@/constants/enums';
import CustomModal from '../CustomModal';

interface ICarouselProps {
  title: string;
  data: {
    images: string[];
    settings: Record<string, string>;
    orientation: Orientation;
  };
  isMobile?: boolean;
  options?: EmblaOptionsType;
  className?: string;
}

const Carousel = (props: ICarouselProps) => {
  const { title, data, options, isMobile, className } = props;
  const { images, settings, orientation } = data;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const currentBreakPoint = useBreakpoint();

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Index of the selected image in modal
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  // Sync currentPath whenever selectedIndex changes
  useEffect(() => {
    if (selectedIndex !== null) {
      setCurrentPath(images[selectedIndex]);
    } else {
      setCurrentPath(null);
    }
  }, [selectedIndex, images]);

  const sizes =
    orientation === Orientation.PORTRAIT
      ? `
    (max-width: 2560px) 640px,
    (max-width: 1920px) 640px,
    (max-width: 1536px) 640px,
    (max-width: 1280px) 320px,
    (max-width: 1024px) 320px,
    (max-width: 768px) 320px,
    (max-width: 640px) 320px,
  `
      : `
    (max-width: 2560px) 1136px,
    (max-width: 1920px) 1136px,
    (max-width: 1536px) 1136px,
    (max-width: 1280px) 568px,
    (max-width: 1024px) 568px,
    (max-width: 768px) 568px,
    (max-width: 640px) 568px,
  `;

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();

    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return Math.max(prev - 1, 0);
    });
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();

    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return Math.min(prev + 1, images.length - 1);
    });
  }, [emblaApi, images.length]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  const handleModal = (index: number | null) => () => {
    setSelectedIndex(index);
  };

  return (
    <>
      {currentPath && (
        <CustomModal isMobile={isMobile} isOpen onClose={handleModal(null)}>
          <Image
            src={currentPath}
            alt={title}
            quality={100}
            width={0}
            height={0}
            sizes='100%'
            style={{
              width: 'max-content',
              height: '70vh',
              objectFit: 'contain',
            }}
          />
        </CustomModal>
      )}

      <section className={`${style.embla} ${isMobile ? style.mobile : style.desktop} ${className}`}>
        {!currentBreakPoint && (
          <div className='flex h-full items-center justify-center'>
            <Loader width={10} height={10} className='fill-myBlue text-white' />
          </div>
        )}

        {currentBreakPoint && (
          <>
            <div className={`${style['embla__viewport']} ${currentPath ? 'invisible' : 'visible'}`} ref={emblaRef}>
              <div className={style['embla__container']}>
                {images.map((path, index) => (
                  <div className={style['embla__slide']} style={{ flexBasis: settings[currentBreakPoint] }} key={index}>
                    <div className={style['embla__slide__number']}>
                      <Image
                        src={path}
                        alt={title}
                        quality={80}
                        fill
                        className='cursor-pointer'
                        sizes={sizes}
                        style={{ objectFit: 'contain' }}
                        onClick={handleModal(index)}
                        priority={index <= 3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${style['embla__controls']} my-4 ${currentPath ? 'invisible' : 'visible'}`}>
              <div className={style['embla__buttons']}>
                <button className={style['embla__button']} type='button' onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                  <SvgIcon icon={SvgIcons.left} className={style['embla__button__svg']} />
                </button>
                <button className={style['embla__button']} type='button' onClick={onNextButtonClick} disabled={nextBtnDisabled}>
                  <SvgIcon icon={SvgIcons.right} className={style['embla__button__svg']} />
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default memo(Carousel);
