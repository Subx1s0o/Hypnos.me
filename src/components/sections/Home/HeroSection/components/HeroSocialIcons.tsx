import React from 'react'

import OutLink from '@/components/ui/OutLink'

export default function HeroSocialIcons() {
  return (
    <div className='flex gap-4'>
      <OutLink
        href='https://www.instagram.com'
        iconId='icon-instagram'
        iconHeight={16}
        iconWidth={16}
      />
      <OutLink
        href='https://www.fb.com/'
        iconId='icon-facebook'
        iconHeight={16}
        iconWidth={16}
      />
    </div>
  )
}
