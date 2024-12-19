import Icon from '@/components/ui/Icon'
import ScrollButton from '@/components/ui/ScrollButton'

import ImageLinkCard from './components/ImageLinkCard'
import SocialIcons from './components/SocialIcons'

export default function HeroSection() {
  return (
    <section className='pb-[60px] sm:px-4 md:px-10'>
      <div className='mb-6 flex justify-between px-4 sm:px-0'>
        <SocialIcons />
        <ScrollButton id='products'>
          <Icon
            className='rotate-180 rounded-full bg-cream p-3 duration-300 hover:bg-brown/50'
            id='icon-arrow'
            w={16}
            h={16}
          />
        </ScrollButton>
      </div>

      <div className='grid gap-5 md:grid-cols-2'>
        <ImageLinkCard
          to='/custom'
          imageSrc='/images/HeroSection/make-order-d.avif'
          imageSrcSet='/images/HeroSection/make-order-d.avif'
          imageAlt='Custom jewelry'
          text='Exclusive custom jewelry'
        />
        <ImageLinkCard
          to='/products'
          imageSrc='/images/HeroSection/catalog.avif'
          imageSrcSet='/images/HeroSection/catalog-d.avif'
          imageAlt='Catalog'
          text='Wedding rings catalog'>
          <Icon
            className='pointer-events-none absolute bottom-10 right-10 hidden rotate-45 rounded-full
              bg-brown p-6 text-white lg:block'
            id='icon-arrow'
            w={20}
            h={20}
          />
        </ImageLinkCard>
      </div>
    </section>
  )
}
