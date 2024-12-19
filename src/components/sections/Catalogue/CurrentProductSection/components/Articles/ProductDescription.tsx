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
        <h2 className=''>{product?.price}</h2>
      ) : (
        <div>
          <h3>{product.price}</h3>
          <h2>{finalPrice}</h2>
        </div>
      )}
    </div>
  )
}
