import Image from 'next/image'

type OfferSlideProps = {
  title?: string
  buttonText?: string
  text?: string
  iconSrc: string
  className?: string
}

export default function OfferSlide({
  title,
  buttonText,
  text,
  iconSrc,
  className
}: OfferSlideProps) {
  return (
    <div
      className={`flex h-[495px] w-full flex-col items-center gap-10 rounded-[2px] border
        border-grey-200 px-10 py-12 font-manrope md:h-[218px] md:gap-4 md:py-6
        xl:h-[459px] xl:gap-10 xl:py-12 ${className}`}>
      <div className='flex size-14 items-center justify-center md:size-10 lg:size-14'>
        <Image
          src={iconSrc}
          width={56}
          height={56}
          alt='decorative-element'
        />
      </div>

      <h3
        className='text-center font-cormorant text-smd font-bold md:text-base-big md:font-bold
          md:leading-[28px] xl:mb-6 xl:text-smd xl:font-bold xl:leading-[40px]'>
        {title}
      </h3>
      <div
        className='mx-auto rounded-[100px] border border-grey-200 px-[50px] py-3 text-xs
          font-semibold md:hidden xl:block'>
        {buttonText}
      </div>
      <p className='text-center text-sm leading-[22px] text-grey-400'>{text}</p>
    </div>
  )
}
