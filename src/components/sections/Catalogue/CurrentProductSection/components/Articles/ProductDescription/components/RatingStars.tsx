import { cn } from '@/lib/cn'

import Icon from '@/components/ui/Icon'

export default function RatingStars({ rating }: { rating?: number }) {
  return (
    <ul className='flex'>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <li key={index}>
            <Icon
              id='icon-star-full'
              h={24}
              w={24}
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
