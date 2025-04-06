'use client'

import React from 'react'
import useCart from '@/store/cart/cart'
import Link from 'next/link'

import { useModal } from '@/components/context/ModalContext'
import BlackBadge from '@/components/ui/BlackBadge'
import Button from '@/components/ui/Button'

import CartItems from './CartItems'

export default function CartModal() {
  const { closeModal } = useModal()

  const { cart, message } = useCart()
  const totalAmount: number = cart.reduce((totalAmount, product) => {
    const { discountPercent, price, cartCount } = product
    const finalPrice = discountPercent
      ? price - (price * discountPercent) / 100
      : price
    if (product.cartCount) {
      totalAmount += finalPrice * (cartCount ?? 0)
    }

    return totalAmount
  }, 0)
  const totalCount = cart.reduce((acc, item) => {
    if (item.cartCount) {
      return acc + item.cartCount
    }

    return acc
  }, 0)

  return (
    <>
      <div className='flex min-h-screen flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <h2
            className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
              text-black'>
            Your cart
          </h2>

          <BlackBadge className='w-9'>{totalCount}</BlackBadge>
        </div>

        {cart.length === 0 ? (
          <div className='flex grow justify-center'>
            <p className='text-grey-normal'>There is nothing in your cart</p>
          </div>
        ) : (
          <CartItems products={cart} />
        )}
        <div className='flex flex-col gap-4 pb-20'>
          {cart.length > 0 && (
            <div className='flex justify-between p-4'>
              <h3
                className='text-center font-cormorant text-base font-bold uppercase leading-normal
                  text-black'>
                Total amount
              </h3>
              <p>{totalAmount} $</p>
            </div>
          )}

          <Link
            href='/cart'
            passHref>
            <Button className='w-full bg-black py-5 text-white'>
              Place an order
            </Button>
          </Link>

          <Button
            className='w-full bg-grey-light py-5 text-black'
            onClick={() => closeModal('cart')}>
            Continue shopping
          </Button>
        </div>
      </div>
    </>
  )
}
