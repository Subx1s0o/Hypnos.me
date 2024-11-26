import Link from 'next/link'

const NavigationList = () => {
  return (
    <nav className='mb:mb-3 hidden md:block'>
      <ul className='flex justify-center gap-slide-large font-manrope text-sm text-grey-400'>
        <li className='relative'>
          <Link
            href={'#catalogue'}
            className='duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px]
              after:w-0 after:-translate-x-1/2 after:bg-grey-400 after:duration-300
              hover:after:w-full'>
            Catalogue
          </Link>
        </li>
        <li className='relative'>
          <Link
            href={'#products'}
            className='duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px]
              after:w-0 after:-translate-x-1/2 after:bg-grey-400 after:duration-300
              hover:after:w-full'>
            New products
          </Link>
        </li>
        <li className='relative'>
          <Link
            href={'#about'}
            className='duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px]
              after:w-0 after:-translate-x-1/2 after:bg-grey-400 after:duration-300
              hover:after:w-full'>
            About us
          </Link>
        </li>
        <li className='relative'>
          <Link
            href={'#contacts'}
            className='duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px]
              after:w-0 after:-translate-x-1/2 after:bg-grey-400 after:duration-300
              hover:after:w-full'>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationList
