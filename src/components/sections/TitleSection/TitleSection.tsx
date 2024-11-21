import NavigationList from './components/NavigationList'

const TitleSection = () => {
  return (
    <section>
      <div className='px-[24px] pt-[75px] md:px-[43px] md:pb-[27px] md:pt-[53px]'>
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
