'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useForm } from 'react-hook-form'

import FormInput from '../ui/FormInput'
import Icon from '../ui/Icon'
import { SubscribeSchema, SubscribeType } from './schema/subscribe-schema'

export default function SubscribeForm() {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { isValid }
  } = useForm<SubscribeType>({
    resolver: zodResolver(SubscribeSchema)
  })

  const onSubmit = (data: SubscribeType) => {
    console.log('Form submitted:', data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='px-5 pb-16 md:col-start-2 md:p-20 xl:pr-[200px]'>
      <div className='mb-5'>
        <FormInput
          type='email'
          name='email'
          autoComplete='email'
          control={control}
          placeholder='EMAIL'
          className='w-full rounded border-transparent bg-grey-400 p-3 text-white transition-colors
            focus-visible:border focus-visible:border-brown'
        />
      </div>

      <div className='flex items-center justify-between'>
        <label className='relative flex cursor-pointer items-center space-x-3'>
          <Checkbox.Root
            id='isChecked'
            onCheckedChange={checked =>
              setValue('isChecked', !!checked, { shouldValidate: true })
            }
            className='flex size-5 cursor-pointer items-center justify-center rounded-[4px] border-2
              border-primary data-[state=checked]:bg-primary
              data-[state=unchecked]:bg-transparent'>
            <Checkbox.Indicator>
              <Icon
                id='icon-check'
                w={11}
                h={11}
                className='text-white transition-transform duration-300'
              />
            </Checkbox.Indicator>
          </Checkbox.Root>
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
          disabled={!isValid}
          className={`rounded-full p-3 transition-colors ${
            isValid
              ? 'cursor-pointer bg-brown hover:bg-brown/75'
              : 'cursor-not-allowed bg-zinc-700'
            }`}>
          <Icon
            id='icon-arrow'
            w={16}
            h={16}
            className='rotate-90 p-1 text-white'
          />
        </button>
      </div>
    </form>
  )
}