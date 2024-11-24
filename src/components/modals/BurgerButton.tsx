'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import BurgerBtn from '../ui/BurgerBtn'
import Icon from '../ui/Icon'

const BurgerModalNavigation = dynamic(() => import('./BurgerModalNavigation'), {
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
      {isMenuOpen && <BurgerModalNavigation />}
      <BurgerBtn
        type='button'
        onClick={toggle}
        className={'p-4'}>
        <Icon
          h={24}
          w={24}
          id={isMenuOpen ? 'icon-x-altx-alt' : 'icon-burger'}
        />
      </BurgerBtn>
    </>
  )
}
