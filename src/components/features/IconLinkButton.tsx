import { Link } from 'react-router-dom'

import Icon from './Icon'

interface IconLinkButtonProps {
  id: string
  w: number
  h: number
  to: string
  className?: string
}

export default function IconLinkButton({
  id,
  w,
  h,
  className = '',
  to = ''
}: IconLinkButtonProps) {
  return (
    <Link
      className={`inline-block rounded-full ${className}`}
      to={to}>
      <Icon
        id={id}
        w={w}
        h={h}
      />
    </Link>
  )
}
