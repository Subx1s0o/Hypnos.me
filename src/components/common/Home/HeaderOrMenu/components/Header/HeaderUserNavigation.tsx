import Link from 'next/link'

import { Media, MediaContextProvider } from '@/components/helpers/Media'
import Icon from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'

type SpriteTypes = 'icon-cart' | 'icon-heart' | 'icon-profile' | 'icon-search'

const navItems: {
  type: 'button' | 'link'
  tooltip: string
  iconId: SpriteTypes
  href: string
}[] = [
  { type: 'button', tooltip: 'Your Cart', iconId: 'icon-cart', href: '' },
  {
    type: 'link',
    tooltip: 'Your Favourites',
    iconId: 'icon-heart',
    href: '/favourites'
  },
  {
    type: 'link',
    tooltip: 'Your Profile',
    iconId: 'icon-profile',
    href: '/profile'
  },
  { type: 'button', tooltip: 'Search...', iconId: 'icon-search', href: '' }
]

export default function HeaderNavigation() {
  return (
    <nav className='absolute left-1/2 -translate-x-1/2'>
      <MediaContextProvider>
        <ul className='flex items-center gap-2'>
          {navItems.map(({ type, tooltip, iconId, href }, index) => (
            <li key={index}>
              <Media greaterThanOrEqual='lg'>
                <Tooltip content={tooltip}>
                  {type === 'link' ? (
                    <Link
                      className='block p-3'
                      href={href}>
                      <Icon
                        id={iconId}
                        w={18}
                        h={18}
                      />
                    </Link>
                  ) : (
                    <button className='p-3'>
                      <Icon
                        id={iconId}
                        w={18}
                        h={18}
                      />
                    </button>
                  )}
                </Tooltip>
              </Media>

              <Media lessThan='lg'>
                {type === 'link' ? (
                  <Link
                    className='block p-3'
                    href={href}>
                    <Icon
                      id={iconId}
                      w={18}
                      h={18}
                    />
                  </Link>
                ) : (
                  <button className='p-3'>
                    <Icon
                      id={iconId}
                      w={18}
                      h={18}
                    />
                  </button>
                )}
              </Media>
            </li>
          ))}
        </ul>
      </MediaContextProvider>
    </nav>
  )
}
