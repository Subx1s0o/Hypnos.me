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
    },
    {
      text: 'Enim, ullamcorper urna ultricies arcu malesuada potenti.',
      imageUrl: '/images/ReviewsSection/person_5.avif',
      altText: 'fotoslide',
      author: 'Persy Fisher',
      date: '07.10.2025'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat, architecto totam obcaecati recusandae rem at ipsum consequatur soluta iste.',
      imageUrl: '/images/ReviewsSection/person_6.avif',
      altText: 'fotoslide',
      author: 'Tania Daniels',
      date: '07.09.2025'
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat, architecto totam obcaecati recusandae rem at ipsum consequatur soluta iste.',
      imageUrl: '/images/ReviewsSection/person_7.avif',
      altText: 'fotoslide',
      author: 'Hanna Fisher',
      date: '07.09.2025'
    },
    {
      text: 'Enim, ullamcorper urna ultricies arcu malesuada potenti.',
      imageUrl: '/images/ReviewsSection/person_8.avif',
      altText: 'fotoslide',
      author: 'Linda Johnson',
      date: '07.09.2025'
    }
  ]

  return (
    <section className='w-full px-4 py-[120px] md:px-10'>
      <div className='relative'>
        <h2 className='text-grey-dark mb-7 font-cormorant text-md lg:mb-6 lg:text-xl'>
          Reviews
        </h2>
        <hr className='mb-8 border border-[#D9CABF]' />
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
        />
      </div>
    </section>
  )
}
