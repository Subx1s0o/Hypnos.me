import { Link } from 'react-router-dom'

import Icon from '../features/Icon'

export default function HomeHeader() {
  return (
    <header className='pt-5'>
      <div className='flex justify-between px-10'>
        <div>
          <ul
            className='mb-5 inline-flex max-w-[308px] items-center border-b-2 border-primary
              lg:inline-grid lg:grid-cols-2'>
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
                className='text-xs outline-none placeholder:text-grey'
              />
            </li>
          </ul>
          <address className='text-xs not-italic'>
            <a href='tel:12155550199'>+1 215-555-0199</a>
          </address>
        </div>

        <Link
          to='/'
          className='absolute left-1/2 top-[30px] flex -translate-x-1/2 items-center gap-3'>
          <h3 className='font-cormorant text-md-thin'>HYPNOS</h3>
          <Icon
            id='icon-logo'
            className='text-brown'
            w={32}
            h={32}
          />
        </Link>

        <div>
          <ul
            className='mb-5 inline-flex items-center border-b-2 border-primary lg:inline-grid
              lg:grid-cols-2'>
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
          <address className='text-xs not-italic'>
            <p className='max-w-[150px] text-balance text-center lg:max-w-full lg:text-right'>
              Pennsylvania St.Poughkeepsie, NY 12601
            </p>
          </address>
        </div>
      </div>
    </header>
  )
}
