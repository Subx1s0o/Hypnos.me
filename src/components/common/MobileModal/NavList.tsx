import Link from 'next/link'

interface MobileNavItem {
  type: 'link'
  title?: string
  to: string
}
const navItems: MobileNavItem[] = [
  { type: 'link', to: '/', title: 'головна' },
  { type: 'link', to: '/', title: 'новинки' },
  { type: 'link', to: '/profile', title: 'про нас' },
  { type: 'link', to: '/', title: 'кільця' },
  { type: 'link', to: '/', title: 'контакти' }
]

export default function NavList() {
  return (
    <ul className='flex flex-col items-center gap-4'>
      {navItems.map((item, index) => (
        <li key={index}>
          {
            <Link
              key={index}
              className=' font-cormorant text-2xl uppercase not-italic tracking-wider focus:underline'
              href={item.to}>
              {item.title}
            </Link>
          }
        </li>
      ))}
    </ul>
  )
}
