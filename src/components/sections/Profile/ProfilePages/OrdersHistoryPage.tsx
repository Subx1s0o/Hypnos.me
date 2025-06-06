import { Order } from '@/types/order'

import Icon from '@/components/ui/Icon'

import ProfileOrderItem from '../components/ProfileOrderItem'

export default function OrdersHistoryPage() {
  const data: Order[] = [
    {
      id: '12345',
      title: 'Super Awesome Stages of Love',
      price: 48000,
      purchaseDate: '01.07.2024',
      isPriceForPair: true,
      media: {
        main: {
          url: 'https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dw8e549b86/M-CLASSIQUE/m-classique-2.png',
          status: 'fulfilled'
        }
      }
    },
    {
      id: '12346',
      title: 'Super Awesome Stages of Love',
      price: 30000,
      purchaseDate: '01.07.2024',
      media: {
        main: {
          url: 'https://www.palmonas.com/cdn/shop/files/PM-RING-029.jpg?v=1744462711&width=600',
          status: 'fulfilled'
        }
      }
    },
    {
      id: '12347',
      title: 'Super Awesome Stages of Love',
      price: 25000,
      purchaseDate: '01.07.2024',
      discountPercent: 10,
      isPriceForPair: true,
      media: {
        main: {
          url: 'https://roelaviatelier.com/cdn/shop/products/IMG_0712_b630274f-f72b-4c75-839a-0172f583fe02.jpg?v=1638687684',
          status: 'fulfilled'
        }
      }
    },
    {
      id: '12345',
      title: 'Super Awesome Stages of Love',
      price: 25000,
      purchaseDate: '10.07.2024',
      isPriceForPair: false,
      discountPercent: 5,
      media: {
        main: {
          url: 'https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dw8e549b86/M-CLASSIQUE/m-classique-2.png',
          status: 'fulfilled'
        }
      }
    }
  ]

  return (
    <section>
      <div className='mb-16 flex flex-col gap-8 font-manrope'>
        <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
          <span className='flex size-8 items-center justify-center rounded-full bg-grey-light'>
            <Icon
              id='icon-cart-filled'
              w={16}
              h={16}
              className='text-black'
            />
          </span>
          <h2 className='text-base-big xxl:font-semibold xxl:leading-[32px]'>
            Order History
          </h2>
        </div>
        <ul className='flex flex-col gap-3'>
          {data && <ProfileOrderItem data={data} />}
        </ul>
      </div>
    </section>
  )
}
