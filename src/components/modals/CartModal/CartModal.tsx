'use client'

import React from 'react'
import useCart from '@/app/(store)/store'
import { Product } from '@/types/product-type'
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
  const cartItems: Product[] = useCart(state => state.cart)
  const totalAmount: number = cartItems.reduce((totalAmount, product) => {
    const { discountPercent, price, cartCount } = product
    const finalPrice = discountPercent
      ? price - (price * discountPercent) / 100
      : price
    if (product.cartCount) {
      totalAmount += finalPrice * (cartCount ?? 0)
    }

    return totalAmount
  }, 0)
  const totalCount = cartItems.reduce((acc, item) => {
    if (item.cartCount) {
      return acc + item.cartCount
    }

    return acc
  }, 0)

  return (
    <>
      <div className='flex max-h-svh flex-col justify-between gap-12 py-8 md:gap-20'>
        <div className='flex flex-col items-center'>
          <h2
            className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
              text-black'>
            Your cart
          </h2>
          <BlackBadge className='w-9'>{totalCount}</BlackBadge>
        </div>

        {cartItems.length === 0 ? (
          <p>There is nothing in your cart</p>
        ) : (
          <CartItems products={cartItems} />
        )}
        <div className='flex flex-col gap-4 pb-20'>
          <div className='flex justify-between p-4'>
            <h3
              className='text-center font-cormorant text-base font-bold uppercase leading-normal
                text-black'>
              Total amount
            </h3>
            <p>{totalAmount} $</p>
          </div>
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
