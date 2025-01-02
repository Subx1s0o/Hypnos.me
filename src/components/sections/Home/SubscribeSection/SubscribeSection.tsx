import React from 'react'

import SubscribeForm from '@/components/forms/SubscribeForm'
import Icon from '@/components/ui/Icon'

export default function SubscribeSection() {
  return (
    <section
      id='subscribe'
      className='mx-4 my-12 bg-black text-brown md:mx-10 md:grid md:grid-cols-2'>
      <div className='flex flex-col items-center py-14 md:col-span-2 md:px-16 md:py-20'>
        <Icon
          id='icon-email'
          w={32}
          h={32}
<<<<<<< HEAD
          className='rounded-full bg-grey-400 p-4 text-brown'
=======
          className='rounded-full bg-grey-400 p-4 text-gray-100'
>>>>>>> 8c49285936392121ebe198f6ddb083bb6d798f90
        />
        <h2 className='mt-4 text-center font-serif text-3xl text-white'>
          Get exclusive news
        </h2>
      </div>

      <div className='md:col-span-2 md:h-px md:bg-grey-light' />

      <div className='relative mb-8 px-5 md:mb-0 md:p-20 xl:pl-[200px]'>
<<<<<<< HEAD
        <p className='text-center md:text-left'>
=======
        <p className='text-center text-base md:text-left'>
>>>>>>> 8c49285936392121ebe198f6ddb083bb6d798f90
          By subscribing to our newsletter, you will be the first to know about
          promotions, raffles, and auctions held exclusively for our
          subscribers.
        </p>

        <div className='md:absolute md:right-0 md:top-0 md:h-full md:w-px md:bg-grey-light' />
      </div>

      <SubscribeForm />
    </section>
  )
}
