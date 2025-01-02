import React from 'react'

export default function Loader() {
  return (
    <div className='absolute inset-0 z-50 flex items-center justify-center'>
      <div className='spinner'></div>
    </div>
  )
}
