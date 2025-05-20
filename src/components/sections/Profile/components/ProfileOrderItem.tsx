import { formatPrice } from '@/lib/formatPrice'
import { Order } from '@/types/order'
import Image from 'next/image'

export default function ProfileOrderItem({ data }: { data: Order[] }) {
  function currentPrice(order: Order): string | null {
    if (order.discountPercent) {
      const finalPrice: number =
        order.price - (order.price * order.discountPercent) / 100

      return formatPrice(finalPrice)
    }

    return formatPrice(order.price)
  }

  return (
    <>
      {data.map((order, index) => (
        <li
          className='flex flex-col gap-3 md:gap-[14px]'
          key={order.id}>
          <div className='flex gap-3'>
            <div className='h-[104px] w-[68px] rounded-[2px]'>
              <Image
                src={order.media.main.url}
                alt={order.title}
                width={68}
                height={104}
                className='size-full rounded-[2px] object-cover'
              />
            </div>
            <div className='flex w-full flex-col justify-between md:justify-normal md:gap-3'>
              <div className='flex justify-between'>
                <h3 className='text-sm font-semibold leading-[130%] md:text-base md:font-semibold'>
                  {order.title}
                </h3>
                <p className='text-xs md:text-base'>{order.purchaseDate}</p>
              </div>

              {!order.discountPercent ? (
                <div className='flex items-center gap-2 md:gap-3'>
                  <p className='text-sm text-grey-400 md:text-base'>
                    {currentPrice(order)}$
                  </p>
                  {order.isPriceForPair && (
                    <p className='text-xs text-grey-400/50'>(price for pair)</p>
                  )}
                </div>
              ) : (
                <div className='flex flex-col'>
                  <p className='text-xs text-grey-400/50 line-through'>
                    {formatPrice(order.price)}$
                  </p>
                  <div className='flex justify-between md:flex-col md:justify-normal md:gap-[11px]'>
                    <div className='flex items-center gap-2 md:gap-3'>
                      <p className='text-sm text-grey-400 md:text-base'>
                        {currentPrice(order)}$
                      </p>
                      {order.isPriceForPair && (
                        <p className='text-xs text-grey-400/50'>
                          (price for pair)
                        </p>
                      )}
                    </div>
                    <p
                      className='w-[48px] rounded-[100px] bg-grey-normal py-[4px] text-center text-xs
                        font-extrabold leading-[100%] text-white'>
                      -{order.discountPercent}%
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {index < data.length - 1 && <hr className='w-full' />}
        </li>
      ))}
    </>
  )
}
