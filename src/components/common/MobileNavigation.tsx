import { Link } from 'react-router-dom'

import Icon from '../features/Icon'

export default function MobileNavigation() {
  return (
    <nav className='fixed bottom-0 w-full px-4 pb-8 pt-6'>
      <ul className='flex w-full items-center justify-between'>
        <li>
          <button className='p-4'>
            <Icon
              id='icon-cart'
              h={24}
              w={24}
            />
          </button>
        </li>
        <li>
          <button className='p-4'>
            <Icon
              id='icon-heart'
              h={24}
              w={24}
            />
          </button>
        </li>
        <li>
          <Link
            className='block p-4'
            to='/profile'>
            <Icon
              id='icon-profile'
              h={24}
              w={24}
            />
          </Link>
        </li>
        <li>
          <button className='p-4'>
            <Icon
              id='icon-search'
              h={24}
              w={24}
            />
          </button>
        </li>
        <li>
          <button className='p-4'>
            <Icon
              id='icon-burger'
              h={24}
              w={24}
            />
          </button>
        </li>
      </ul>
    </nav>
  )
}
