import Link from 'next/link'

import Icon from '@/components/ui/Icon'

export default function AboutSection() {
  return (
    <section className='relative flex justify-center overflow-hidden px-4 py-12 pb-32 md:px-10'>
      <Icon
        className='absolute -top-16 left-[50.5%] -z-10 -translate-x-1/2 scale-75 text-grey-light
          lg:top-48 lg:scale-[1.55]'
        id='icon-crystal'
        w={871}
        h={682}
      />

      <div className='sm:max-w-xl lg:max-w-5xl'>
        <h2
          className='mb-12 font-cormorant text-2xl text-brown sm:text-center sm:text-md md:mb-[124px]
            lg:text-md xl:text-lg'>
          SINCE 2012 WE HAVE BEEN CREATING EXCLUSIVE JEWELLERY TO ORDER,
          FULFILLING THE MOST DARING JEWELLERY DREAMS.
        </h2>
        <div className='flex grid-cols-2 flex-col gap-5 md:grid'>
          <div className='col-start-2'>
            <div className='mb-[48px] flex flex-col gap-4 text-black sm:gap-12 md:mb-[108px]'>
              <p className='text-base'>
                Our online shop features the works of talented Ukrainian
                designers creating jewellery made of silver, gold, brass, steel
                and experimental materials.
              </p>
              <p className='text-base'>
                We believe that a piece of jewellery is a personal jewellery
                code, which encrypts the meanings important for the wearer. That
                is why our mission is to help you build your unique jewellery
                wardrobe filled with jewellery that is close to your values and
                ideology.
              </p>
            </div>
            <Link
              href='custom'
              className='flex justify-center text-white md:justify-start'>
              <Icon
                className='shrink-0 rotate-45 rounded-full bg-brown p-5 transition-all lg:block
                  lg:hover:bg-brown-active'
                id='icon-arrow'
                w={16}
                h={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
