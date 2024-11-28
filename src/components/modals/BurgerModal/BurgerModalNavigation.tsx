import Link from 'next/link'

import { navItems } from './data/burger-data'

export default function BurgerModalNavigation() {
  return (
    <>
      <ul className='flex flex-col items-center gap-4'>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.to}
              className='font-cormorant text-2xl uppercase not-italic tracking-wider'>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className='flex items-center rounded bg-black px-20 py-4 font-manrope uppercase'
        type='button'>
        Order
      </button>
    </>
  )
}
