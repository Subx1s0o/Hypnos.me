import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Autoplay, Mousewheel } from 'swiper/modules'

import OfferSlide from './OfferSlide'

export default function OffersSwiper() {
  return (
    <div className='mb-[120px] md:mb-[116px]'>
      <h2 className='mb-8 text-center font-cormorant text-md leading-[85%] md:hidden'>
        Unique offers
      </h2>
      <Swiper
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Mousewheel]}
        spaceBetween={12}
        mousewheel={true}
        slidesPerView={1.15}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }}>
        <SwiperSlide>
          <OfferSlide
            iconId='icon-vector-samples'
            title='Samples of rings in silver'
            buttonText='Free'
            text='Try on and wear sample rings for up to 7 days'
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferSlide
            iconId='icon-vector-polishing'
            title='Polishing and Cleaning'
            buttonText='Indefinitely'
            text='With your purchase, you get a certificate for service'
            className='bg-gradient-to-bl from-[#F3F1EF00] to-[#F3F1EF]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferSlide
            iconId='icon-vector-engraving'
            title='Engraving'
            buttonText='Flawless'
            text='Take advantage of our online font selection service'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
