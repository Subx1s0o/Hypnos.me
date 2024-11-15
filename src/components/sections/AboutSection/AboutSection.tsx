import useMedia from '@/hooks/useMedia'

export default function AboutSection() {
  const isDesktop = useMedia('(min-width: 768px)')

  return (
    <section className='py-12 pb-28 md:px-10'>
      {isDesktop ? (
        <div className='mx-auto max-w-4xl'>
          <p
            className='pb-28 pt-10 text-center font-cormorant text-6xl font-medium uppercase not-italic
              tracking-tighter text-brown'>
            SINCE 2012 WE HAVE BEEN CREATING EXCLUSIVE JEWELLERY TO ORDER,
            FULFILLING THE MOST DARING JEWELLERY DREAMS.
          </p>
          <div
            className='relative left-96 top-6 w-72 text-justify font-manrope font-medium not-italic
              leading-7 text-black'>
            <p className='pb-11'>
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
        </div>
      ) : (
        <div className='mx-auto max-w-80'>
          <p
            className='pb-12 pt-10 text-center font-cormorant text-3xl font-medium uppercase not-italic
              tracking-tighter text-brown'>
            SINCE 2012 WE HAVE BEEN CREATING EXCLUSIVE JEWELLERY TO ORDER,
            FULFILLING THE MOST DARING JEWELLERY DREAMS.
          </p>
          <div className='px-2 text-justify font-manrope font-medium not-italic leading-7 text-black'>
            <p className='pb-4'>
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
        </div>
      )}
    </section>
  )
}
