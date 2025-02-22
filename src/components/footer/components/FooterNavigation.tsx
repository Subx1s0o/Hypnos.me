import Link from 'next/link'

const navLinks = [
  { href: '/catalogue', label: 'Rings' },
  { href: '/about-us', label: 'About us' },
  { href: '/contacts', label: 'Contacts' }
]

export default function FooterNavigation() {
  return (
    <nav className='md:mb-16 md:flex md:justify-end'>
      <ul className='flex flex-col items-center gap-3 md:w-[50%] md:flex-row md:gap-11'>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className='font-manrope text-[18px] uppercase leading-[24px] md:text-sm md:capitalize
                md:leading-[19px]'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
