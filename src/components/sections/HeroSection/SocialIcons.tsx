import Icon from '@/components/features/Icon'

export default function SocialIcons() {
  return (
    <div className='flex gap-4'>
      <a
        href='https://www.instagram.com'
        target='_blank'
        rel='noopener noreferrer'>
        <Icon
          className='rounded-full bg-cream p-3 duration-300 hover:bg-brown/50'
          id='icon-instagram'
          w={16}
          h={16}
        />
      </a>
      <a
        href='https://www.fb.com/'
        target='_blank'
        rel='noopener noreferrer'>
        <Icon
          className='rounded-full bg-cream p-3 duration-300 hover:bg-brown/50'
          id='icon-facebook'
          w={16}
          h={16}
        />
      </a>
    </div>
  )
}
