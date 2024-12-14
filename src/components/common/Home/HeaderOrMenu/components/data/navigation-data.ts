export const navigationData = [
  {
    id: 'cart',
    label: 'Your Cart',
    iconDefault: 'icon-cart',
    iconActive: 'icon-cart',
    showBadge: true,
    getBadgeValue: (itemCount: number) => itemCount
  },
  {
    id: 'favorites',
    label: 'Your Favourites',
    iconDefault: 'icon-heart',
    iconActive: 'icon-heart'
  },
  {
    id: 'profile',
    label: 'Your Profile',
    iconDefault: 'icon-profile',
    iconActive: 'icon-profile'
  },
  {
    id: 'search',
    label: 'Search...',
    iconDefault: 'icon-search',
    iconActive: 'icon-search'
  }
]
