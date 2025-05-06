import { SpriteTypes } from '@/types'

import Icon from '@/components/ui/Icon'

interface OutLinkLinkProps {
  href: string
  iconId: SpriteTypes
  iconWidth: number
  iconHeight: number
  className?: string
}

export default function OutLink({
  href,
  iconId,
  iconHeight,
  iconWidth,
  className = ''
}: OutLinkLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-block'>
      <Icon
        id={iconId}
        w={iconWidth}
        h={iconHeight}
        className={`rounded-full bg-cream p-3 duration-300 lg:hover:bg-brown lg:hover:text-white
          ${className}`}
      />
    </a>
  )
}
