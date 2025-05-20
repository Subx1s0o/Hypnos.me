'use client'

import { useEffect, useState } from 'react'
import formatDate from '@/lib/formatDate'
import { Review } from '@/types/review'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import LeaveReviewForm from '@/components/forms/LeaveReviewForm'
import Icon from '@/components/ui/Icon'

import RatingStars from './RatingStars'

export default function ReviewsBlock({
  slug,
  id,
  reviews,
  isReviewsLoading,
  isReviewsError
}: {
  slug: string
  id: string
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

  console.log(reviews)

  return (
    <div
      id={id}
      className='mb-[120px] grid w-full md:mb-6'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-base-big'>Reviews</h2>
        <p className='text-base'>{reviewsLength} review</p>
      </div>

      {isReviewsLoading ? (
        <div className='flex h-[118px] w-full items-center justify-center md:h-[186px]'>
          <p>loading...</p>
        </div>
      ) : reviewsLength > 0 ? (
        <>
          <div
            ref={emblaRef}
            className='flex flex-col overflow-hidden'>
            <ul className='mb-2 flex gap-2'>
              {reviews?.map(review => (
                <li
                  className='flex h-[118px] flex-1 flex-col gap-[6px] overflow-hidden rounded-[2px] border
                    border-grey-200 p-4 md:h-[186px]'
                  key={review.id}>
                  <div className='flex w-full items-center justify-between'>
                    <h4 className='text-base text-grey-300'>{review.name}</h4>
                    <div className='flex gap-2'>
                      <span className='text-xs text-grey-300'>
                        {formatDate(review.date)}
                      </span>
                      <RatingStars
                        rating={review.rate}
                        starSize={16}
                      />
                    </div>
                  </div>
                  <p className='text-sm text-grey-400'>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>

          {reviewsLength > 1 && (
            <ul className='mb-4 flex h-6 justify-center gap-2'>
              {reviews?.map((_, index) => (
                <li
                  key={index}
                  className='size-3'>
                  <button
                    className={`size-2 rounded-full
                      ${selectedIndex === index ? 'bg-brown-hover' : 'bg-grey-hover'}`}
                    onClick={() => emblaApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div
          className='mb-4 flex h-[118px] flex-col items-center justify-center gap-3 rounded-[2px]
            border border-grey-200 py-4 md:h-[186px]'>
          <p className='text-sm leading-[18px] text-grey-400'>
            No reviews yet, be the first!
          </p>
          <div className='bg-brown-hover flex size-8 items-center justify-center rounded-full'>
            <Icon
              className='rotate-180 text-white'
              id='icon-arrow'
              w={11}
              h={11}
            />
          </div>
        </div>
      )}

      <div className='bg-grey-light p-4'>
        <h3 className='text-base'>Leave a review</h3>
        <LeaveReviewForm slug={slug} />
      </div>
    </div>
  )
}
