import React, { useState } from 'react'

import Icon from '../ui/Icon'

const StarEmptyIcon: React.FC = () => {
  return (
    <Icon
      className='size-4 h-fit w-fit stroke-gray-300 stroke-2 hover:stroke-brown-light'
      id='icon-star'
      h={16}
      w={16}
    />
  )
}

const StarFilledIcon: React.FC = () => {
  return (
    <Icon
      className='text-brown-details h-fit w-fit hover:text-brown-light'
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
            className={` ${isFull ? 'text-brown-details' : ''} focus:outline-none`}>
            {isFull ? <StarFilledIcon /> : <StarEmptyIcon />}
          </button>
        )
      })}
    </div>
  )
}

export default Rating
