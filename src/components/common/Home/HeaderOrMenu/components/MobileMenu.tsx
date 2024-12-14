import React from 'react'
import Link from 'next/link'

import { navigationData as data } from '@/components/common/Home/HeaderOrMenu/components/data/navigation-data'
import { useModal } from '@/components/helpers/ModalContext'
import Icon from '@/components/ui/Icon'

export default function MobileMenu() {
  const { isModalOpen, toggleModal } = useModal()

  return (
    <>
      <nav className='fixed bottom-0 z-50 w-full bg-white px-4 pb-8 pt-6'>
        <ul className='flex w-full items-center justify-between'>
          {data.map(item => (
            <>
              {item.id === 'favorites' || item.id === 'profile' ? (
                <Link
                  className='block p-3'
                  href={item.id === 'favorites' ? '/favorites' : '/profile'}>
                  <Icon
                    id={item.iconDefault}
                    w={18}
                    h={18}
                  />
                </Link>
              ) : (
                <button
                  className='p-3'
                  onClick={() => toggleModal(item.id)}
                  type='button'>
                  <Icon
                    id={
                      isModalOpen(item.id) ? item.iconActive : item.iconDefault
                    }
                    w={18}
                    h={18}
                  />
                </button>
              )}
            </>
          ))}
          <li className='relative'>
            <button
              type='button'
              onClick={() => toggleModal('burger')}
              className='p-4'>
              <Icon
                h={24}
                w={24}
                id={isModalOpen('burger') ? 'icon-x-altx-alt' : 'icon-burger'}
              />
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
