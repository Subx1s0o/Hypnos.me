import { useState } from 'react'
import { cn } from '@/lib/cn'
import Image from 'next/image'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

type PropType = {
  isSelected: boolean
  index: number
  onClick: () => void
  src: string
}

export default function ImageThumb({ isSelected, src, onClick }: PropType) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <article className='relative flex w-full flex-col items-center'>
      {!isImageLoaded && (
        <SkeletonLoader
          count={1}
          className='absolute inset-0 z-50 size-full'
        />
      )}
      <div className={'mb-2 flex w-full flex-[0_0_23%] px-1 md:flex-[0_0_30%]'}>
        <button
          onClick={onClick}
          type='button'
          className={cn(
            `relative h-16 w-full cursor-not-allowed bg-grey-200 transition-colors xxs:h-20
            sm:h-24 smd:h-28 md:h-24 lg:h-28 xl:h-32`,
            {
              'cursor-pointer rounded-lg border-2 border-gray-300 bg-white':
                isImageLoaded,
              'border-brown': isImageLoaded && isSelected,
              'lg:hover:bg-gray-50': isImageLoaded && !isSelected
            }
          )}>
          <div className='relative size-full'>
            <Image
              onLoad={() => setIsImageLoaded(true)}
              src={src}
              alt='Image Thumbnail'
              fill
              className={cn('invisible rounded-lg object-cover', {
                visible: isImageLoaded
              })}
            />
            {isImageLoaded && !isSelected && (
              <div className='absolute inset-0 rounded-md bg-black opacity-10'></div>
            )}
          </div>
        </button>
      </div>
      {isImageLoaded && (
        <div
          className={cn(
            'h-1 w-[calc(100%-8px)] rounded-lg bg-gray-300 transition-colors',
            {
              'bg-brown': isSelected
            }
          )}
        />
      )}
    </article>
  )
}
