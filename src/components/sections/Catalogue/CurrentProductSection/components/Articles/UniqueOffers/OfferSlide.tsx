'use client'

import { useEffect, useState } from 'react'
import { SpriteTypes } from '@/types'

import Icon from '@/components/ui/Icon'

type OfferSlideProps = {
  title?: string
  buttonText?: string
  text?: string
  iconId: SpriteTypes
  className?: string
}

export default function OfferSlide({
  title,
  buttonText,
  text,
  iconId,
  className
}: OfferSlideProps) {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const iconSize = isTablet ? 40 : 56

  return (
    <div
      className={`flex h-[495px] w-full flex-col items-center gap-10 rounded-[2px] border
        border-grey-200 px-10 py-12 font-manrope md:h-[218px] md:gap-4 md:py-6
        xl:h-[459px] xl:gap-10 xl:py-12 ${className}`}>
      <Icon
        id={iconId}
        w={iconSize}
        h={iconSize}
        className='fill-none'
      />

      <h3
        className='text-center font-cormorant text-smd font-bold md:text-base-big md:font-bold
          md:leading-[28px] xl:mb-6 xl:text-smd xl:font-bold xl:leading-[40px]'>
        {title}
      </h3>
      <div
        className='mx-auto rounded-[100px] border border-grey-200 px-[50px] py-3 text-xs
          font-semibold md:hidden xl:block'>
        {buttonText}
      </div>
      <p className='text-center text-sm leading-[22px] text-grey-400'>{text}</p>
    </div>
  )
}
