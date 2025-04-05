'use client'

import React from 'react'

import { useModal } from '@/components/context/ModalContext'
import SearchBox from '@/components/modals/SearchModal/SearchBox'
import Icon from '@/components/ui/Icon'

export default function SearchModal() {
  const { closeModal } = useModal()

  return (
    <div className='m-auto flex max-w-screen-xxl flex-col justify-between px-4 py-10 md:px-10'>
      <div className='flex items-center pb-10'>
        <button onClick={() => closeModal('search')}>
          <Icon
            className='-rotate-90 pt-2 text-black'
            id='icon-arrow'
            w={20}
            h={20}
          />
        </button>

        <h2
          className='m-auto text-center font-cormorant text-smd font-bold uppercase leading-normal
            text-black'>
          Search
        </h2>
      </div>

      <SearchBox  />
    </div>
  )
}
