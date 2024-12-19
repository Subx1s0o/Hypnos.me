'use client'

import getProductBySlug from '@/actions/getProductBySlug'
import { Product } from '@/types'
import { useQuery } from '@tanstack/react-query'

import { useEmblaCarouselWithThumbs } from '@/hooks/useEmblaCarouselWithThumbs'

import MainImageList from './components/ImageCarousel/MainImageList'
import ThumbnailList from './components/ImageCarousel/ThubnailList'

interface CurrentProductSectionProps {
  slug: string
}

export default function CurrentProductSection({
  slug
}: CurrentProductSectionProps) {
  const { data, error } = useQuery<Product>({
    queryKey: ['products', slug],
    staleTime: 1000 * 60 * 60 * 24 * 3,
    queryFn: async () => await getProductBySlug(slug)
  })

  const { emblaMainRef, emblaThumbsRef, selectedIndex, onThumbClick } =
    useEmblaCarouselWithThumbs()

  if (error) return <p>Error loading product data.</p>

  return (
    <section className='px-3'>
      <article
        className='mb-4 overflow-hidden'
        ref={emblaMainRef}>
        {data?.media && <MainImageList media={data.media} />}
      </article>
      <div ref={emblaThumbsRef}>
        {data?.media && (
          <ThumbnailList
            media={data.media}
            selectedIndex={selectedIndex}
            onThumbClick={onThumbClick}
          />
        )}
      </div>
    </section>
  )
}
