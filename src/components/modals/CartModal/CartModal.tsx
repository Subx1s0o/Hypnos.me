import Button from '@/components/ui/Button'
import SpanBtn from '@/components/ui/SpanBtn'

import CartItems from './CartItems'

export default function CartModal() {
  return (
    <div className='flex flex-col justify-between gap-14 p-4 md:gap-20'>
      <div className='flex flex-col items-center'>
        <h1
          className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
            text-black'>
          The cart
        </h1>
        <SpanBtn className='w-6'>4</SpanBtn>
      </div>
      <CartItems />
      <div className='flex flex-col gap-4 pb-20 md:pb-0'>
        <Button
          className='w-full bg-black py-5 text-white'
          onClick={() => console.log('Place an order clicked')}>
          Place an order
        </Button>
        <Button
          className='w-full bg-light-grey py-5 text-black'
          onClick={() => console.log('Continue shopping clicked')}>
          Continue shopping
        </Button>
      </div>
    </div>
  )
}
