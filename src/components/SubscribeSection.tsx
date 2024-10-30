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
      className='mx-4 bg-black px-5 py-12 text-brown md:grid md:grid-cols-2 md:grid-rows-2
        md:gap-8 md:px-16 md:py-24'>
      {/* 1 */}
      <div className='mb-6 flex flex-col items-center md:col-span-2 md:mb-0'>
        <Icon
          id='icon-burger'
          w={16}
          h={16}
          className='bg-dark-grey rounded-full p-4 text-white'></Icon>
        <h2 className='mt-4 text-center font-serif text-3xl text-white'>
          Get exclusive news
        </h2>
      </div>

      {/* 2 */}
      <div className='md:col-start-1 md:row-start-2 md:flex md:items-center'>
        <p className='text-center md:text-left'>
          By subscribing to our newsletter, you will be the first to know about
          promotions, raffles, and auctions held exclusively for our
          subscribers.
        </p>
      </div>

      {/* 3 */}
      <form
        onSubmit={handleSubmit}
        className='space-y-4 md:col-start-2 md:row-start-2 md:flex md:flex-col md:justify-center'>
        <div>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='EMAIL'
            className={`bg-dark-grey w-full rounded border p-3 text-white transition-colors
              focus:outline-none ${
              isEmailValid
                  ? 'border-green-500'
                  : 'border-zinc-700 focus:border-zinc-500'
              }`}
          />
        </div>

        <div className='flex items-center justify-between md:justify-start md:space-x-4'>
          <label className='flex cursor-pointer items-center space-x-2'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={e => setIsChecked(e.target.checked)}
              className='size-4 rounded border-zinc-700 bg-zinc-800'
            />
            <span className='text-sm'>
              I agree with the{' '}
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
              className='p-4 text-white'></Icon>
          </button>
        </div>
      </form>
    </section>
  )
}
