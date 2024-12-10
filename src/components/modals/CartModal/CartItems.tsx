import Image from 'next/image'

import BlackBadge from '@/components/ui/BlackBadge'
import Icon from '@/components/ui/Icon'

import { fetchData as data } from './data/fetch-data'

export default function CartItems() {
  return (
    <ul className='flex flex-col gap-4'>
      {data.map(ring => (
        <li
          key={ring.id}
          className='border-b-2 border-grey-200'>
          <div className='relative flex pb-4'>
            <Image
              src={ring.image_url}
              alt={ring.name}
              width={100}
              height={100}
            />

            <div className='flex w-full flex-col justify-between pl-4'>
              <h3
                className='align-middle font-manrope text-sm font-semibold not-italic tracking-tight
                  text-black'>
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
                <BlackBadge className='w-12'>-10%</BlackBadge>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
