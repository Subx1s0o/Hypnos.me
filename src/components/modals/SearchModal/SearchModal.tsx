import React from 'react'

// import { useModal } from '@/components/helpers/ModalContext'

import Icon from '@/components/ui/Icon'

// import CartItems from '../CartModal/CartItems'

export default function SearchModal() {
  // const { toggleModal } = useModal()

  return (
    <div className='flex flex-col justify-between gap-10 p-4 md:p-8'>
      <div className='flex flex-col items-center'>
        <h2
          className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
            text-black'>
          Search
        </h2>
      </div>
      <search className='relative m-auto flex w-full lg:w-96'>
        <input
          className='h-[48px] w-full rounded-[4px] border border-grey-200 bg-white py-4 pl-8 pr-2
            text-sm outline-none focus-visible:border-black'
        />

        <Icon
          className='pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-black/60'
          id='icon-search'
          w={18}
          h={18}
        />
      </search>
      {/* викорисаємо верстку знайдених компонентів як і у cart */}
      {/* {<CartItems />} */}
    </div>
  )
}
