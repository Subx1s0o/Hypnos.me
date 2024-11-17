import Icon from '../../ui/Icon'
import SvgCristall from './SvgCristall'

export default function AboutSection() {
  return (
    <section>
      <SvgCristall />

      <div className='relative mx-auto px-4 sm:max-w-xl lg:max-w-4xl lg:px-11'>
        <h2
          className='py-12 font-cormorant text-2xl font-medium uppercase not-italic tracking-tighter
            text-brown sm:text-center md:pb-28 md:text-4xl lg:text-6xl'>
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
          <div className='col-start-3 -ml-12 md:ml-0'>
            <Icon
              className='pointer-events-auto absolute rotate-45 rounded-full bg-brown p-5 text-white
                transition-all hover:bg-red-800 lg:block'
              id='icon-arrow'
              w={20}
              h={20}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
