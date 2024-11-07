import scrollToSection from '@/lib/ScrollToSection'
import { Link } from 'react-router-dom'

import useMedia from '@/hooks/useMedia'

import Icon from '../features/Icon'

export default function HeroSection() {
  const isDesktop = useMedia('(min-width: 768px)')

  return (
    <section className='py-12 pb-28 md:px-10'>
      {isDesktop && (
        <div className='mb-6 flex justify-between'>
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
          <button onClick={() => scrollToSection('footer')}>
            <Icon
              className='rotate-180 rounded-full bg-cream p-3 duration-300 hover:bg-brown/50'
              id='icon-arrow'
              w={16}
              h={16}
            />
          </button>
        </div>
      )}
      <div className='grid md:grid-cols-2 md:gap-5'>
        <Link
          to='/catalog'
          className='relative aspect-[4/5] sm:aspect-[3/2]'>
          <div className='absolute inset-0'>
            <picture>
              <source
                srcSet='/images/HeroSection/catalog-d.avif'
                media='(min-width: 480px)'
              />
              <img
                src='/images/HeroSection/catalog.avif'
                alt='Catalog'
                className='size-full object-cover'
              />
            </picture>
          </div>
          <div
            className='absolute inset-0 flex items-center justify-center bg-black/25 p-8 duration-300
              hover:bg-transparent'>
            <p
              className='max-w-xs text-center font-cormorant text-md text-white hover:underline
                lg:max-w-none'>
              Wedding rings catalog
            </p>
          </div>
        </Link>

        <Link
          to='/make-order'
          className='relative aspect-[4/5] sm:aspect-[3/2]'>
          <div className='absolute inset-0'>
            <picture>
              <source
                srcSet='/images/HeroSection/make-order-d.avif'
                media='(min-width: 480px)'
              />
              <img
                src='/images/HeroSection/make-order.avif'
                alt='Catalog'
                className='size-full object-cover'
              />
            </picture>
          </div>
          <div
            className='absolute inset-0 flex items-center justify-center bg-black/25 duration-300
              hover:bg-transparent'>
            <p
              className='max-w-xs text-center font-cormorant text-md text-white hover:underline
                lg:max-w-none'>
              Exclusive custom jewelry
            </p>
          </div>
          <Icon
            className='absolute bottom-10 right-10 hidden rotate-45 rounded-full bg-brown p-6
              text-white lg:block'
            id='icon-arrow'
            w={20}
            h={20}
          />
        </Link>
      </div>
    </section>
  )
}
