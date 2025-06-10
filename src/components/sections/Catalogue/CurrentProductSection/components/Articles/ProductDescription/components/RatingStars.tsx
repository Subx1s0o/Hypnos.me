import { cn } from '@/lib/cn'

import Icon from '@/components/ui/Icon'

export default function RatingStars({
  rating,
  starSize
}: {
  rating?: number
  starSize: number
}) {
  return (
    <ul className='flex'>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <li key={index}>
            <Icon
              id='icon-star-full'
              h={starSize}
              w={starSize}
              className={cn('stroke-brown-accent text-transparent', {
                'text-brown-accent': index < (rating || 0)
              })}
            />
          </li>
        )
      })}
    </ul>
  )
}
