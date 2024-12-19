import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Breadcrumb from '@/components/features/BreadCrumb'
import Icon from '@/components/ui/Icon'

import HeaderPageNavigation from './Header/HeaderPageNavigation'
import HeaderUserNavigation from './Header/HeaderUserNavigation'

export default function HeaderDesktop() {
  const path = usePathname()
  const shouldRenderPageNavigation = path !== '/'

  return (
    <>
      <header className='px-10'>
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

          <address className='relative flex flex-col gap-1 text-xs not-italic lg:flex-row lg:gap-6'>
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
      </header>
      {shouldRenderPageNavigation && (
        <div className='relative flex items-center justify-between px-10 py-5'>
          <Breadcrumb />
          <div className='lg:left-1/2 xl:absolute xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2'>
            <HeaderPageNavigation />
          </div>
        </div>
      )}
    </>
  )
}
