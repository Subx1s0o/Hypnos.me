import { MediaObject } from '@/types'

import { useEmblaCarouselWithThumbs } from '@/hooks/useEmblaCarouselWithThumbs'

import MainImageList from './components/MainCarousel/MainImageList'
import ThumbnailList from './components/ThumbCarousel/ThubnailList'

export default function ImagesArticle({ media }: { media?: MediaObject }) {
  const { emblaMainRef, emblaThumbsRef, selectedIndex, onThumbClick } =
    useEmblaCarouselWithThumbs()

  return (
    <div
      className='flex w-full flex-col items-stretch justify-between overflow-hidden rounded-[2px]
        border p-2 md:min-h-[506px]'>
      <div
        className='overflow-hidden'
        ref={emblaMainRef}>
        {media && <MainImageList media={media} />}
      </div>

      <div
        className='flex overflow-hidden'
        ref={emblaThumbsRef}>
        {media && (
          <ThumbnailList
            media={media}
            selectedIndex={selectedIndex}
            onThumbClick={onThumbClick}
          />
        )}
      </div>
    </div>
  )
}
