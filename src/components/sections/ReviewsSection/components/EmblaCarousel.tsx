'use client'
import React, { use } from 'react'
import { EmblaOptionsType } from 'embla-carousel'

import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import ReviewCard from './ReviewCard'


type ReviewData = { 
  text: string,
  altText: string,
  imageUrl: string,
  author: string,
  date: string,  
}
type PropType = { 
  slides: ReviewData[],  
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__controls absolute top-0 right-0">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <ul className="embla__container">
          {slides.map((slide, index) => (
            <li className="embla__slide" key={index}>
              <ReviewCard {...slide} key={index}></ReviewCard>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default EmblaCarousel
