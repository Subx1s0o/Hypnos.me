'use client'

import { Media, MediaContextProvider } from '@/components/helpers/Media'

import HeaderPageNavigationLink from './HeaderPageNavigationLink'

const navLinks = [
  { href: '#catalogue', label: 'Catalogue' },
  { href: '#products', label: 'New products' },
  { href: '#about', label: 'About us' },
  { href: '#contacts', label: 'Contacts' }
]

export default function HeaderPageNavigation() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual='md'>
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
      </Media>
    </MediaContextProvider>
  )
}
