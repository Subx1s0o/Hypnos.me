import { useState } from 'react'
import { cn } from '@/lib/cn'
import Image from 'next/image'

import SkeletonLoader from '@/components/ui/SkeletonLoader'

interface MainImageListProps {
  media: { [key: string]: { url: string; status: string } }
}

export default function MainImageList({ media }: MainImageListProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <ul className='flex'>
      {Object.entries(media).map(([key, value]) => {
        if (value.status !== 'not_uploaded') {
          return (
            <li
              key={key}
              className='relative min-w-full'>
              {!isImageLoaded && (
                <div className='absolute inset-0 size-full'>
                  <SkeletonLoader
                    count={1}
                    className='h-full'
                  />
                </div>
              )}
              <Image
                onLoad={() => setIsImageLoaded(true)}
                alt='photo'
                src={value.url}
                width={800}
                height={500}
                className={cn('invisible w-full object-cover', {
                  visible: isImageLoaded
                })}
              />
            </li>
          )
        }
      })}
    </ul>
  )
}
