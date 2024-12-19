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
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    const snapIndex = emblaMainApi.selectedScrollSnap()
    setSelectedIndex(snapIndex)
    emblaThumbsApi.scrollTo(snapIndex)
  }, [emblaMainApi, emblaThumbsApi])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return {
    emblaMainRef,
    emblaThumbsRef,
    selectedIndex,
    onThumbClick
  }
}
