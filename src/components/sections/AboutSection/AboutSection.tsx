import Link from 'next/link'

import Icon from '../../ui/Icon'

export default function AboutSection() {
  return (
    <section className='relative overflow-hidden py-12 pb-32 sm:px-4 md:px-10'>
      <Icon
        className='absolute -top-16 left-1/2 -translate-x-1/2 scale-75 text-primary lg:top-10
          lg:scale-110'
        id='icon-crystal'
        w={871}
        h={682}
      />

      <div className='mx-auto px-4 sm:max-w-xl lg:max-w-4xl lg:px-11'>
        <h2
          className='mb-12 font-cormorant text-2xl font-medium uppercase not-italic tracking-tighter
            text-brown sm:text-center md:pb-14 md:text-4xl lg:text-6xl'>
          SINCE 2012 WE HAVE BEEN CREATING EXCLUSIVE JEWELLERY TO ORDER,
          FULFILLING THE MOST DARING JEWELLERY DREAMS.
        </h2>
        <div className='grid grid-cols-4 gap-12 lg:gap-24'>
          <div
            className='col-span-4 col-end-5 text-justify font-manrope font-medium not-italic leading-7
              text-black md:col-start-3'>
            <p className='mb-12 lg:mb-16'>
              Our online shop features the works of talented Ukrainian designers
              creating jewellery made of silver, gold, brass, steel and
              experimental materials.
            </p>
            <p>
              We believe that a piece of jewellery is a personal jewellery code,
              which encrypts the meanings important for the wearer. That is why
              our mission is to help you build your unique jewellery wardrobe
              filled with jewellery that is close to your values and ideology.
            </p>
          </div>
          <Link
            href='custom'
            className='col-start-3 -ml-12 size-14 flex-none shrink-0 text-white md:ml-0'>
            <Icon
              className='shrink-0 rotate-45 rounded-full bg-brown p-5 transition-all hover:bg-red-800
                lg:block'
              id='icon-arrow'
              w={16}
              h={16}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
