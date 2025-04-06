import { cn } from '@/lib/cn'
import { formatPrice } from '@/lib/formatPrice'
import useCart from '@/store/cart/cart'
import useWishlist from '@/store/wishlist/wishlist'
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
    id,
    title,
    slug,
    discountPercent,
    price,
    category,
    media: {
      main: { url, status }
    }
  } = product
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist()
  const { addToCart, cart } = useCart()
  const finalPrice = discountPercent
    ? price - (price * discountPercent) / 100
    : price
  const inCart: boolean = cart.some(item => item.id === id)
  const isLiked: boolean = wishlist.some(item => item.id === id)
  const handlerProductClick = (e: React.MouseEvent) => {
    e.preventDefault()

    const newProduct: Product = {
      id,
      title,
      price,
      discountPercent,
      media: {
        main: { url, status }
      }
    }

    addToCart(newProduct)
  }
  const handlerProductClickLike = (e: React.MouseEvent) => {
    e.preventDefault()
    const newProduct: Product = {
      id,
      title,
      price,
      category,
      slug,
      discountPercent,
      media: {
        main: { url, status }
      }
    }

    if (isLiked) {
      removeFromWishlist({ id: newProduct.id })
    } else {
      addToWishlist(newProduct)
    }
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

        <h3 className='mb-2 min-h-12 text-base-big font-medium text-black'>
          {title}
        </h3>
        <div className='flex justify-between'>
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
        </div>

        <div className='mt-3 flex justify-center gap-2'>
          <button
            className='grow rounded-sm bg-black px-6 py-3 text-white hover:bg-black-hover'
            onClick={handlerProductClick}>
            {inCart ? (
              <span className='flex items-center justify-center gap-2'>
                <Icon
                  w={16}
                  h={16}
                  id='icon-check'
                />
                In cart
              </span>
            ) : (
              'Add to cart'
            )}
          </button>
          <button
            onClick={handlerProductClickLike}
            className='rounded-sm bg-black px-4 py-3 text-white'>
            {isLiked ? (
              <Icon
                className='stroke-brown text-smd text-brown'
                w={16}
                h={16}
                id='icon-heart-filled'
              />
            ) : (
              <Icon
                className='text-white hover:bg-black-hover'
                w={16}
                h={16}
                id='icon-heart'
              />
            )}
          </button>
        </div>
      </Link>
    </li>
  )
}
