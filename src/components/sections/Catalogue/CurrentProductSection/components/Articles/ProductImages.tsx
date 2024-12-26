import { MediaObject } from '@/types'

import { useEmblaCarouselWithThumbs } from '@/hooks/useEmblaCarouselWithThumbs'

import MainImageList from '../ImageCarousels/Main/MainImageList'
import ThumbnailList from '../ImageCarousels/Thumb/ThubnailList'

export default function ImagesArticle({ media }: { media?: MediaObject }) {
  const { emblaMainRef, emblaThumbsRef, selectedIndex, onThumbClick } =
    useEmblaCarouselWithThumbs()

  return (
    <div className='w-full overflow-hidden rounded-md border p-2 lg:max-w-screen-sm'>
      <div
        className='mb-4 overflow-hidden'
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
