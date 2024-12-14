import React from 'react'

import { useModal } from '@/components/helpers/ModalContext'
import BlackBadge from '@/components/ui/BlackBadge'
import Button from '@/components/ui/Button'

import CartItems from './CartItems'

export default function CartModal() {
  const { toggleModal } = useModal()

  const handleContinueShopping = () => {
    // продовжити покупки переходимо куди?
  }
  const handleCloseModal = () => {
    toggleModal('cart')
  }

  return (
    <div className='flex flex-col justify-between gap-12 px-8 py-2 md:gap-20 md:p-8'>
      <div className='flex flex-col items-center'>
        <h1
          className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
            text-black'>
          Your cart
        </h1>
        <BlackBadge className='w-6'>4</BlackBadge>
      </div>
      <CartItems />
      <div className='flex flex-col gap-4 pb-20 md:pb-0'>
        <Button
          className='w-full bg-black py-5 text-white'
          onClick={handleContinueShopping}>
          Place an order
        </Button>
        <Button
          className='w-full bg-grey-light py-5 text-black'
          onClick={handleCloseModal}>
          Continue shopping
        </Button>
      </div>
    </div>
  )
}
