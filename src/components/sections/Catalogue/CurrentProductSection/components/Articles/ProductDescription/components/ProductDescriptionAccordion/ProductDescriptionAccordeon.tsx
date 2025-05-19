import React from 'react'
import { Product } from '@/types'
import * as Accordion from '@radix-ui/react-accordion'

import AccordionItem from './AccordionItem'

export default function ProductDescriptionAccordion({
  product
}: {
  product: Product
}) {
  return (
    <Accordion.Root
      type='single'
      collapsible
      defaultValue='item-1'
      className='mb-8 flex flex-col gap-3'>
      <AccordionItem
        value='item-1'
        iconId='icon-diamant'
        title='Characteristics of gemstones'>
        <div className='grid grid-cols-2 gap-8 border-t border-gray-300 bg-grey-200 px-4 py-8'>
          <div className='flex flex-col gap-6'>
            <div>
              <h3 className='mb-1 text-sm text-grey-400'>Quantity</h3>
              <p className='text-base-big'>
                {product?.diamondDetails?.quantity}
              </p>
            </div>
            <div>
              <h3 className='mb-1 text-sm text-grey-400'>Total weight</h3>
              <p className='text-base-big'>
                {product?.diamondDetails?.weight} ct
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <div>
              <h3 className='mb-1 text-sm text-grey-400'>Diameter</h3>
              <p className='text-base-big'>
                {product?.diamondDetails?.diameter} mm
              </p>
            </div>
            <div>
              <h3 className='mb-1 text-sm text-grey-400'>Сolor</h3>
              <p className='text-base-big'>{product?.diamondDetails?.color}</p>
            </div>
          </div>
        </div>
      </AccordionItem>

      {/* About Ring */}
      <AccordionItem
        value='item-2'
        iconId='icon-information'
        title='About Ring'>
        <div className='grid grid-cols-2 gap-8 border-t border-gray-300 bg-grey-200 px-4 py-8'>
          {/* First Column */}
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
                    <div className='mb-1 flex flex-col gap-1'>
                      <p className='text-sm'>M - {detail.maleWeight} gr</p>
                      <p className='text-sm'>F - {detail.femaleWeight} gr</p>
                      <p className='text-sm'>
                        Together - {detail?.pairWeight ?? 'N/A'} gr
                      </p>
                    </div>
                    <hr className='h-[2px] w-full bg-gray-300' />
                  </div>
                ))}
            </div>
          </div>
          {/* Second Column */}
          <div className='flex flex-col gap-6'>
            <div>
              <h3 className='mb-1 text-sm text-grey-400'>Thickness</h3>
              <p className='text-base-big'>{product?.thickness} mm</p>
            </div>
            <div>
              <h3 className='mb-3 text-transparent'>Pair weight</h3>
              {product?.ringDetails
                ?.slice(Math.ceil(product.ringDetails.length / 2))
                .map((detail, index) => (
                  <div
                    key={index}
                    className='mb-4'>
                    <h3 className='mb-3 text-base-big text-grey-400'>
                      {detail.purityValue} purity
                    </h3>
                    <div className='mb-1 flex flex-col gap-1'>
                      <p className='text-sm'>M - {detail.maleWeight} gr</p>
                      <p className='text-sm'>F - {detail.femaleWeight} gr</p>
                      <p className='text-sm'>
                        Together - {detail.pairWeight ?? 'N/A'} gr
                      </p>
                    </div>
                    <hr className='h-[2px] w-full bg-gray-300' />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </AccordionItem>

      {/* About Guarantee */}
      <AccordionItem
        value='item-3'
        iconId='icon-medal-star'
        title='About guarantee'>
        <div className='border-t border-gray-300 bg-grey-200 px-4 py-8'>
          <p className='text-sm text-grey-400'>
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
