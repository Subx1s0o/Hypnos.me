import { cn } from '@/lib/cn'
import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

import ImageWithFallback from './ImageWithFallback'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    title,
    slug,
    discountPercent,
    price,
    category,
    media: {
      main: { url, status }
    }
  } = product

  const finalPrice = discountPercent
    ? price - (price * discountPercent) / 100
    : price

  return (
    <li className='aspect-square flex-1 pl-4 sm:flex-1/2 lg:flex-1/4'>
      <Link href={`catalogue/${category}/${slug}`}>
        <div className='relative mb-3 max-h-[460px] bg-grey-light'>
          {status !== 'rejected' ? (
            <ImageWithFallback
              alt={title}
              src={url}
              width={308}
              height={230}
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <Image
              alt={title}
              src='/images/products/decorative/fallback.png'
              width={308}
              height={230}
              style={{ width: '100%', height: 'auto' }}
            />
          )}

          {discountPercent && (
            <span
              className='absolute bottom-[14px] left-[14px] rounded-full bg-black px-5 py-[10px]
                text-white'>
              -{discountPercent}%
            </span>
          )}
        </div>
        <h3 className='mb-2 text-smd font-medium text-black'>{title}</h3>
        <div className='flex gap-2'>
          <p
            className={cn('text-sm text-brown', {
              'text-sm text-grey-200 line-through': discountPercent
            })}>
            ${formatPrice(price)}
          </p>
          {discountPercent && (
            <p className='text-sm font-semibold text-brown'>
              ${formatPrice(finalPrice)}
            </p>
          )}
        </div>
      </Link>
    </li>
  )
}
