import { Link } from 'react-router-dom'

import Icon from '@/components/ui/Icon'
import { Tooltip } from '@/components/ui/Tooltip'

export default function HeaderNavigation() {
  return (
    <nav className='absolute left-1/2 -translate-x-1/2'>
      <ul className='flex items-center gap-2'>
        <li>
          <Tooltip content='Your Cart'>
            <button className='p-3'>
              <Icon
                id='icon-cart'
                w={18}
                h={18}
              />
            </button>
          </Tooltip>
        </li>
        <li>
          <Tooltip content='Your Favourites'>
            <Link
              className='block p-3'
              to='/favourites'>
              <Icon
                id='icon-heart'
                w={18}
                h={18}
              />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content='Your Profile'>
            <Link
              className='block p-3'
              to='/profile'>
              <Icon
                id='icon-profile'
                w={18}
                h={18}
              />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content='Search...'>
            <button className='p-3'>
              <Icon
                id='icon-search'
                w={18}
                h={18}
              />
            </button>
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}
