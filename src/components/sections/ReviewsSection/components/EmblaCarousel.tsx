'use client'

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
    dragFree: true,
    skipSnaps: false
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='mx-auto max-w-6xl'>
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
        className='overflow-hidden'
        ref={emblaRef}>
        <div className=''>
          <ul className='flex'>
            {slides.map((slide, index) => (
              <li
                className='min-w-[320px] sm:min-w-[360px] lg:min-w-[400px]'
                key={index}>
                <ReviewCard
                  slide={slide}
                  key={index}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
