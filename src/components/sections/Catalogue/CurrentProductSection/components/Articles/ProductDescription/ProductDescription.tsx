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

export default function ProductDescription({
  product,
  reviews
}: {
  product?: Product
  reviews: number | undefined
}) {
  const defaultSize: string =
    product?.sizeDetails?.[0]?.toString() ?? 'The item is out of stock'
  const [selectedSize, setSelectedSize] = useState(defaultSize)

  if (!product) return notFound()

  const finalPrice = product.discountPercent
    ? product.price - (product.price * product.discountPercent) / 100
    : product.price
  const sizes = product.sizeDetails ?? []

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value)
  }

  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('reviewsBlock')
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='flex flex-col gap-3 md:gap-2'>
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
      <h1
        className='font-cormorant text-base-big sm:text-smd smd:font-bold smd:leading-[40px]
          lg:text-md xxl:text-lg'>
        {product.title}
      </h1>
      <hr className='mb-1 border-brown-accent' />
      <div className='flex flex-wrap gap-y-3 lg:flex-nowrap lg:items-center lg:justify-between'>
        {!product.discountPercent ? (
          <h2 className='grow text-smd font-medium text-black lg:order-1 lg:grow-0'>
            &#36; {formatPrice(product.price)}
          </h2>
        ) : (
          <div className='flex grow items-center gap-3 lg:order-1 lg:grow-0'>
            <h3 className='text-base-big text-grey-hover line-through'>
              &#36;{formatPrice(product.price)}
            </h3>
            <h2 className='text-smd font-medium text-black'>
              &#36; {formatPrice(finalPrice)}
            </h2>
          </div>
        )}
        <button
          onClick={scrollToReviews}
          className='flex h-11 w-12 shrink-0 items-center justify-center lg:order-3'>
          <div className='relative flex h-6 w-7 items-center justify-center'>
            <Icon
              id='icon-message-chat'
              w={30}
              h={30}
              className=''
            />
            <p
              className='absolute -right-1 -top-1 flex size-3 items-center justify-center rounded-full
                bg-grey-400 text-[5px] font-bold text-white'>
              {reviews ? reviews : 0}
            </p>
          </div>
        </button>
        <div className='w-full grow lg:order-2 lg:w-[120px] lg:grow-0'>
          <RatingStars
            rating={product?.rating}
            starSize={24}
          />
        </div>
      </div>
      <p className='mb-1 text-sm text-grey-400'>{product.description}</p>
      <RadioBtnGroup />
      <SizeSelector
        sizes={sizes}
        handleSizeChange={handleSizeChange}
        selectedSize={selectedSize}
      />
      <ButtonsBlock product={product} />
      <ProductDescriptionAccordion product={product} />
    </div>
  )
}
