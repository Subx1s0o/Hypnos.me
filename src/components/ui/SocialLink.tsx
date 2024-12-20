import React from 'react'
import { SpriteTypes } from '@/types'

import Icon from '@/components/ui/Icon'

interface SocialLinkProps {
  href: string
  iconId: SpriteTypes
  iconWidth: number
  iconHeight: number
  className?: string
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  iconId,
  iconHeight,
  iconWidth,
  className = ''
}) => {
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

export default SocialLink
