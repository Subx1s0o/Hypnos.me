import Icon from '@/components/ui/Icon'
import ScrollButton from '@/components/ui/ScrollButton'
import  EmblaCarousel  from './components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'



export default function ReviewsSection() {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
  const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <section className='py-24 px-4 sm:px-4 sm:pb-24 md:px-10 md:pb-32 relative'>
      <h2 className='sm:text-choco font-cormorant sm:text-md'>Reviews</h2>
      <div className='mb-6 flex justify-between px-4 sm:px-0'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
       
      </div>

      <div className='grid sm:gap-5 md:grid-cols-2'>
        
      </div>
    </section>
  )
}
