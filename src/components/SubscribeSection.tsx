import React, { useMemo, useState } from 'react'

import Icon from './features/Icon'

export default function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const isEmailValid = useMemo(() => {
    return email.length > 0 && validateEmail(email)
  }, [email])

  const isSubmitEnabled = useMemo(() => {
    return isEmailValid && isChecked
  }, [isEmailValid, isChecked])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // fetch logic
    console.log('Form submitted:', { email, isChecked })
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <section
      id='subscribe'
      className='mx-4 my-12 bg-black text-brown md:mx-10 md:grid md:grid-cols-2'>
      {/* 1 - Top section */}
      <div className='flex flex-col items-center py-14 md:col-span-2 md:px-16 md:py-20'>
        <Icon
          id='icon-letter'
          w={32}
          h={32}
          className='bg-dark-grey text-primary100 rounded-full p-4'
        />
        <h2 className='mt-4 text-center font-serif text-3xl text-white'>
          Get exclusive news
        </h2>
      </div>

      {/* Horizontal divider */}
      <div className='md:col-span-2 md:h-px md:bg-light-grey' />

      {/* 2 - Bottom left */}
      <div className='relative mb-8 px-5 md:mb-0 md:p-20 xl:pl-[200px]'>
        <p className='text-center md:text-left'>
          By subscribing to our newsletter, you will be the first to know about
          promotions, raffles, and auctions held exclusively for our
          subscribers.
        </p>
        {/* Vertical divider */}
        <div className='md:absolute md:right-0 md:top-0 md:h-full md:w-px md:bg-light-grey' />
      </div>

      {/* 3 - Bottom right */}
      <form
        onSubmit={handleSubmit}
        className='px-5 pb-16 md:col-start-2 md:p-20 xl:pr-[200px]'>
        <div className='mb-5'>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='EMAIL'
            className={`bg-dark-grey w-full rounded border p-3 text-white transition-colors ${
              email.length > 0
                ? isEmailValid
                  ? 'border-green-500 focus:outline-none'
                  : 'border-grey focus:outline-none'
                : 'border-transparent'
              }`}
          />
        </div>

        <div className='flex justify-between'>
          <label className='flex cursor-pointer items-center space-x-3'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={e => setIsChecked(e.target.checked)}
              className='border-primary100 size-5 cursor-pointer appearance-none rounded-[4px] border-2
                bg-transparent checked:bg-primary'
            />
            <span className='text-sm'>
              * I agree with the{' '}
              <a
                href='/policy'
                className='text-white hover:underline'>
                policy
              </a>
            </span>
          </label>

          <button
            type='submit'
            disabled={!isSubmitEnabled}
            className={`rounded-full p-3 transition-colors ${
              isSubmitEnabled
                ? 'cursor-pointer bg-brown hover:bg-brown/75'
                : 'cursor-not-allowed bg-zinc-700'
              }`}>
            <Icon
              id='icon-burger'
              w={16}
              h={16}
              className='p-1 text-white'
            />
          </button>
        </div>
      </form>
    </section>
  )
}
