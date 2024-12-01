import TitleNavigation from './components/TitleNavigation'

export default function TitleSection() {
  return (
    <section>
      <div className='px-[24px] pb-[80px] pt-[75px] md:px-[43px] md:pb-[27px] md:pt-[53px]'>
        <TitleNavigation />

        <h1
          className='mx-auto max-w-[327px] text-center font-cormorant text-lg md:max-w-[510px]
            md:text-xxl'>
          JEWELLERY ATELIER
        </h1>
      </div>
    </section>
  )
}
