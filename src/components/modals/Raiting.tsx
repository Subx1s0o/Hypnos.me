import React, { useState } from 'react'

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
      className='text-brown-details size-5 hover:text-brown-light'
      id='icon-star-full'
      h={16}
      w={16}
    />
  )
}

interface RatingProps {
  initialRating?: number
  maxRating?: number
}

const Rating: React.FC<RatingProps> = ({
  initialRating = 0,
  maxRating = 5
}) => {
  const [rating, setRating] = useState<number>(initialRating)

  const handleStarClick = (index: number) => {
    setRating(index)
  }

  return (
    <div className='flex space-x-0.5'>
      {[...Array(maxRating)].map((_, index) => {
        const isFull = index < rating

        return (
          <button
            key={index}
            onClick={() => handleStarClick(index + 1)}
            className={`size-5 ${isFull ? 'text-brown-details' : ''} focus:outline-none`}>
            {isFull ? <StarFilledIcon /> : <StarEmptyIcon />}
          </button>
        )
      })}
    </div>
  )
}

export default Rating
