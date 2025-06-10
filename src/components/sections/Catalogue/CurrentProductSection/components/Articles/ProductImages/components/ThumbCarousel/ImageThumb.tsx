import { useState } from 'react'
import { cn } from '@/lib/cn'
import Image from 'next/image'

import ImageWithFallback from '@/components/ui/ImageWithFallback'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

type PropType = {
  isSelected: boolean
  index: number
  status: 'not_uploaded' | 'fulfilled' | 'rejected'
  onClick: () => void
  src: string
}

export default function ImageThumb({
  isSelected,
  status,
  src,
  onClick
}: PropType) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <li
      className='relative flex aspect-square w-full flex-[0_0_30%] flex-col items-center
        justify-end md:flex-[0_0_35%] xmd:md:flex-[0_0_25%]'>
      {!isImageLoaded && (
        <SkeletonLoader
          count={1}
          className='absolute inset-0 z-50 size-full'
        />
      )}
      <div className={'mb-2 flex size-full'}>
        <button
          onClick={onClick}
          type='button'
          className={cn(
            'relative w-full cursor-not-allowed bg-grey-200 transition-colors',
            {
              'cursor-pointer rounded-lg border-2 border-gray-300 bg-white':
                isImageLoaded,
              'border-brown-accent': isImageLoaded && isSelected,
              'lg:hover:bg-gray-50': isImageLoaded && !isSelected
            }
          )}>
          <div className='relative size-full'>
            {status !== 'fulfilled' ? (
              <Image
                onLoad={() => setIsImageLoaded(true)}
                alt='image fallback'
                src='/images/products/decorative/fallback.avif'
                fill
                className={cn('invisible rounded-lg object-cover', {
                  visible: isImageLoaded
                })}
              />
            ) : (
              <ImageWithFallback
                onLoad={() => setIsImageLoaded(true)}
                src={src}
                alt='Image Thumbnail'
                fill
                className={cn('invisible rounded-lg object-cover', {
                  visible: isImageLoaded
                })}
              />
            )}
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
              'bg-brown-accent': isSelected
            }
          )}
        />
      )}
    </li>
  )
}
