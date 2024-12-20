import React from 'react'

import SocialLink from '@/components/ui/SocialLink'

export default function HeroSocialIcons() {
  return (
    <div className='flex gap-4'>
      <SocialLink
        href='https://www.instagram.com'
        iconId='icon-instagram'
        iconHeight={16}
        iconWidth={16}
      />
      <SocialLink
        href='https://www.fb.com/'
        iconId='icon-facebook'
        iconHeight={16}
        iconWidth={16}
      />
    </div>
  )
}
