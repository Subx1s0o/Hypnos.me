import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function useEmblaCarouselWithThumbs() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    dragFree: false,
    loop: true,
    containScroll: 'trimSnaps'
  })
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: false
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (emblaMainApi && emblaThumbsApi) {
        emblaMainApi.scrollTo(index)
      }
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (emblaMainApi && emblaThumbsApi) {
      const snapIndex = emblaMainApi.selectedScrollSnap()
      if (snapIndex !== selectedIndex) {
        setSelectedIndex(snapIndex)
        emblaThumbsApi.scrollTo(snapIndex)
      }
    }
  }, [emblaMainApi, emblaThumbsApi, selectedIndex])

  useEffect(() => {
    if (emblaMainApi) {
      onSelect()
      emblaMainApi.on('select', onSelect).on('reInit', onSelect)

      return () => {
        emblaMainApi.off('select', onSelect).off('reInit', onSelect)
      }
    }
  }, [emblaMainApi, onSelect])

  return {
    emblaMainRef,
    emblaThumbsRef,
    selectedIndex,
    onThumbClick
  }
}
