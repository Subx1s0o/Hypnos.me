import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'

export default function ProductDescription({ product }: { product?: Product }) {
  console.log(product)
  const finalPrice = product?.discountPercent
    ? product?.price - (product?.price * product?.discountPercent) / 100
    : product?.price

  return (
    <div>
      <h1 className='mb-8 font-cormorant text-smd font-medium smd:text-lg xxl:text-xl'>
        {product?.title}
      </h1>
      <hr className='mb-6 border-brown' />
      {!product?.discountPercent ? (
        <h2 className='mb-16'>{formatPrice(product?.price)}</h2>
      ) : (
        <div className='mb-16 flex items-center gap-3'>
          <h3 className='text-base-big text-grey-200 line-through'>
            {formatPrice(product.price)}$
          </h3>
          <h2 className='text-smd'>{formatPrice(finalPrice)}$</h2>
        </div>
      )}
      <p className='mb-8 text-sm text-grey-400'>{product?.description}</p>
    </div>
  )
}
