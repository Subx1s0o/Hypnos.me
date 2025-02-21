'use client'

import { cn } from '@/lib/cn'
import { SpriteTypes } from '@/types'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

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
  const router = useRouter()

  return (
    <nav>
      <ul className='mb-8 flex flex-col gap-4 md:mb-6'>
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

      <hr className='mb-6 hidden max-w-[308px] smd:block' />

      <button
        className='mb-16 flex items-center justify-center gap-3'
        onClick={() => {
          Cookies.remove('isAuthenticated')
          router.replace('/')
        }}>
        <div className='rounded-full bg-grey-light p-[7px] text-black'>
          <Icon
            id='icon-logout'
            w={18}
            h={18}
            className='text-inherit'
          />
        </div>

        <p className='text-base font-semibold'>Logout</p>
      </button>

      <hr className='mb-16 smd:hidden' />
    </nav>
  )
}
