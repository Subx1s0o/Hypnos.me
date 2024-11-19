'use client'

import { useState } from 'react'

import Icon from '@/components/ui/Icon'

import MobileModal from './MobileModal'

export default function BurgerBtn() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <MobileModal open={menuOpen} />
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='p-4'>
        {menuOpen ? (
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
