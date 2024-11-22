import Link from 'next/link'

const NavigationList = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex justify-center gap-slide-large font-manrope text-sm text-grey-400'>
        <li>
          <Link
            href={'#catalogue'}
            className='duration-300 hover:text-gray-300'>
            Catalogue
          </Link>
        </li>
        <li>
          <Link
            href={'#products'}
            className='duration-300 hover:text-gray-300'>
            New products
          </Link>
        </li>
        <li>
          <Link
            href={'#about'}
            className='duration-300 hover:text-gray-300'>
            About us
          </Link>
        </li>
        <li>
          <Link
            href={'#contacts'}
            className='duration-300 hover:text-gray-300'>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationList
