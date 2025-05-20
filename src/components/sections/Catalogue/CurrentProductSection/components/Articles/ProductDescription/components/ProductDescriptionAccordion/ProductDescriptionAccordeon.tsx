import React from 'react'
import { Product } from '@/types'
import * as Accordion from '@radix-ui/react-accordion'

import AccordionItem from './AccordionItem'

export default function ProductDescriptionAccordion({
  product
}: {
  product: Product
}) {
  // console.log(product)

  const termsOfOrderAndDelivery = [
    'Free delivery for ready-made rings.',
    'Production starts from 7 days; standard models take 14 days.',
    'Free silver samples are available for fitting.',
    'Orders require a 50% prepayment.',
    'Express production: 3 days (+25% cost).',
    'Custom models` timing is discussed individually.',
    'Size adjustments available, some for free.',
    'Customization options: metal, stones, width, etc. Specify changes when ordering.'
  ]

  return (
    <Accordion.Root
      type='single'
      collapsible
      defaultValue='item-1'
      className='mb-8 flex flex-col gap-3'>
      <AccordionItem
        value='item-1'
        iconId='icon-diamant'
        title='Characteristics'>
        <div className='grid grid-cols-3 gap-10 bg-grey-light p-4'>
          {/* Columne one */}
          <div className='flex flex-col gap-[10px] text-sm font-semibold leading-[18px] text-grey-300'>
            <p>Article</p>
            {product.ringDetails && (
              <div className='flex flex-col gap-2'>
                <p>Pair weight</p>
                <p>M</p>
                <p>W</p>
                <p>Together</p>
              </div>
            )}
            {product.diamondDetails && (
              <div className='flex flex-col gap-2'>
                <p>Gemstones</p>
                <p>Quantity</p>
                <p>Weight</p>
                <p>Diameter</p>
                <p>Purity</p>
              </div>
            )}
          </div>
          {/* Columne two */}
          <div className='flex flex-col gap-[10px] text-sm leading-[18px] text-grey-400'>
            <p className='font-semibold text-grey-300'>
              {product.slug?.slice(-7)}
            </p>
            {product.ringDetails && (
              <div className='flex flex-col gap-2'>
                <p>{product.ringDetails[0].purityValue} sample</p>
                <p>{product.ringDetails[0].maleWeight} g</p>
                <p>{product.ringDetails[0].femaleWeight} g</p>
                <p>
                  {product.ringDetails[0].maleWeight +
                    product.ringDetails[0].femaleWeight}{' '}
                  g
                </p>
              </div>
            )}
            {product.diamondDetails && (
              <div className='flex flex-col gap-2'>
                <p>Diamond</p>
                <p>{product.diamondDetails.quantity}</p>
                <p>{product.diamondDetails.weight} g</p>
                <p>{product.diamondDetails.diameter} mm</p>
                <p>{product.diamondDetails.purity} ct</p>
              </div>
            )}
          </div>
          {/* Columne three */}
          {product.ringDetails && product.ringDetails.length > 1 && (
            <div className='flex flex-col gap-2'>
              <p>{product.ringDetails[1].purityValue} sample</p>
              <p>{product.ringDetails[1].maleWeight} g</p>
              <p>{product.ringDetails[1].femaleWeight} g</p>
              <p>
                {product.ringDetails[1].maleWeight +
                  product.ringDetails[1].femaleWeight}{' '}
                g
              </p>
            </div>
          )}
        </div>
      </AccordionItem>

      {/* About Ring */}
      <AccordionItem
        value='item-2'
        iconId='icon-information'
        title='Terms of order and delivery'>
        <div className='flex flex-col gap-3 bg-grey-light p-4 text-sm leading-[18px]'>
          <h3 className='font-semibold'>
            Delivery of ready-made wedding rings is free
          </h3>
          <div className='pl-5'>
            <ul className='flex list-outside list-disc flex-col gap-2 marker:mr-0'>
              {termsOfOrderAndDelivery.map((item, index) => {
                return (
                  <li
                    className=''
                    key={index}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </AccordionItem>

      {/* About Guarantee */}
      <AccordionItem
        value='item-3'
        iconId='icon-medal-star'
        title='Warranty'>
        <div className='border-gray-200 bg-grey-light p-4'>
          <p className='text-sm leading-[18px] text-grey-400'>
            You receive a lifetime warranty on engagement rings purchased from
            our gallery. The warranty covers polishing, grinding, and resizing
            of the rings (where resizing is possible). For more details, please
            contact our gallery manager by phone or place an order on our
            website.
          </p>
        </div>
      </AccordionItem>
    </Accordion.Root>
  )
}
