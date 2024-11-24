import Link from 'next/link'

import Icon from '@/components/ui/Icon'

import MenuItem from '../common/NavMenuItem'

const navItems = [
  { to: '/', title: 'Home' },
  { to: '/news', title: 'News' },
  { to: '/aboutus', title: 'About us' },
  { to: '/cataloge', title: 'Rings' },
  { to: '/contacts', title: 'Contacts' }
]
const addressItems = [
  { to: 'mailto:webmaster@example.com', title: '123 Walnut Street, USA' },
  { to: 'mailto:webmaster@example.com', title: 'webmaster@example.com' },
  { to: 'tel:+12155550199', title: '+12155550199' }
]
export default function BurgerModalNavigation() {
  return (
    <div className='fixed bottom-28 left-0 z-50 h-screen w-full bg-grey-400'>
      <div className='mx-auto flex flex-col items-center gap-12 pt-40 text-white'>
        <NavList />
        <button
          className='flex items-center rounded bg-black px-20 py-4 font-manrope uppercase'
          type='button'>
          Order
        </button>
        <address className='m-auto mb-12 min-w-80'>
          <AddressList />
        </address>
        <ul className='flex gap-12'>
          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              className='font-manrope text-base uppercase not-italic tracking-wider'
              href='https://www.instagram.com'>
              <Icon
                className='rounded-full bg-white p-3 text-grey-400'
                id='icon-instagram'
                w={40}
                h={40}
              />
            </Link>
          </li>
          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              className='font-manrope text-base uppercase not-italic tracking-wider'
              href='https://www.fb.com/'>
              <Icon
                className='rounded-full bg-white p-3 text-grey-400'
                id='icon-facebook'
                w={40}
                h={40}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

function NavList() {
  return (
    <ul className='flex flex-col items-center gap-4'>
      {navItems.map((item, index) => (
        <li key={index}>
          {
            <MenuItem
              menuLink={{
                href: item.to,
                title: item.title,
                className:
                  'font-cormorant text-2xl uppercase not-italic tracking-wider'
              }}>
              <MenuItem.ItemLink />
            </MenuItem>
          }
        </li>
      ))}
    </ul>
  )
}
function AddressList() {
  return (
    <ul className='flex flex-col items-center gap-4'>
      {addressItems.map((item, index) => (
        <li key={index}>
          {
            <MenuItem
              menuLink={{
                href: item.to,
                title: item.title,
                className:
                  'font-manrope text-base uppercase not-italic tracking-wider'
              }}>
              <MenuItem.ItemLink />
            </MenuItem>
          }
        </li>
      ))}
    </ul>
  )
}
