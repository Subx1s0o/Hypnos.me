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
      if (emblaMainApi) {
        emblaMainApi.scrollTo(index)
      }
    },
    [emblaMainApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return

    const snapIndex = emblaMainApi.selectedScrollSnap()
    if (snapIndex !== selectedIndex) {
      setSelectedIndex(snapIndex)
      if (emblaThumbsApi) {
        emblaThumbsApi.scrollTo(snapIndex)
      }
    }
  }, [emblaMainApi, emblaThumbsApi, selectedIndex])

  useEffect(() => {
    if (emblaMainApi) {
      emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }
    return () => {
      if (emblaMainApi) {
        emblaMainApi.off('select', onSelect).off('reInit', onSelect)
      }
    }
  }, [emblaMainApi, onSelect])

  useEffect(() => {
    if (emblaThumbsApi) {
      emblaThumbsApi.scrollTo(selectedIndex)
    }
  }, [selectedIndex, emblaThumbsApi])

  return {
    emblaMainRef,
    emblaThumbsRef,
    selectedIndex,
    onThumbClick
  }
}
