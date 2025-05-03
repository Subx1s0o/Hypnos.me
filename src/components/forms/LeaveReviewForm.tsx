import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { useForm } from 'react-hook-form'

import FormInput from '../ui/FormInput'
import Icon from '../ui/Icon'

type FormValues = {
  name: string
  email: string
  comment: string
}

export default function LeaveReviewForm() {
  const [rate, setRate] = useState(0)
  const {
    control,
    handleSubmit,
    watch,
    register,
    reset,
    formState: { isSubmitSuccessful }
  } = useForm<FormValues>()

  const name = watch('name')
  const email = watch('email')
  const comment = watch('comment')

  const isDisabled = !name || !email || !comment || rate === 0

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        reset()
        setRate(0)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4'>
      <div className='mt-3 flex gap-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type='button'
            onClick={() => setRate(index + 1)}>
            <Icon
              id={index < rate ? 'icon-star-full' : 'icon-star'}
              w={24}
              h={24}
              className='stroke-2 text-brown-accent'
            />
          </button>
        ))}
      </div>

      <FormInput
        control={control}
        name='name'
        placeholder='Name'
      />

      <FormInput
        control={control}
        name='email'
        placeholder='Email'
      />

      <textarea
        {...register('comment')}
        className='h-[132px] w-full resize-none rounded-[4px] border border-grey-200 bg-white
          px-[14px] py-4 text-sm outline-none transition-colors focus-visible:border-black'
        maxLength={300}
        placeholder='Your review (up to 300 characters)'
        id='comment'
      />

      <button
        type='submit'
        disabled={isDisabled}
        className={cn(
          `group flex max-w-[176px] items-center justify-center gap-1 rounded-3xl border-2
          border-grey-200 px-10 py-3 text-xs text-grey-400 transition-colors`,
          {
            'border-brown-accent': !isDisabled,
            'lg:hover:bg-brown-accent': !isDisabled,
            'bg-white': isSubmitSuccessful
          }
        )}>
        {!isSubmitSuccessful ? (
          <>
            <Icon
              id='icon-star-full'
              className={cn('transition-colors', {
                'text-grey-400': isDisabled,
                'text-brown-accent lg:group-hover:text-grey-400': !isDisabled
              })}
              w={16}
              h={16}
            />
            <p>Send review</p>
          </>
        ) : (
          <>
            <Icon
              id='icon-check'
              className='text-grey-400'
              w={16}
              h={16}
            />
            <p>Review sent</p>
          </>
        )}
      </button>
    </form>
  )
}
