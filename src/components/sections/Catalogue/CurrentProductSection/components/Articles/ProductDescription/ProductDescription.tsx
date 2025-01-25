'use client'

import { useEffect, useState } from 'react'
import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'

import ButtonsBlock from './components/ButtonsBlock'
import ProductDescriptionAccordion from './components/ProductDescriptionAccordion/ProductDescriptionAccordeon'
import RadioBtnGroup from './components/RadioBtnGroup'
import SizeSelector from './components/SizeSelector'

export default function ProductDescription({ product }: { product?: Product }) {
  const [selectedSize, setSelectedSize] = useState<number | null>(() => {
    const storedSize = window.localStorage.getItem('selectedSize')

    return storedSize ? JSON.parse(storedSize) : product?.sizeDetails[0]
  })
  useEffect(() => {
    window.localStorage.setItem('selectedSize', JSON.stringify(selectedSize))
  }, [selectedSize])

  if (!product) return null
  const finalPrice = product.discountPercent
    ? product.price - (product.price * product.discountPercent) / 100
    : product.price
  const sizes = product.sizeDetails

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(Number(event.target.value))
  }

  return (
    <div>
      <h1 className='mb-2 font-cormorant text-base-big font-medium sm:text-smd lg:text-md xxl:text-lg'>
        {product.title}
      </h1>
      <hr className='mb-2 border-brown' />
      {!product.discountPercent ? (
        <h2 className='mb-2'>{formatPrice(product.price)}&#36;</h2>
      ) : (
        <div className='mb-2 flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className='mb-3 flex items-center gap-3 md:mb-0'>
            <h3 className='text-base-big text-grey-200 line-through'>
              {formatPrice(product.price)}
            </h3>
            <h2 className='text-smd text-brown'>{formatPrice(finalPrice)}$</h2>
          </div>
        </div>
      )}
      <p className='mb-6 text-sm text-grey-400'>{product.description}</p>
      <RadioBtnGroup />
      <SizeSelector
        sizes={sizes}
        handleSizeChange={handleSizeChange}
        selectedSize={selectedSize}
      />
      <ButtonsBlock />
      <ProductDescriptionAccordion product={product} />
    </div>
  )
}
