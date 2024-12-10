'use client'

import HeaderPageNavigationLink from './HeaderPageNavigationLink'

const navLinks = [
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/new-products', label: 'New products' },
  { href: '/about-us', label: 'About us' },
  { href: '/contacts', label: 'Contacts' }
]

export default function HeaderPageNavigation() {
  return (
    <nav className='mb:mb-3 hidden md:block'>
      <ul className='flex justify-center gap-slide-large font-manrope text-sm text-grey-400'>
        {navLinks.map(({ href, label }) => (
          <HeaderPageNavigationLink
            key={href}
            href={href}
            label={label}
          />
        ))}
      </ul>
    </nav>
  )
}
