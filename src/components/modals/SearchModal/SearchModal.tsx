'use client'

import React from 'react'

// import { Product } from '@/types'

import SearchBox from '@/components/modals/SearchModal/SearchBox'

export default function SearchModal() {
  return (
    <div className='flex flex-col justify-between gap-10 p-4 md:p-8'>
      <div className='flex flex-col items-center'>
        <h2
          className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
            text-black'>
          Search
        </h2>
      </div>

      <SearchBox />
    </div>
  )
}
