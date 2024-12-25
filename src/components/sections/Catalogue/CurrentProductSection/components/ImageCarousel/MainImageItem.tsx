import { useState } from 'react'
import { cn } from '@/lib/cn'
import Image from 'next/image'

import ImageWithFallback from '@/components/ui/ImageWithFallback'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

interface MainImageItemProps {
  src: string
  alt: string
  width: number
  height: number
  status: 'not_uploaded' | 'fulfilled' | 'rejected'
}

export default function MainImageItem({
  src,
  height,
  alt,
  width,
  status
}: MainImageItemProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <li className='relative min-w-full'>
      {!isImageLoaded && (
        <div className='absolute inset-0 size-full'>
          <SkeletonLoader
            count={1}
            className='h-full'
          />
        </div>
      )}
      {status !== 'fulfilled' ? (
        <Image
          onLoad={() => setIsImageLoaded(true)}
          alt='image fallback'
          src='/images/products/decorative/fallback.png'
          width={width}
          height={height}
          className={cn('invisible rounded-lg object-cover', {
            visible: isImageLoaded
          })}
        />
      ) : (
        <ImageWithFallback
          onLoad={() => setIsImageLoaded(true)}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn('invisible rounded-lg object-cover', {
            visible: isImageLoaded
          })}
        />
      )}
    </li>
  )
}
