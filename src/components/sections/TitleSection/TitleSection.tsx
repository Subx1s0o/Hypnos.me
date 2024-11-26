import NavigationList from './components/NavigationList'

const TitleSection = () => {
  return (
    <section>
      <div className='relative px-[24px] pt-[75px] md:px-[43px] md:pb-[27px] md:pt-[53px]'>
        <NavigationList />
        <h1
          className='mx-auto max-w-[327px] text-center font-cormorant text-lg md:max-w-[510px]
            md:text-xxl'>
          JEWELLERY ATELIER
        </h1>
      </div>
    </section>
  )
}

export default TitleSection
