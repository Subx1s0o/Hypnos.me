

import React from 'react'
import { useModal } from '@/components/helpers/ModalContext'
import Icon from '@/components/ui/Icon'



import NavItemsList from './Header/NavItemsList'

export default function MobileMenu() {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <nav className='fixed bottom-0 z-50 w-full bg-white px-4 pb-8 pt-6'>
        <ul className='flex w-full items-center justify-between'>
          <NavItemsList />
          <li className='relative'>
            <button
              type='button'
              onClick={() => toggleModal('burger')}
              className='p-4'>
              <Icon
                w={18}
                h={18}
                id={isModalOpen('burger') ? 'icon-x-altx-alt' : 'icon-burger'}
              />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
