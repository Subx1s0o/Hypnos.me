import useWishlist from '@/store/wishlist/wishlist'
import { Product } from '@/types/product-type'
import Image from 'next/image'

import BlackBadge from '@/components/ui/BlackBadge'
import Icon from '@/components/ui/Icon'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

interface ProductCardProps {
  products: Product[]
}
export default function Wishlist({ products }: ProductCardProps) {
  const { removeFromWishlist } = useWishlist()

  return (
    <ul className='flex max-h-96 grow flex-col gap-4 overflow-y-scroll pr-4'>
      {products.map((product: Product) => {
        const { id, title, price, media, discountPercent } = product
        const { main } = media

        return (
          <li
            key={id}
            className='border-b-2 border-grey-200'>
            <div className='relative flex pb-4'>
              {main.status !== 'rejected' && main.url ? (
                <ImageWithFallback
                  alt={title}
                  src={main.url}
                  className='object-cover'
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  alt={title}
                  src='/images/products/decorative/fallback.avif'
                  className='object-cover'
                  width={100}
                  height={100}
                />
              )}

              <div className='flex w-full flex-col justify-between'>
                <h3
                  className='align-middle font-manrope text-sm font-semibold not-italic tracking-tight
                    text-black'>
                  {title}
                  <button onClick={() => removeFromWishlist({ id })}>
                    <Icon
                      className='absolute right-0 top-0'
                      id='icon-x-altx-alt'
                      h={12}
                      w={12}
                    />
                  </button>
                </h3>
                <div className='flex justify-between'>
                  <p className='font-manrope text-sm font-semibold not-italic tracking-tight text-black'>
                    {price} $
                  </p>
                  {discountPercent && (
                    <BlackBadge className='flex max-w-20 items-center'>
                      -{discountPercent}%
                    </BlackBadge>
                  )}
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
