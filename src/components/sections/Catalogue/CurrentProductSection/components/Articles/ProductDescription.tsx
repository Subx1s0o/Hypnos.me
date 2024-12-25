import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'
import * as Accordion from '@radix-ui/react-accordion'

import Icon from '@/components/ui/Icon'

export default function ProductDescription({ product }: { product?: Product }) {
  console.log(product)
  const finalPrice = product?.discountPercent
    ? product?.price - (product?.price * product?.discountPercent) / 100
    : product?.price

  return (
    <div>
      <h1 className='mb-4 font-cormorant text-base-big font-medium sm:text-smd lg:text-md xxl:text-lg'>
        {product?.title}
      </h1>
      <hr className='mb-4 border-brown' />
      {!product?.discountPercent ? (
        <h2 className='mb-4'>{formatPrice(product?.price)}</h2>
      ) : (
        <div className='mb-4 flex items-center gap-3'>
          <h3 className='text-base-big text-grey-200 line-through'>
            {formatPrice(product.price)}$
          </h3>
          <h2 className='text-smd text-brown'>{formatPrice(finalPrice)}$</h2>
        </div>
      )}
      <p className='mb-8 text-sm text-grey-400'>{product?.description}</p>

      <Accordion.Root
        collapsible
        type='single'
        className='flex flex-col gap-3'>
        {/* Треба переписати бекенд для каменів */}

        {/* <Accordion.Item
          className='bg-grey-200 p-4'
          value='item-1'>
          <Accordion.Trigger className='flex items-center gap-3 border-b'>
            <div className='rounded-full bg-brown p-[7px]'>
              <Icon
                w={18}
                h={18}
                id='icon-diamant'
                className='text-white'
              />
            </div>
            <p className='text-base'>Characteristics of gemstones</p>
          </Accordion.Trigger>
          <Accordion.Content className='grid grid-cols-2'>
            <div className='mt-8 flex flex-col gap-6'>
              <div>
                <h3 className='mb-1 text-sm text-grey-400'>Quantity</h3>
                <p className='text-base-big'>{product?.quantity}</p>
              </div>
              <div>
                <h3 className='mb-1 text-sm text-grey-400'>Weight</h3>
                <p className='text-base-big'>
                  {product?.goldSamples.map(sample => sample.sampleValue)}
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-6'></div>
          </Accordion.Content>
        </Accordion.Item> */}

        <Accordion.Item
          value='item-2'
          className='bg-grey-200 p-4'>
          <Accordion.Trigger className='flex items-center gap-3 border-b'>
            <div className='rounded-full bg-brown p-[7px]'>
              <Icon
                w={18}
                h={18}
                id='icon-information'
                className='text-white'
              />
            </div>
            <p className='text-base'>About Ring</p>
          </Accordion.Trigger>
          <Accordion.Content>
            <div className='mt-8 grid grid-cols-2 items-center gap-8'>
              <div className='flex flex-col gap-6'>
                <div>
                  <h3 className='mb-1 text-sm text-grey-400'>Width</h3>
                  <p className='text-base-big'>{product?.width} mm</p>
                </div>
                <div></div>
              </div>
              <div className='flex flex-col gap-6'>
                <div>
                  <h3 className='mb-1 text-sm text-grey-400'>Thickness</h3>
                  <p className='text-base-big'>{product?.thickness} mm</p>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          className='bg-grey-200 p-4'
          value='item-3'>
          <Accordion.Trigger className='flex items-center gap-3 border-b'>
            <div className='rounded-full bg-brown p-[7px]'>
              <Icon
                w={18}
                h={18}
                id='icon-medal-star'
                className='text-white'
              />
            </div>
            <p className='text-base'>About guarantee</p>
          </Accordion.Trigger>
          <Accordion.Content></Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
