import { Product } from '@/types'

export default function ProductDescription({ product }: { product?: Product }) {
  console.log(product)
  const finalPrice = product?.discountPercent
    ? product?.price - (product?.price * product?.discountPercent) / 100
    : product?.price

  return (
    <div>
      <h1 className='text-slg mb-8 font-cormorant font-medium md:text-xl'>
        {product?.title}
      </h1>
      <hr className='mb-6 border-brown' />
      {!product?.discountPercent ? (
        <h3 className=''>{product?.price}</h3>
      ) : (
        <div>
          <h3>{product.price}</h3>
          <h3>{finalPrice}</h3>
        </div>
      )}
    </div>
  )
}
