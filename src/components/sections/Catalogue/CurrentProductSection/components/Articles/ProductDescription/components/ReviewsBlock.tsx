'use client'

import useEmblaCarousel from 'embla-carousel-react'

export default function ReviewsBlock({
  reviews,
  isReviewsLoading,
  isReviewsError
}: {
  reviews?: any[]
  isReviewsLoading: boolean
  isReviewsError: boolean
}) {
  console.log(reviews)
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start'
  })

  if (isReviewsError) {
    return <div>Error</div>
  }

  return (
    <div className='grid'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-base-big'>Reviews</h3>
        <p className='text-base'>{reviews?.length ?? 0} review</p>
      </div>
      {!isReviewsLoading ? (
        <div
          ref={emblaRef}
          className='h-[118px] overflow-hidden'>
          <ul className='flex gap-2'>
            {reviews?.map(review => (
              <li
                className='flex-1 border p-4 md:h-[118px]'
                key={review.id}>
                <div className='mb-[6px] flex w-full items-center justify-between'>
                  <h4>{review.name}</h4>
                  <p>{review.rate}</p>
                </div>
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='flex h-[154px] w-full items-center justify-center'>
          <p>loading...</p>
        </div>
      )}
    </div>
  )
}
