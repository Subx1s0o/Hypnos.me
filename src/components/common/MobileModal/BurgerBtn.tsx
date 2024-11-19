'use client'

import { useState } from 'react'

import Icon from '@/components/ui/Icon'

import MobileModal from './MobileModal'

export default function BurgerBtn() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <MobileModal isOpen={isMenuOpen} />
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className='p-4'>
        {isMenuOpen ? (
          <Icon
            id='icon-x-altx-alt'
            h={24}
            w={24}
          />
        ) : (
          <Icon
            id='icon-burger'
            h={24}
            w={24}
          />
        )}
      </button>
    </div>
  )
}
