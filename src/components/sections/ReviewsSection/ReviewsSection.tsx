import { EmblaOptionsType } from 'embla-carousel'

import EmblaCarousel from './components/EmblaCarousel'

export default function ReviewsSection() {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
  const SLIDES = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat, architecto totam obcaecati recusandae rem at ipsum consequatur soluta iste.',
      imageUrl: '/images/ReviewsSection/person_1.avif',
      altText: 'fotoslide',
      author: 'Albert Flores',
      date: '24.02.2022'
    },
    {
      text: 'Tempus nunc in at ipsum hendrerit massa, iaculis. Faucibus tristique porttitor quis eu.',
      imageUrl: '/images/ReviewsSection/person_2.avif',
      altText: 'secondSlide',
      author: 'John Doe',
      date: '01.03.2023'
    },
    {
      text: 'Enim, ullamcorper urna ultricies arcu malesuada potenti. Justo, vitae sagittis vitae sit auctor congue velit. Cursus dignissim sed proin.',
      imageUrl: '/images/ReviewsSection/person_3.avif',
      altText: 'fotoslide',
      author: 'Albert Flores',
      date: '12.06.2021'
    },
    {
      text: 'Enim, ullamcorper urna ultricies arcu malesuada potenti.',
      imageUrl: '/images/ReviewsSection/person_4.avif',
      altText: 'fotoslide',
      author: 'Cody Fisher',
      date: '07.09.2025'
    }
  ]

  return (
    <section className='w-full px-4 py-24 md:px-10 md:pb-32'>
      <div className='relative'>
        <h2 className='mb-7 font-cormorant text-md text-[#3C3C3C]'>Reviews</h2>
        <hr className='mb-8 border border-[#D9CABF]' />
        <div className='mb-6 flex justify-between sm:px-0'>
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
          />
        </div>

        {/* <div className='grid sm:gap-5 md:grid-cols-2'></div> */}
      </div>
    </section>
  )
}
