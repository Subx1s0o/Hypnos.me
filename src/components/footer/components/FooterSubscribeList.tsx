import { SpriteTypes } from '@/types'

import Icon from '@/components/ui/Icon'

type socialLinks = {
  href: string
  label: string
  icon: SpriteTypes
}

const socialLinks: socialLinks[] = [
  { href: '#', label: 'Instagram', icon: 'icon-instagram' },
  { href: '#', label: 'FaceBook', icon: 'icon-facebook' }
]

function FooterContactList() {
  return (
    <div>
      <h4 className='mb-6 text-xs font-semibold uppercase text-brown'>
        Subscribe
      </h4>
      <ul className='flex gap-4 lg:flex-col'>
        {socialLinks.map((item, index) => {
          return (
            <li
              key={index}
              className='flex items-center gap-3'>
              <a
                href={item.href}
                className='flex items-center'>
                <Icon
                  id={item.icon}
                  w={13}
                  h={13}
                  className='flex size-8 items-center justify-center rounded-full bg-[#2E2826]'
                />
                <span className='hidden text-[16px] text-white lg:block'>
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
