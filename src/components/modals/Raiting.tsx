import React from 'react'

import Icon from '../ui/Icon'

const StarEmptyIcon: React.FC = () => {
  return (
    <Icon
      className='size-5 stroke-grey-200 hover:stroke-brown-light'
      id='icon-star'
      h={16}
      w={16}
    />
  )
}

const StarFilledIcon: React.FC = () => {
  return (
    <Icon
      className='size-5 text-brown-details hover:text-brown-light'
      id='icon-star-full'
      h={16}
      w={16}
    />
  )
}

interface RatingProps {
  rating?: number
  maxRating?: number
}

const Rating: React.FC<RatingProps> = ({ rating = 3, maxRating = 5 }) => {
  return (
    <div className='flex space-x-0.5'>
      {[...Array(maxRating)].map((_, index) => {
        const isFull = index < rating

        return (
          <div
            key={index}
            className={`size-5 ${isFull ? 'text-brown-details' : ''} focus:outline-none`}>
            {isFull ? <StarFilledIcon /> : <StarEmptyIcon />}
          </div>
        )
      })}
    </div>
  )
}

export default Rating
