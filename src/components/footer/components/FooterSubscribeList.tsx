import { SpriteTypes } from '@/types'

import Icon from '@/components/ui/Icon'

type SocialLinks = {
  href: string
  label: string
  icon: SpriteTypes
}

const socialLinks: SocialLinks[] = [
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: 'icon-instagram'
  },
  {
    href: 'https://www.facebook.com/',
    label: 'FaceBook',
    icon: 'icon-facebook'
  }
]

function FooterContactList() {
  return (
    <div>
      <h4 className='mb-6 text-center text-xs font-semibold uppercase text-brown md:text-left'>
        Subscribe
      </h4>
      <ul className='flex gap-4 md:flex-col md:gap-3'>
        {socialLinks.map((item, index) => {
          return (
            <li
              key={index}
              className='flex items-center gap-3'>
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center md:gap-3'>
                <Icon
                  id={item.icon}
                  w={14}
                  h={14}
                  className='text-brown-light flex size-8 items-center justify-center rounded-full
                    bg-[#2E2826] transition-colors lg:group-hover:bg-brown lg:group-hover:text-white'
                />
                <span className='hidden text-[16px] text-white md:block lg:block'>
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterContactList
