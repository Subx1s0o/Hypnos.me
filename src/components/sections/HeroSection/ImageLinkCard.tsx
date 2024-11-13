import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ImageLinkCardProps {
  to: string
  imageSrc: string
  imageSrcSet: string
  imageAlt: string
  text: string
  children?: ReactNode
}

const ImageLinkCard: React.FC<ImageLinkCardProps> = ({
  to,
  imageSrc,
  imageSrcSet,
  imageAlt,
  text,
  children
}) => {
  return (
    <Link
      to={to}
      className='relative aspect-[4/5] sm:aspect-[3/2]'>
      <div className='absolute inset-0'>
        <picture>
          <source
            srcSet={imageSrcSet}
            media='(min-width: 480px)'
          />
          <img
            src={imageSrc}
            alt={imageAlt}
            className='size-full object-cover'
          />
        </picture>
      </div>
      <div
        className='absolute inset-0 flex items-center justify-center bg-black/25 duration-300
          hover:bg-transparent'>
        <p
          className='max-w-xs text-center font-cormorant text-md text-white hover:underline
            lg:max-w-none'>
          {text}
        </p>
      </div>
      {children}
    </Link>
  )
}

export default ImageLinkCard