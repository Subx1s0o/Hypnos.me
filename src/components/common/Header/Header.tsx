import { Link } from 'react-router-dom'

import Icon from '@/components/ui/Icon'

import HeaderNavigation from '../Navigations/HeaderNavigation'

export default function HomeHeader() {
  return (
    <header className='px-10'>
      <div className='border-b-grey-200 flex items-center justify-between border-b py-5'>
        <Link
          to='/'
          className=''>
          <Icon
            id='icon-logo'
            className='text-brown'
            w={150}
            h={35}
          />
        </Link>
        <HeaderNavigation />
        <div>
          <address className='relative flex gap-6 text-xs not-italic'>
            <a
              href='tel:12155550199'
              className='text-xs-heavy'>
              +1 215-555-0199
            </a>

            <a
              href='https://maps.app.goo.gl/B9Yav26Ua82HB1vS9'
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs-heavy'>
              123 Walnut Street
            </a>
          </address>
        </div>
      </div>
    </header>
  )
}
