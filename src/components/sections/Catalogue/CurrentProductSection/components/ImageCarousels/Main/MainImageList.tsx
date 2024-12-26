import { cn } from '@/lib/cn'

import MainImageItem from './MainImageItem'

interface MainImageListProps {
  media: {
    [key: string]: {
      url: string
      status: 'fulfilled' | 'rejected' | 'not_uploaded'
    }
  }
}

export default function MainImageList({ media }: MainImageListProps) {
  return (
    <ul className={cn('flex')}>
      {Object.entries(media).map(([key, value]) => {
        if (value.status !== 'not_uploaded') {
          return (
            <MainImageItem
              key={key}
              status={value.status}
              src={value.url}
              alt={`photo of product ${key}`}
              width={800}
              height={500}
            />
          )
        }
      })}
    </ul>
  )
}
