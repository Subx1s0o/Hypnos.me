import Link from 'next/link'

import BurgerButton from '@/components/modals/BurgerButton'
import Icon from '@/components/ui/Icon'

interface NavItem {
  type: 'button' | 'link'
  iconId: string
  to?: string
}

const navItems: NavItem[] = [
  { type: 'button', iconId: 'icon-cart' },
  { type: 'button', iconId: 'icon-heart' },
  { type: 'link', iconId: 'icon-profile', to: '/profile' },
  { type: 'button', iconId: 'icon-search' }
]

export default function MobileMenu() {
  return (
    <nav className='fixed bottom-0 z-50 w-full bg-white px-4 pb-8 pt-6'>
      <ul className='flex w-full items-center justify-between'>
        {navItems.map((item, index) => (
          <li key={index}>
            {item.type === 'link' && item.to ? (
              <Link
                className='block p-4'
                href={item.to}>
                <Icon
                  id={item.iconId}
                  h={24}
                  w={24}
                />
              </Link>
            ) : (
              <button className='p-4'>
                <Icon
                  id={item.iconId}
                  h={24}
                  w={24}
                />
              </button>
            )}
          </li>
        ))}
        <li>
          <BurgerButton />
        </li>
      </ul>
    </nav>
  )
}
