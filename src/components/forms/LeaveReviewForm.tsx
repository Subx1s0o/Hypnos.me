import React, { useState } from 'react'

import Icon from '../ui/Icon'

export default function LeaveReviewForm() {
  const [rate, setRate] = useState(0)

  return (
    <form className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type='button'
            onClick={() => setRate(index + 1)}>
            <Icon
              id={index < rate ? 'icon-star-full' : 'icon-star'}
              w={18}
              h={18}
              className='stroke-2 text-brown-accent'
            />
          </button>
        ))}
      </div>
      <div className='flex flex-col gap-4'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <label htmlFor='comment'>Comment</label>
        <textarea
          maxLength={300}
          id='comment'
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
