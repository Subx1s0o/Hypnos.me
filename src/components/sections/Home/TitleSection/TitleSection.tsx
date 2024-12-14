import HeaderPageNavigation from '@/components/common/Home/HeaderOrMenu/components/Header/HeaderPageNavigation'

export default function TitleSection() {
  return (
    <section>
      <div className='pb-[140px] pt-[100px] md:px-[43px] md:pb-[27px] md:pt-[53px]'>
        <HeaderPageNavigation />

        <h1
          className='mx-auto max-w-[327px] text-center font-cormorant text-lg md:max-w-[510px]
            md:text-xxl'>
          JEWELLERY ATELIER
        </h1>
      </div>
    </section>
  )
}
