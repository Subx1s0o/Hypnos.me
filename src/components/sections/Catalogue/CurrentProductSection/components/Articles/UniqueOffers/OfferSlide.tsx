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
  return (
    <div
      className={`flex h-[495px] w-full flex-col items-center gap-10 rounded-[2px] border
        border-grey-200 px-10 py-12 font-manrope ${className}`}>
      <Icon
        id={iconId}
        w={56}
        h={56}
        className='fill-none'
      />

      <h3 className='text-center font-cormorant text-smd font-bold'>{title}</h3>
      <div
        className='mx-auto mb-[60px] rounded-[100px] border border-grey-200 px-[50px] py-3 text-xs
          font-semibold'>
        {buttonText}
      </div>
      <p className='text-center text-sm leading-[22px] text-grey-400'>{text}</p>
    </div>
  )
}
