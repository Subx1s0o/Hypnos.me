import useMedia from '@/hooks/useMedia'

import Icon from '../../ui/Icon'
import ScrollButton from '../../ui/ScrollButton'
import ImageLinkCard from './components/ImageLinkCard'
import SocialIcons from './components/SocialIcons'

export default function HeroSection() {
  const isDesktop = useMedia('(min-width: 768px)')

  return (
    <section className='py-12 pb-28 md:px-10'>
      {isDesktop && (
        <div className='mb-6 flex justify-between'>
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
      )}

      <div className='grid md:grid-cols-2 md:gap-5'>
        <ImageLinkCard
          to='/catalog'
          imageSrc='/images/HeroSection/catalog.avif'
          imageSrcSet='/images/HeroSection/catalog-d.avif'
          imageAlt='Catalog'
          text='Wedding rings catalog'
        />
        <ImageLinkCard
          to='/make-order'
          imageSrc='/images/HeroSection/make-order.avif'
          imageSrcSet='/images/HeroSection/make-order-d.avif'
          imageAlt='Custom jewelry'
          text='Exclusive custom jewelry'>
          <Icon
            className='absolute bottom-10 right-10 hidden rotate-45 rounded-full bg-brown p-6
              text-white lg:block'
            id='icon-arrow'
            w={20}
            h={20}
          />
        </ImageLinkCard>
      </div>
    </section>
  )
}
