'use client'

import React from 'react'
import useWishlist from '@/store/wishlist/wishlist'
import Link from 'next/link'

import { useModal } from '@/components/context/ModalContext'
import BlackBadge from '@/components/ui/BlackBadge'
import Button from '@/components/ui/Button'

import WishlistItem from './WishlistItem'

export default function WishlistModal() {
  const { closeModal } = useModal()

  const { wishlist } = useWishlist()
  const totalCount = wishlist.length

  return (
    <>
      <div className='flex max-h-svh flex-col justify-between gap-12 py-8 md:gap-20'>
        <div className='flex flex-col items-center'>
          <h2
            className='text-center font-cormorant text-2xl font-bold uppercase leading-normal
              text-black'>
            Your wishlist
          </h2>

          <BlackBadge className='w-9'>{totalCount}</BlackBadge>
        </div>

        {wishlist.length === 0 ? (
          <p>There is nothing in your wishlist</p>
        ) : (
          <WishlistItem products={wishlist} />
        )}
        <div className='flex flex-col gap-4 pb-20'>
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
