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
      <div className='mx-auto max-w-[375px]'>
        <div
          className='overflow-hidden'
          ref={emblaRef}>
          <ul className='-ml-8 flex touch-pan-y'>
            {slides.map((slide, index) => (
              <li
                className='min-w-0 flex-[0_0_80%] transform-gpu pl-8'
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
