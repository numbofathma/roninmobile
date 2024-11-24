'use client';

import React, { memo, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import Loader from '@/components/Loader';
import SvgIcon from '@/components/SvgIcon';
import style from './Carousel.module.scss';
import useBreakpoint from '@/hooks/useBreakpointDetect';
import { SvgIcons } from '@/constants/enums';
import CustomModal from '../CustomModal';

interface ICarouselProps {
  title: string;
  data: {
    images: string[];
    settings: Record<string, string>;
  };
  isMobile?: boolean;
  options?: EmblaOptionsType;
  className?: string;
}

const Carousel: React.FC<ICarouselProps> = (props) => {
  const { title, data, options, isMobile, className } = props;
  const { images, settings } = data;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const currentBreakPoint = useBreakpoint();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  const handleModal = (path: string | null) => () => {
    setCurrentPath(path);
  };

  return (
    <>
      {currentPath && (
        <CustomModal isOpen onClose={handleModal(null)}>
          <Image src={currentPath} alt={title} quality={100} fill sizes='100%' style={{ objectFit: 'contain' }} priority />
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
            <div className={style['embla__viewport']} ref={emblaRef}>
              <div className={style['embla__container']}>
                {images.map((path, index) => (
                  <div className={style['embla__slide']} style={{ flexBasis: settings[currentBreakPoint] }} key={index}>
                    <div className={style['embla__slide__number']}>
                      <Image src={path} alt={title} quality={100} fill sizes='100%' className='cursor-pointer' priority onClick={handleModal(path)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={style['embla__controls']}>
              <div className={style['embla__buttons']}>
                <button className={`${style['embla__button']}`} type='button' onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                  <SvgIcon icon={SvgIcons.left} className={style['embla__button__svg']} />
                </button>
                <button className={`${style['embla__button']}`} type='button' onClick={onNextButtonClick} disabled={nextBtnDisabled}>
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
