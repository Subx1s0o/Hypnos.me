'use client'

import { useState } from 'react'
import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'
import { notFound } from 'next/navigation'

import Icon from '@/components/ui/Icon'

import ButtonsBlock from './components/ButtonsBlock'
import ProductDescriptionAccordion from './components/ProductDescriptionAccordion/ProductDescriptionAccordeon'
import RadioBtnGroup from './components/RadioBtnGroup'
import RatingStars from './components/RatingStars'
import SizeSelector from './components/SizeSelector'

export default function ProductDescription({ product }: { product?: Product }) {
  const defaultSize: string =
    product?.sizeDetails?.[0]?.toString() ?? 'The item is out of stock'
  const [selectedSize, setSelectedSize] = useState(defaultSize)
  // console.log(product)

  if (!product) return notFound()

  const finalPrice = product.discountPercent
    ? product.price - (product.price * product.discountPercent) / 100
    : product.price
  const sizes = product.sizeDetails ?? []

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value)
  }

  return (
    <div className='flex flex-col gap-3'>
      <ul className='mb-1 flex gap-2'>
        {product.discountPercent && (
          <li className='rounded-[100px] bg-black px-3 py-[6px] text-sm font-extrabold text-white'>
            -{product?.discountPercent}%
          </li>
        )}
        <li
          className='rounded-[32px] bg-grey-light px-3 py-2 text-xs font-semibold capitalize
            text-grey-normal'>
          {product.category}
        </li>
        {product.isPriceForPair && (
          <li
            className='rounded-[32px] border border-grey-200 px-3 py-2 text-xs font-semibold
              text-grey-normal'>
            Price per pair
          </li>
        )}
      </ul>
      <h1 className='font-cormorant text-base-big sm:text-smd lg:text-md xxl:text-lg'>
        {product.title}
      </h1>
      <hr className='border-brown-accent mb-1' />
      <div className='flex flex-wrap gap-y-3'>
        {!product.discountPercent ? (
          <h2 className='grow text-smd font-medium text-black'>
            &#36; {formatPrice(product.price)}
          </h2>
        ) : (
          <div className='flex grow items-center gap-3'>
            <h3 className='text-grey-hover text-base-big line-through'>
              &#36;{formatPrice(product.price)}
            </h3>
            <h2 className='text-smd font-medium text-black'>
              &#36; {formatPrice(finalPrice)}
            </h2>
          </div>
        )}
        <button className='flex items-center justify-center'>
          <div className='relative h-6 w-7'>
            <Icon
              id='icon-message-chat'
              w={24}
              h={24}
              className=''
            />
            <p
              className='absolute right-0 top-0 flex size-2 items-center justify-center rounded-full
                bg-grey-400 text-[5px] font-bold text-white'>
              3
            </p>
          </div>
        </button>
        <RatingStars rating={product?.rating} />
      </div>
      <p className='mb-1 text-sm text-grey-400'>{product.description}</p>
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
