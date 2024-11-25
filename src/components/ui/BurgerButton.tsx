'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import Icon from './Icon'

const BurgerModal = dynamic(() => import('../modals/BurgerModal/BurgerModal'), {
  ssr: false
})

export default function BurgerButton() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggle = () => setMenuOpen(isMenuOpen => !isMenuOpen)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  return (
    <>
      {isMenuOpen && <BurgerModal />}

      <button
        type='button'
        onClick={toggle}
        className='p-4'>
        <Icon
          h={24}
          w={24}
          id={isMenuOpen ? 'icon-x-altx-alt' : 'icon-burger'}
        />
      </button>
    </>
  )
}
