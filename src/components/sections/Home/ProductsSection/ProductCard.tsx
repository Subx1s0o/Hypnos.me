import { cn } from '@/lib/cn'
import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

<<<<<<< HEAD:src/components/sections/Home/Products/components/ProductItem.tsx
import BlackBadge from '@/components/ui/BlackBadge'

interface ProductItemProps {
=======
import ImageWithFallback from '@/components/ui/ImageWithFallback'

interface ProductCardProps {
>>>>>>> 8c49285936392121ebe198f6ddb083bb6d798f90:src/components/sections/Home/ProductsSection/ProductCard.tsx
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
          <div className='relative aspect-[1]'>
            {status !== 'rejected' && url ? (
              <ImageWithFallback
                alt={title}
                src={url}
                fill
                className='object-cover'
              />
            ) : (
              <Image
                alt={title}
                src='/images/products/decorative/fallback.avif'
                fill
                className='object-cover'
              />
            )}
          </div>

          {discountPercent && (
            <BlackBadge className='absolute bottom-[14px] left-[14px] px-5 py-[10px]'>
              -{discountPercent}%
            </BlackBadge>
          )}
        </div>
        <h3 className='mb-2 text-base-big font-medium text-black'>{title}</h3>
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
