import Link from 'next/link'

interface MobileAdressItem {
  type: 'button' | 'link'
  title?: string
  to: string
}

const addressItems: MobileAdressItem[] = [
  {
    type: 'link',
    to: 'mailto:webmaster@example.com',
    title: '123 Walnut Street, USA'
  },
  {
    type: 'link',
    to: 'mailto:webmaster@example.com',
    title: 'webmaster@example.com'
  },
  { type: 'link', to: 'tel:+12155550199', title: '+12155550199' }
]
export default function AddressList() {
  return (
    <address className='m-auto mb-12 min-w-80'>
      <ul className='flex flex-col items-center gap-4'>
        {addressItems.map((item, index) => (
          <li key={index}>
            {
              <Link
                className='font-manrope text-base uppercase not-italic tracking-wider'
                href={item.to}>
                {item.title}
              </Link>
            }
          </li>
        ))}
      </ul>
    </address>
  )
}
