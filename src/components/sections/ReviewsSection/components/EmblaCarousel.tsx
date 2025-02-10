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
        className='overflow-hidden'
        ref={emblaRef}>
        <ul className='flex'>
          {slides.map((slide, index) => (
            <li
              className='min-w-[280px] flex-none sm:min-w-0 sm:flex-[0_0_80%] smd:flex-[0_0_50%]
                lg:flex-[0_0_33%] xl:flex-[0_0_23%]'
              key={index}>
              <ReviewCard slide={slide} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
