'use client'

import { useEffect, useState } from 'react'
import { Review } from '@/types/review'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import LeaveReviewForm from '@/components/forms/LeaveReviewForm'
import Icon from '@/components/ui/Icon'

export default function ReviewsBlock({
  reviews,
  isReviewsLoading,
  isReviewsError
}: {
  reviews?: Review[]
  isReviewsLoading: boolean
  isReviewsError: boolean
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start'
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 6000
      })
    ]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return () => {}

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)

    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  if (isReviewsError) return <div>Error</div>

  const reviewsLength = reviews?.length ?? 0

  return (
    <div className='grid'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-base-big'>Reviews</h3>
        <p className='text-base'>{reviewsLength} review</p>
      </div>

      {isReviewsLoading ? (
        <div className='flex h-[154px] w-full items-center justify-center'>
          <p>loading...</p>
        </div>
      ) : (
        <>
          <div
            ref={emblaRef}
            className='flex flex-col overflow-hidden'>
            <ul className='mb-2 flex gap-2'>
              {reviews?.map(review => (
                <li
                  className='h-[154px] flex-1 border p-4 md:h-[118px]'
                  key={review.id}>
                  <div className='mb-[6px] flex w-full items-center justify-between'>
                    <h4 className='text-base text-grey-300'>{review.name}</h4>
                    <div className='flex gap-1'>
                      <span className='text-xs text-grey-300'>
                        {review.date}
                      </span>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Icon
                          key={index}
                          id={
                            index < review.rate ? 'icon-star-full' : 'icon-star'
                          }
                          w={18}
                          h={18}
                          className='stroke-2 text-brown-accent'
                        />
                      ))}
                    </div>
                  </div>
                  <p className='text-sm text-grey-400'>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className='mb-4 flex h-6 justify-center gap-2'>
            {reviews?.map((_, index) => (
              <div
                key={index}
                className='size-3'>
                <button
                  className={`size-2 rounded-full
                    ${selectedIndex === index ? 'bg-brown-hover' : 'bg-grey-hover'}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {reviewsLength === 0 && (
        <div className='flex items-center justify-center'>
          <p className='text-sm text-grey-400'>No reviews yet</p>
        </div>
      )}

      <div className='bg-grey-200 p-4'>
        <h3 className='text-base'>Leave a review</h3>
        <LeaveReviewForm />
      </div>
    </div>
  )
}
