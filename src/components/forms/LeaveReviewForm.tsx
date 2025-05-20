import React, { useEffect } from 'react'
import postReviewsByProductSlug from '@/actions/postReviewsByProductSlug'
import { cn } from '@/lib/cn'
import { ReviewFormValues } from '@/types/review'
import { useForm } from 'react-hook-form'

import FormInput from '../ui/FormInput'
import Icon from '../ui/Icon'

export default function LeaveReviewForm({ slug }: { slug: string }) {
  const {
    control,
    handleSubmit,
    watch,
    register,
    reset,
    setValue,
    formState: { isSubmitSuccessful }
  } = useForm<ReviewFormValues>({
    defaultValues: {
      rate: 0
    }
  })

  const name = watch('name')
  const email = watch('email')
  const comment = watch('comment')
  const rate = watch('rate')

  const isDisabled = !name || !email || !comment || rate === 0

  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        reset()
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = (data: ReviewFormValues) => {
    const submissionDate = new Date().toISOString()
    const reviewData = {
      ...data,
      date: submissionDate
    }
    postReviewsByProductSlug(slug, reviewData)
    console.log(reviewData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-3'>
      <div className='mt-3 flex gap-2'>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type='button'
            onClick={() => setValue('rate', index + 1)}>
            <Icon
              id={index < rate ? 'icon-star-full' : 'icon-star'}
              w={20}
              h={20}
              className='text-brown-accent stroke-2'
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
