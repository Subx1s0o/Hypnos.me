import { SpriteTypes } from '@/types'

interface NavItem {
  isLink: boolean
  iconDefault: SpriteTypes
  iconActive: SpriteTypes
  to?: string
  id: string
  label: string
}

export const navigationData: NavItem[] = [
  {
    id: 'cart',
    label: 'Your Cart',
    iconDefault: 'icon-cart',
    iconActive: 'icon-cart',
    // showBadge: true,
    // getBadgeValue: (itemCount: number) => itemCount,
    isLink: false
  },
  {
    id: 'favorites',
    label: 'Your Favourites',
    iconDefault: 'icon-heart',
    iconActive: 'icon-heart',
    isLink: true
  },
  {
    id: 'profile',
    label: 'Your Profile',
    iconDefault: 'icon-profile',
    iconActive: 'icon-profile',
    isLink: true
  },
  {
    id: 'search',
    label: 'Search...',
    iconDefault: 'icon-search',
    iconActive: 'icon-search',
    isLink: false
  }
]
