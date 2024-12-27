import { SpriteTypes } from '@/types'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import React from 'react'
import { useModal } from '@/components/helpers/ModalContext'
import Icon from '@/components/ui/Icon'

const BurgerModal = dynamic(
  () => import('@/components/modals/BurgerModal/BurgerModal'),
  {
    ssr: false
  }
)

interface NavItem {
  type: 'button' | 'link'
  iconId: SpriteTypes
  to?: string
}

const navItems: NavItem[] = [
  { type: 'button', iconId: 'icon-cart' },
  { type: 'button', iconId: 'icon-heart' },
  { type: 'link', iconId: 'icon-profile', to: '/profile' },
  { type: 'button', iconId: 'icon-search' }
]
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
