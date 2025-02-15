import useCart from '@/app/(store)/store'
import { Product } from '@/types/product-type'
import Image from 'next/image'

import BlackBadge from '@/components/ui/BlackBadge'
import Icon from '@/components/ui/Icon'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

interface ProductCardProps {
  products: Product[]
}
export default function CartItems({ products }: ProductCardProps) {
  const removeFromCart = useCart(state => state.removeFromCart)
  const increment = useCart(state => state.increaseQuantity)
  const decrement = useCart(state => state.decreaseQuantity)

  return (
    <ul className='flex flex-col gap-4 overflow-y-scroll pr-4'>
      {products.map((product: Product) => {
        const {
          id: itemId,
          title,
          price,
          media,
          discountPercent,
          cartCount
        } = product
        const { main } = media

        return (
          <li
            key={itemId}
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
                  <button onClick={() => removeFromCart({ itemId })}>
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
                  <div className='flex border-spacing-slide-small gap-1 border-2'>
                    <button onClick={() => decrement({ itemId })}>-</button>
                    {cartCount}
                    <button
                      onClick={() => {
                        increment({ itemId })
                      }}>
                      +
                    </button>
                  </div>
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
