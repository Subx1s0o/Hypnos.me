import React from 'react'

import { useModal } from '@/components/helpers/ModalContext'
import Icon from '@/components/ui/Icon'

import { navigationData as data } from './data/navigation-data'

export default function MobileMenu() {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <nav className='fixed bottom-0 z-50 w-full bg-white px-4 pb-8 pt-6'>
        <ul className='flex w-full items-center justify-between'>
          {data.map(item => (
            <li
              key={item.id}
              className='relative'>
              <button
                type='button'
                onClick={() => toggleModal(item.id)}
                className='p-4'>
                <Icon
                  h={24}
                  w={24}
                  id={isModalOpen(item.id) ? item.iconActive : item.iconDefault}
                />
              </button>
            </li>
          ))}
          <li className='relative'>
            <button
              type='button'
              onClick={() => toggleModal('burger')}
              className='p-4'>
              <Icon
                h={24}
                w={24}
                id={isModalOpen('burger') ? 'icon-burger' : 'icon-x-altx-alt'}
              />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
