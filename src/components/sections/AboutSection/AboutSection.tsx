import GradientIcon from './GradientIcon'
import SvgCristall from './SvgCristall'

export default function AboutSection() {
  return (
    <section>
      <SvgCristall />

      <div className='mx-auto sm:max-w-xl lg:max-w-4xl'>
        <h2
          className='px-2 py-12 font-cormorant text-2xl font-medium uppercase not-italic
            tracking-tighter text-brown sm:text-center md:pb-28 md:text-4xl lg:text-6xl'>
          SINCE 2012 WE HAVE BEEN CREATING EXCLUSIVE JEWELLERY TO ORDER,
          FULFILLING THE MOST DARING JEWELLERY DREAMS.
        </h2>
        <div className='px-2 sm:grid sm:grid-cols-2'>
          <div
            className='relative col-start-2 mb-48 font-manrope font-medium not-italic leading-7
              text-black md:w-80'>
            <p className='pb-4 text-justify md:pb-11'>
              Our online shop features the works of talented Ukrainian designers
              creating jewellery made of silver, gold, brass, steel and
              experimental materials.
            </p>
            <p className='pb-4 text-justify'>
              We believe that a piece of jewellery is a personal jewellery code,
              which encrypts the meanings important for the wearer. That is why
              our mission is to help you build your unique jewellery wardrobe
              filled with jewellery that is close to your values and ideology.
            </p>
            <GradientIcon />
          </div>
        </div>
      </div>
    </section>
  )
}