import { Link } from 'react-router-dom'

import Icon from './features/Icon'
import IconLinkButton from './features/IconLinkButton'

export default function HeroSection() {
  const scrollToRingsSection = () => {
    const ringsSection = document.getElementById('rings-section')
    if (ringsSection) {
      ringsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section
      id='hero'
      className='py-12 pb-28 md:px-10'>
      <div className='mb-6 flex'>
        <IconLinkButton
          className='hidden bg-cream p-3 md:block'
          id='icon-instagram'
          w={16}
          h={16}
          to='https://www.instagram.com/'
        />
        <IconLinkButton
          className='ml-4 hidden bg-cream p-3 md:block'
          id='icon-facebook'
          w={16}
          h={16}
          to='https://www.fb.com/'
        />
        <button
          onClick={scrollToRingsSection}
          className='ml-auto hidden rounded-full bg-cream p-3 md:block'>
          <Icon
            id='icon-arrow'
            w={16}
            h={16}
          />
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5'>
        <Link
          to='/catalog'
          className='group relative aspect-[4/5] sm:aspect-[3/2]'>
          <div className='absolute inset-0'>
            <picture>
              <source
                srcSet='/public/img/catalog-d.avif'
                media='(min-width: 480px)'
              />
              <img
                src='/public/img/catalog.avif'
                alt='Catalog'
                className='size-full object-cover'
              />
            </picture>
          </div>
          <div
            className='absolute inset-0 flex items-center justify-center bg-black/25 transition-all
              duration-300 group-hover:bg-transparent'>
            <p className='text-center font-moniqa text-md text-white'>
              Wedding rings catalog
            </p>
          </div>
        </Link>

        <Link
          to='/make-order'
          className='group relative aspect-[4/5] sm:aspect-[3/2]'>
          <div className='absolute inset-0'>
            <picture>
              <source
                srcSet='/public/img/make-order-d.avif'
                media='(min-width: 480px)'
              />
              <img
                src='/public/img/make-order.avif'
                alt='Catalog'
                className='size-full object-cover'
              />
            </picture>
          </div>
          <div
            className='absolute inset-0 flex items-center justify-center bg-black/25 transition-all
              duration-300 group-hover:bg-transparent'>
            <p className='text-center font-moniqa text-md text-white'>
              Exclusive custom jewelry
            </p>
          </div>
          <Icon
            className='rotate-135 absolute bottom-10 right-10 hidden rounded-full bg-brown p-6
              text-white md:block'
            id='icon-arrow'
            w={20}
            h={20}
          />
        </Link>
      </div>
    </section>
  )
}
