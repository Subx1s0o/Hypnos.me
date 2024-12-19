import Image from 'next/image'
import Link from 'next/link'

interface BannerSectionProps {
  src: string
  title: string
  spanText: string
  description: string
  linkHref: string
  linkText: string
}

export default function BannerSection({
  src,
  title,
  spanText,
  description,
  linkHref,
  linkText
}: BannerSectionProps) {
  return (
    <section className='flex h-full min-w-[200px] flex-col items-center rounded-md border px-3 py-8'>
      <Image
        className='mb-6'
        src={src}
        alt='decorative'
        width={56}
        height={56}
      />
      <h3 className='mb-8 max-w-52 text-center font-cormorant text-[24px] !font-bold xxl:text-smd'>
        {title}
      </h3>
      <span className='mb-14 rounded-full border px-[30px] py-3 text-xs'>
        {spanText}
      </span>
      <p className='max-w-[200px] text-center text-xs xxl:text-sm'>
        {description}
      </p>
      <Link
        className='mt-auto text-sm font-semibold lg:hover:underline'
        href={linkHref}>
        {linkText}
      </Link>
    </section>
  )
}
