import useCart from '@/store/cart/cart'
import { Product } from '@/types/product-type'
import Image from 'next/image'

import BlackBadge from '@/components/ui/BlackBadge'
import Icon from '@/components/ui/Icon'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

interface ProductCardProps {
  products: Product[]
}
export default function CartItems({ products }: ProductCardProps) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

  return (
    // <div className='h-[348x]'>
    <ul className='flex flex-col gap-4 overflow-y-scroll'>
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
        const finalPrice = discountPercent
          ? price - (price * discountPercent) / 100
          : price

        return (
          <li
            key={itemId}
            className='h-max w-full rounded-sm border border-grey-200'>
            <div className='relative flex h-[104px]'>
              {main.status !== 'rejected' && main.url ? (
                <ImageWithFallback
                  alt={title}
                  src={main.url}
                  className='bg-grey-200 object-cover'
                  width={102}
                  height={102}
                />
              ) : (
                <Image
                  alt={title}
                  src='/images/products/decorative/fallback.avif'
                  className='bg-grey-200 object-cover'
                  width={102}
                  height={102}
                />
              )}

              <div className='flex w-full flex-col justify-between p-4'>
                <div>
                  <h3
                    className='align-middle font-manrope text-sm font-semibold not-italic tracking-tight
                      text-black'>
                    {title}{' '}
                  </h3>
                  <button onClick={() => removeFromCart({ itemId })}>
                    <Icon
                      className='absolute right-0 top-0'
                      id='icon-x-altx-alt'
                      h={12}
                      w={12}
                    />
                  </button>
                </div>
                <div className='flex justify-between'>
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
                    <div className='flex border-spacing-slide-small gap-1 border-2'>
                      <button onClick={() => decreaseQuantity({ itemId })}>
                        -
                      </button>
                      {cartCount}
                      <button
                        onClick={() => {
                          increaseQuantity({ itemId })
                        }}>
                        +
                      </button>
                    </div>
                    {discountPercent && (
                      <BlackBadge className='flex max-w-20 items-center px-3 py-0.5'>
                        -{discountPercent}%
                      </BlackBadge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
