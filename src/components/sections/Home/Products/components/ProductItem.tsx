import { cn } from '@/lib/cn'
import Image from 'next/image'

interface ProductItemProps {
  product: any
}

export default function ProductItem({ product}: ProductItemProps) {
  return (
    <li className='flex-1 sm:flex-1/2 lg:flex-1/4 pl-4'>
      <div className='mb-3 bg-light-grey py-[115px] max-h-[460px]'>
        {product.media.main.status !== 'rejected' ? (
          <Image
            alt={product.title}
            src={product.media.main.url}
            width={308}
            height={230}
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <div>No image</div>
        )}
        {<span className='bg-black text-white'></span>}
      </div>
      <h3 className='mb-2 text-black'>{product.title}</h3>
      <p
        className={cn('text-xs-heavy text-brown', {
          'text-xs text-light-grey line-through': product.discountPrice
        })}>
        ${product.price}
      </p>
    </li >
  )
}
