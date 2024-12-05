import Image from 'next/image'

import Icon from '@/components/ui/Icon'
import SpanBtn from '@/components/ui/SpanBtn'

import { fetchData as data } from './data/fetch-data'

export default function CartItems() {
  return (
    <ul className='flex flex-col gap-4'>
      {data.map(ring => (
        <li
          key={ring.id}
          className='relative flex shadow'>
          <Image
            src={ring.image_url}
            alt={ring.name}
            width={100}
            height={100}
          />

          <div className='flex w-full flex-col justify-between p-2'>
            <h3 className='font-manrope text-sm font-semibold not-italic tracking-tight text-black'>
              {ring.name}
              <button>
                <Icon
                  className='absolute right-0 top-0'
                  id='icon-x-altx-alt'
                  h={12}
                  w={12}
                />
              </button>
            </h3>
            <div className='flex justify-between'>
              <p className='font-manrope text-sm font-semibold not-italic tracking-tight text-black'>
                {ring.price} $
              </p>
              <SpanBtn className='w-10'>-10%</SpanBtn>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
