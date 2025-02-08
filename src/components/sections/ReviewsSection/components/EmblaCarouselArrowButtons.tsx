'use client'

import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'

import Icon from '@/components/ui/Icon'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton = ({ ...restProps }: PropType) => {
  return (
    <button
      className='size-[56px] cursor-pointer rounded-full border border-[#E8DDD2]
        transition-colors hover:border-[#E7BF8E] disabled:cursor-not-allowed md:w-[68px]
        md:rounded-[100px]'
      type='button'
      {...restProps}>
      <Icon
        id='icon-arrow'
        h={16}
        w={16}
        className='flex -rotate-90 items-center justify-center'
      />
    </button>
  )
}

export const NextButton = ({ ...restProps }: PropType) => {
  return (
    <button
      className='size-[56px] cursor-pointer rounded-full border border-[#E8DDD2]
        transition-colors hover:border-[#E7BF8E] disabled:cursor-not-allowed md:w-[68px]
        md:rounded-[100px]'
      type='button'
      {...restProps}>
      <Icon
        id='icon-arrow'
        h={16}
        w={16}
        className='flex rotate-90 items-center justify-center'
      />
    </button>
  )
}
