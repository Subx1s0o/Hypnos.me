import Link from 'next/link'

const navLinks = [
  { href: '/catalogue', label: 'Rings' },
  { href: '/about-us', label: 'About us' },
  { href: '/contacts', label: 'Contacts' }
]

export default function FooterNavigation() {
  return (
    <nav className=''>
      <ul className='flex flex-col items-center gap-3'>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className='text-[18px] uppercase leading-6'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
