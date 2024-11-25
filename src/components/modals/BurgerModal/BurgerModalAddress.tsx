import { addressItems } from './data/burger-data'

export default function BurgerModalAddress() {
  return (
    <address className='m-auto mb-12 min-w-80'>
      <ul className='flex flex-col items-center gap-4'>
        {addressItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.to}
              className='font-manrope text-base uppercase not-italic tracking-wider'>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </address>
  )
}