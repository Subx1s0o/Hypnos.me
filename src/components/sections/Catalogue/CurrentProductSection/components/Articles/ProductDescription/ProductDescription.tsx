import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'

import AddToCartButton from './components/AddToCartButton'
import ProductDescriptionAccordion from './components/ProductDescriptionAccordion/ProductDescriptionAccordeon'

export default function ProductDescription({ product }: { product?: Product }) {
  if (!product) return null
  const finalPrice = product.discountPercent
    ? product.price - (product.price * product.discountPercent) / 100
    : product.price

  return (
    <div>
      <h1 className='text-base-big mb-4 font-cormorant font-medium sm:text-smd lg:text-md xxl:text-lg'>
        {product.title}
      </h1>
      <hr className='mb-5 border-brown' />
      {!product.discountPercent ? (
        <h2 className='mb-4'>{formatPrice(product.price)}</h2>
      ) : (
        <div className='mb-6 flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='mb-3 flex items-center gap-3 md:mb-0'>
            <h3 className='text-base-big text-grey-200 line-through'>
              {formatPrice(product.price)}$
            </h3>
            <h2 className='text-smd text-brown'>{formatPrice(finalPrice)}$</h2>
          </div>
          <AddToCartButton />
        </div>
      )}
      <p className='mb-8 text-sm text-grey-400'>{product.description}</p>
      <ProductDescriptionAccordion product={product} />
    </div>
  )
}
