import Link from 'next/link'

import Icon from '@/components/ui/Icon'

export default function Logo() {
  return (
    <Link
      href='/'
      className=''>
      <Icon
        id='icon-logo'
        className='text-brown'
        w={150}
        h={35}
      />
    </Link>
  )
}
