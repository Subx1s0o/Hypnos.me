import Link from 'next/link'

import Icon from '@/components/ui/Icon'

interface MobileLinksItem {
  iconId: string
  type: 'link'
  to: string
}

const linksItems: MobileLinksItem[] = [
  { iconId: 'icon-instagram', type: 'link', to: 'https://www.instagram.com' },
  {
    iconId: 'icon-facebook',
    type: 'link',
    to: 'https://www.fb.com/'
  }
]
export default function SocialLinks() {
  return (
    <ul className='flex gap-12'>
      {linksItems.map((item, index) => (
        <li key={index}>
          {
            <Link
              target='_blank'
              rel='noopener noreferrer'
              className='font-manrope text-base uppercase not-italic tracking-wider'
              href={item.to}>
              <Icon
                className='rounded-full bg-white p-3 text-grey-400 duration-300 hover:bg-grey-400 hover:text-white'
                id={item.iconId}
                w={40}
                h={40}
              />
            </Link>
          }
        </li>
      ))}
    </ul>
  )
}
