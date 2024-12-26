import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@/types'
import * as Accordion from '@radix-ui/react-accordion'

import Icon from '@/components/ui/Icon'

import AddToCartButton from './AddToCartButton'

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
      <hr className='mb-5 border-brown' />
      {!product?.discountPercent ? (
        <h2 className='mb-4'>{formatPrice(product?.price)}</h2>
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

      <p className='mb-8 text-sm text-grey-400'>{product?.description}</p>

      <Accordion.Root
        collapsible
        type='single'
        className='flex flex-col gap-3'>
        <Accordion.Item value='item-1'>
          <Accordion.Trigger className='flex w-full items-center gap-3 border-b bg-grey-200 p-4'>
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
          <Accordion.Content>
            <div className='grid grid-cols-2 gap-8 border-t border-gray-300 bg-grey-200 px-4 py-8'>
              <div className='flex flex-col gap-6'>
                <div>
                  <h3 className='mb-1 text-sm text-grey-400'>Quantity</h3>
                  <p className='text-base-big'>
                    {product?.diamondDetails.quantity}
                  </p>
                </div>
                <div>
                  <h3 className='mb-1 text-sm text-grey-400'>Total weight</h3>
                  <p className='text-base-big'>
                    {product?.diamondDetails.weight} ct
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                <div>
                  <h3 className='mb-1 text-sm text-grey-400'>Diameter</h3>
                  <p className='text-base-big'>
                    {product?.diamondDetails.diameter} mm
                  </p>
                </div>
                <div>
                  <h3 className='mb-1 text-sm text-grey-400'>Сolor</h3>
                  <p className='text-base-big'>
                    {product?.diamondDetails.color}
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value='item-2'>
          <Accordion.Trigger className='flex w-full items-center gap-3 border-b bg-grey-200 p-4'>
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
            <div className='grid grid-cols-2 gap-8 border-t border-gray-300 bg-grey-200 px-4 py-8'>
              {/* Перша колонка */}
              <div className='flex flex-col gap-6'>
                <div>
                  <h3 className='mb-1 text-sm text-grey-400'>Width</h3>
                  <p className='text-base-big'>{product?.width} mm</p>
                </div>
                <div>
                  <h3 className='mb-3 text-sm text-grey-400'>Pair weight</h3>
                  {product?.ringDetails
                    ?.slice(0, Math.ceil(product.ringDetails.length / 2))
                    .map((detail, index) => (
                      <div
                        key={index}
                        className='mb-4'>
                        <h3 className='mb-3 text-base-big text-grey-400'>
                          {detail.purityValue} purity
                        </h3>
                        <div className='flex flex-col gap-1'>
                          <p className='text-sm'>M - {detail.maleWeight} gr</p>
                          <p className='text-sm'>
                            F - {detail.femaleWeight} gr
                          </p>
                          <p className='text-sm'>
                            Together - {detail?.pairWeight ?? 'N/A'} gr
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {/* Друга колонка */}
              <div className='flex flex-col gap-6'>
                <div>
                  <h3 className='mb-1 text-sm text-grey-400'>Thickness</h3>
                  <p className='text-base-big'>{product?.thickness} mm</p>
                </div>
                <div>
                  {product?.ringDetails
                    ?.slice(Math.ceil(product.ringDetails.length / 2))
                    .map((detail, index) => (
                      <div
                        key={index}
                        className='mb-4'>
                        <h3 className='mb-3 text-base-big text-grey-400'>
                          {detail.purityValue} purity
                        </h3>
                        <div className='flex flex-col gap-1'>
                          <p className='text-sm'>M - {detail.maleWeight} gr</p>
                          <p className='text-sm'>
                            F - {detail.femaleWeight} gr
                          </p>
                          <p className='text-sm'>
                            Together - {detail.pairWeight ?? 'N/A'} gr
                          </p>
                        </div>
                      </div>
                    ))}
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
