import { PropsWithChildren } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ImageLinkCardProps = PropsWithChildren & {
  to: string
  imageSrc: string
  imageSrcSet: string
  imageAlt: string
  text: string
}

export default function ImageLinkCard({
  to,
  imageSrc,
  imageSrcSet,
  imageAlt,
  text,
  children
}: ImageLinkCardProps) {
  return (
    <Link
      href={to}
      className='relative aspect-[4/5] sm:aspect-[3/2]'>
      <picture className='relative block h-full'>
        <source
          srcSet={imageSrcSet}
          media='(min-width: 480px)'
        />
        <Image
          src={imageSrc}
          alt={imageAlt}
          sizes='(min-width: 480px) 50vw, 100vw'
          fill
          priority
        />
      </picture>

      <div
        className='absolute inset-0 flex items-center justify-center bg-black/25 duration-300
          md:hover:bg-transparent'>
        <p className='max-w-xs text-center font-cormorant text-md text-white lg:max-w-none'>
          {text}
        </p>
      </div>
      {children}
    </Link>
  )
}
