'use client'

import { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import ReviewCard from './ReviewCard'

type ReviewData = {
  text: string
  altText: string
  imageUrl: string
  author: string
  date: string
}
type PropType = {
  slides: ReviewData[]
  options?: EmblaOptionsType
}
export default function EmblaCarousel({ slides, options }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    align: 'start',
    containScroll: 'trimSnaps',
    loop: true,
    dragFree: false,
    skipSnaps: false,
    slidesToScroll: 1
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='max-w-full'>
      {/* Controls */}
      <div className='absolute right-4 top-0 z-10 flex gap-[10px]'>
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>

      {/* Carousel */}
      <div
        className='max-w-[320px] sm:max-w-screen-sm smd:max-w-screen-smd md:max-w-screen-md
          lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl'>
        <div
          className='overflow-hidden'
          ref={emblaRef}>
          <ul className='flex gap-4 sm:gap-8'>
            {slides.map((slide, index) => (
              <li
                className='sm:min-w-0 sm:flex-[0_0_80%] sm:transform-gpu md:flex-[0_0_50%]
                  lg:flex-[0_0_33%] xl:flex-[0_0_23%]'
                key={index}>
                <ReviewCard slide={slide} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
