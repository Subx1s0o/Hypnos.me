import React from 'react'

// import { useModal } from '@/components/helpers/ModalContext'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

export default function SearchModalDesktop() {
  // const { toggleModal } = useModal()

  const handleSearch = () => {
    // виконуємо пошук,
    // якщо треба закривати модалку використаємо
    // toggleModal('search')
  }

  return (
    <div className='flex flex-col justify-between gap-10 p-4 md:p-8'>
      <div className='flex flex-col items-center'>
        <h2
          className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
            text-black'>
          Search
        </h2>
      </div>
      <div className='grid grid-cols-3'>
        <div className='relative col-span-2'>
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
        </div>

        <Button
          className='col-span-1 bg-black px-[14px] py-2 text-white'
          onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  )
}
