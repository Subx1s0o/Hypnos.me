import Icon from '@/components/ui/Icon'

import NavigationList from './components/NavigationList'

const TitleSection = () => {
  return (
    <section className='overflow-hidden'>
      <div className='relative px-[24px] pt-[75px] md:px-[43px] md:pb-[27px] md:pt-[53px]'>
        <Icon
          className='absolute -top-1/2 left-[51%] z-[-1] -translate-x-1/2 scale-[0.5] text-[#ccc0b1]
            text-opacity-[0.5] md:top-0 md:scale-[1.01]'
          id='icon-crystal'
          w={800}
          h={680}
        />

        <NavigationList />
        <h1
          className='mx-auto mt-3 flex max-w-[327px] justify-center text-center font-cormorant
            text-lg uppercase md:max-w-[510px] md:text-xxl'>
          JEWELLERY ATELIER
        </h1>
      </div>
    </section>
  )
}

export default TitleSection
