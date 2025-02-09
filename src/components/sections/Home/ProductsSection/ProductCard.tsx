import useCart from '@/app/(store)/store'
import { cn } from '@/lib/cn'
import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

import BlackBadge from '@/components/ui/BlackBadge'
import Icon from '@/components/ui/Icon'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

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
  const setProduct = useCart(state => state.setProduct)
  const finalPrice = discountPercent
    ? price - (price * discountPercent) / 100
    : price

  const handlerProductClick = () => {
    const newProduct = {
      title,
      slug,
      price,
      discountPercent,
      category
    }
    setProduct({ newProduct })
  }

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
      <button onClick={handlerProductClick}>
        <Icon
          w={16}
          h={16}
          id='icon-cart'
        />
      </button>
    </li>
  )
}
