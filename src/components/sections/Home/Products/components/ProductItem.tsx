import { cn } from '@/lib/cn'
import Image from 'next/image'

interface ProductItemProps {
  products: any
}

export default function ProductItem({ products }: ProductItemProps) {
  return (
    <div>
      <div className='mb-3 bg-light-grey py-[115px]'>
        {products.media.main.status !== 'rejected' ? (
          <Image
            alt={products.title}
            src={products.media.main.url}
            width={308}
            height={230}
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <div>No image</div>
        )}
      </div>
      <h3 className='mb-2 text-black'>{products.title}</h3>
      <p
        className={cn('text-xs-heavy text-brown', {
          'text-xs text-light-grey line-through': products.discount
        })}>
        ${products.price}
      </p>
    </div>
  )
}
