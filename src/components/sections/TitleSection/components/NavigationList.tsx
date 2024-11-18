import Link from 'next/link'

const NavigationList = () => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex justify-center gap-[32px] font-manrope text-sm text-grey-400'>
        <li>
          <Link href={'#catalogue'}>Catalogue</Link>
        </li>
        <li>
          <Link href={'#products'}>New products</Link>
        </li>
        <li>
          <Link href={'#about'}>About us</Link>
        </li>
        <li>
          <Link href={'#contacts'}>Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationList
