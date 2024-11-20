import { cn } from '@/lib/cn'
import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface ProductItemProps {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps) {
  const {
    title,
    discountPercent,
    price,
    media: { main: { url, status } }
  } = product

  const finalPrice = discountPercent
    ? price - (price * discountPercent) / 100
    : price

  return (
    <li className="flex-1 sm:flex-1/2 lg:flex-1/4 pl-4 aspect-square">
      <Link href={`catalog/${title.toLowerCase().split(" ").join("-")}`}>
        <div className="relative mb-3 bg-light-grey max-h-[460px]">
          {status !== 'rejected' ? (
            <Image
              alt={title}
              src={url}
              width={308}
              height={230}
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <div>No image</div>
          )}
          {discountPercent && (
            <span className="absolute bottom-[14px] left-[14px] bg-black py-[10px] px-5 text-white rounded-full">
              -{discountPercent}%
            </span>
          )}
        </div>
        <h3 className="text-smd font-medium mb-2 text-black">{title}</h3>
        <div className='flex gap-2'>
          <p
            className={cn('text-sm text-brown', {
              'text-sm text-grey-200 line-through': discountPercent
            })}>
            ${price}
          </p>
          {discountPercent && (
            <p className="text-sm font-semibold text-brown">
             ${finalPrice.toFixed(2)}
            </p>
          )}
        </div>
      </Link>
    </li>
  )
}
