import Link from 'next/link'

import Icon from '@/components/ui/Icon'

export default function BurgerModalSocialLinks() {
  return (
    <ul className='flex gap-12'>
      <li>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          className='font-manrope text-base uppercase not-italic tracking-wider'
          href='https://www.instagram.com'>
          <Icon
            className='rounded-full bg-white p-3 text-grey-400'
            id='icon-instagram'
            w={16}
            h={16}
          />
        </Link>
      </li>
      <li>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          className='font-manrope text-base uppercase not-italic tracking-wider'
          href='https://www.fb.com/'>
          <Icon
            className='rounded-full bg-white p-3 text-grey-400'
            id='icon-facebook'
            w={16}
            h={16}
          />
        </Link>
      </li>
    </ul>
  )
}
