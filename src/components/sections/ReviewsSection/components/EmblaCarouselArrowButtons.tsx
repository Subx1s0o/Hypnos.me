import React, { MouseEventHandler } from 'react'
import { cn } from '@/lib/cn'

import Icon from '@/components/ui/Icon'

type PropType = {
  isLeft: boolean
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
  disabled: boolean | undefined
}

export const ArrowButton = ({ isLeft, onClick, disabled }: PropType) => {
  return (
    <button
      className='size-[56px] cursor-pointer rounded-full border border-[#E8DDD2]
        transition-colors hover:border-[#E7BF8E] disabled:cursor-not-allowed md:w-[68px]
        md:rounded-[100px]'
      type='button'
      onClick={onClick}
      disabled={disabled}>
      <Icon
        id='icon-arrow'
        h={16}
        w={16}
        className={cn('flex items-center justify-center', {
          '-rotate-90': isLeft,
          'rotate-90': !isLeft
        })}
      />
    </button>
  )
}
