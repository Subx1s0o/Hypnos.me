import { Link } from 'react-router-dom'

import Icon from '../features/Icon'

export default function HomeHeader() {
  return (
    <header className='pt-5'>
      <div className='flex justify-between px-10'>
        <ul
          className='border-primary inline-flex max-w-[308px] items-center border-b-2 lg:inline-grid
            lg:grid-cols-2'>
          <li>
            <Link
              className='flex items-center gap-3 py-5 pr-20 text-xs lg:pr-0'
              to='/profile'>
              <Icon
                id='icon-profile'
                w={24}
                h={24}
              />
              Profile
            </Link>
          </li>
          <li className='hidden items-center gap-3 py-5 text-xs lg:flex'>
            <Icon
              id='icon-search'
              w={24}
              h={24}
            />
            <input
              type='text'
              placeholder='Search'
              className='placeholder:text-grey text-xs outline-none'
            />
          </li>
        </ul>

        <div className='absolute left-1/2 top-[30px] flex -translate-x-1/2 items-center gap-3'>
          <h3 className='text-md-thin font-cormorant'>HYPNOS</h3>
          <Icon
            id='icon-logo'
            className='text-brown'
            w={32}
            h={32}
          />
        </div>

        <ul className='border-primary inline-flex items-center border-b-2 lg:inline-grid lg:grid-cols-2'>
          <li>
            <button className='flex items-center gap-3 py-5 pr-[90px] text-xs'>
              <Icon
                id='icon-cart'
                w={24}
                h={24}
              />
              Cart
            </button>
          </li>
          <li className='hidden lg:block'>
            <button className='flex items-center gap-3 py-5 pr-[10px] text-xs'>
              <Icon
                id='icon-heart'
                w={24}
                h={24}
              />
              Favourites
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
