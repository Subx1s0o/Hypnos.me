import { Product } from '@/types'
import Image from 'next/image'

import BlackBadge from '@/components/ui/BlackBadge'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

import Rating from "../Raiting"

export default function ItemInModal({
  title,
  media,
  price,
  discountPercent
}: Product) {
  const finalPrice = discountPercent
    ? price - (price * discountPercent) / 100
    : price

  return (
    <div className='h-max w-full rounded-sm border border-grey-200 md:m-auto md:w-[490px]'>
      <div className='relative flex'>
        {media.main.status !== 'rejected' && media.main.url ? (
          <ImageWithFallback
            alt={title}
            src={media.main.url}
            className='bg-grey-200 object-cover'
            width={102}
            height={102}
          />
        ) : (
          <Image
            alt={title}
            src='/images/products/decorative/fallback.avif'
            className='object-cover'
            width={102}
            height={102}
          />
        )}

        <div className='flex w-full flex-col justify-between p-[18px]'>
          <h3
            className='align-middle font-manrope text-sm font-semibold not-italic tracking-tight
              text-black'>
            {title}
          </h3>
          <Rating initialRating={2} />
          <div className='flex items-center justify-between'>
            {discountPercent ? (
              <div className='flex items-center'>
                <p
                  className='mr-2 font-manrope text-xs font-semibold not-italic tracking-tight
                    text-grey-400/55 line-through'>
                  ${price}
                </p>
                <h2 className='font-manrope text-sm font-semibold not-italic tracking-tight text-black'>
                  ${finalPrice}
                </h2>
              </div>
            ) : (
              <p className='font-manrope text-sm font-semibold not-italic tracking-tight text-black'>
                ${price}
              </p>
            )}

            {discountPercent && (
              <BlackBadge className='flex max-w-20 items-center px-3 py-0.5'>
                -{discountPercent}%
              </BlackBadge>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
