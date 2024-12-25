'use client'

import { ComponentProps, useEffect, useState } from 'react'
import Image from 'next/image'

type ImageWithFallbackProps = ComponentProps<typeof Image> & {
  alt: string
  src: string
  width?: number
  height?: number
}

export default function ImageWithFallback({
  alt,
  src,
  width,
  height,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setError(false)
  }, [src])

  const handleError = () => {
    setError(true)
  }

  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      onError={handleError}
      src={error ? '/images/products/decorative/fallback.avif' : src}
      {...props}
    />
  )
}
