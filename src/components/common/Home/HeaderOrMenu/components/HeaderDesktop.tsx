import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Icon from '@/components/ui/Icon'

import HeaderPageNavigation from './Header/HeaderPageNavigation'
import HeaderUserNavigation from './Header/HeaderUserNavigation'

export default function HeaderDesktop() {
  const path = usePathname()
  const shouldRenderPageNavigation = path !== '/'

  return (
    <>
      <header className='mb-5 px-10'>
        <div className='flex items-center justify-between border-b border-b-grey-200 py-5'>
          <Link
            href='/'
            className=''>
            <Icon
              id='icon-logo'
              className='text-brown'
              w={150}
              h={35}
            />
          </Link>
          <HeaderUserNavigation />
          <div>
            <address className='relative flex gap-6 text-xs not-italic'>
              <a
                href='tel:12155550199'
                className='text-xs font-semibold'>
                +1 215-555-0199
              </a>

              <a
                href='https://maps.app.goo.gl/B9Yav26Ua82HB1vS9'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs font-semibold'>
                123 Walnut Street
              </a>
            </address>
          </div>
        </div>
      </header>
      {shouldRenderPageNavigation && <HeaderPageNavigation />}
    </>
  )
}
