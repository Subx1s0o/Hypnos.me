'use client'

import { cn } from '@/lib/cn'
import { SpriteTypes } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Icon from '@/components/ui/Icon'

const navItems = [
  {
    href: '/profile/personal-data',
    icon: 'icon-profile',
    filledIcon: 'icon-profile-filled',
    label: 'Personal Data'
  },
  {
    href: '/profile/bonuses',
    icon: 'icon-wallet',
    filledIcon: 'icon-wallet-filled',
    label: 'Bonuses',
    extra: (bonuses: number) => `(${bonuses})`
  },
  {
    href: '/profile/order-history',
    icon: 'icon-cart',
    filledIcon: 'icon-cart-filled',
    label: 'Order History'
  }
]

export default function ProfileNavigation() {
  const bonuses = 0
  const currentPath = usePathname()

  return (
    <nav>
      <ul className='flex flex-col gap-4'>
        {navItems.map(({ href, icon, filledIcon, label, extra }) => (
          <li key={href}>
            <Link
              href={href}
              className='flex items-center gap-3'>
              <div
                className={cn('rounded-full bg-grey-light p-[7px]', {
                  'bg-black': currentPath === href
                })}>
                <Icon
                  id={
                    currentPath === href
                      ? (filledIcon as SpriteTypes)
                      : (icon as SpriteTypes)
                  }
                  w={18}
                  h={18}
                  className={cn('text-black', {
                    'text-white': currentPath === href
                  })}
                />
              </div>

              <p className='text-base font-semibold'>
                {label}{' '}
                {extra && (
                  <span className='text-gray-400'>{extra(bonuses)}</span>
                )}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
