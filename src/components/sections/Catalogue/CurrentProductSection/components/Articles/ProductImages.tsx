import { MediaObject } from '@/types'

import { useEmblaCarouselWithThumbs } from '@/hooks/useEmblaCarouselWithThumbs'

import MainImageList from '../ImageCarousel/MainImageList'
import ThumbnailList from '../ImageCarousel/ThubnailList'

export default function ImagesArticle({ media }: { media?: MediaObject }) {
  const { emblaMainRef, emblaThumbsRef, selectedIndex, onThumbClick } =
    useEmblaCarouselWithThumbs()

  return (
    <div>
      <div className='overflow-hidden rounded-md border p-2 lg:max-w-screen-sm'>
        <div
          className='mb-4 overflow-hidden'
          ref={emblaMainRef}>
          {media && <MainImageList media={media} />}
        </div>
        <div ref={emblaThumbsRef}>
          {media && (
            <ThumbnailList
              media={media}
              selectedIndex={selectedIndex}
              onThumbClick={onThumbClick}
            />
          )}
        </div>
      </div>
    </div>
  )
}
