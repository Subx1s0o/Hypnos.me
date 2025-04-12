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
          className='flex flex-col gap-3'
          key={order.id}>
          <div className='flex gap-3'>
            <div className='h-[104px] w-[68px] rounded-[2px]'>
              <Image
                src={order.media.main.url}
                alt={order.title}
                width={68}
                height={104}
                className='h-full w-full rounded-[2px] object-cover'
              />
            </div>
            <div className='flex flex-col justify-between'>
              <h3 className='text-sm font-semibold leading-[130%]'>
                {order.title}
              </h3>
              <div className='flex items-end gap-2'>
                {!order.discountPercent ? (
                  <p className='text-sm text-grey-400'>
                    {currentPrice(order)}$
                  </p>
                ) : (
                  <div className='flex flex-col'>
                    <p className='text-xs text-grey-400/50 line-through'>
                      {formatPrice(order.price)}$
                    </p>
                    <p className='text-sm text-grey-400'>
                      {currentPrice(order)}$
                    </p>
                  </div>
                )}
                {order.isPriceForPair && (
                  <p className='text-xs text-grey-400/50'>(price for pair)</p>
                )}
              </div>
            </div>
            <div className='flex flex-col justify-between'>
              <p className='text-xs'>{order.purchaseDate}</p>
              {order.discountPercent && (
                <p
                  className='rounded-[100px] bg-grey-normal py-[4px] text-center text-xs font-extrabold
                    leading-[100%] text-white'>
                  -{order.discountPercent}%
                </p>
              )}
            </div>
          </div>
          {index < data.length - 1 && <hr className='w-full' />}
        </li>
      ))}
    </>
  )
}
