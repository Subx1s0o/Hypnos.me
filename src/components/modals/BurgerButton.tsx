'use client'

import { useState } from 'react'

import BurgerBtn from '../ui/BurgerBtn'
import Icon from '../ui/Icon'
import BurgerModalNavigation from './BurgerModalNavigation'

export default function BurgerButton() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggle = () => setMenuOpen(isMenuOpen => !isMenuOpen)

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
