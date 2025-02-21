'use client'

import React from 'react'
import Link from 'next/link'

import { useModal } from '@/components/helpers/ModalContext'
import BlackBadge from '@/components/ui/BlackBadge'
import Button from '@/components/ui/Button'

import CartItems from './CartItems'

export default function CartModal() {
  const { closeModal } = useModal()
  const handleContinueShopping = () => {
    closeModal('cart')
  }

  return (
    <>
      <div className='flex flex-col justify-between gap-12 px-8 py-2 md:gap-20 md:p-8'>
        <div className='flex flex-col items-center'>
          <h2
            className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
              text-black'>
            Your cart
          </h2>
          <BlackBadge className='w-6'>4</BlackBadge>
        </div>
        <CartItems />
        <div className='flex flex-col gap-4 pb-20 md:pb-0'>
          <Link
            href='/cart'
            passHref>
            <Button className='w-full bg-black py-5 text-white'>
              Place an order
            </Button>
          </Link>

          <Button
            className='w-full bg-grey-light py-5 text-black'
            onClick={handleContinueShopping}>
            Continue shopping
          </Button>
        </div>
      </div>
    </>
  )
}
