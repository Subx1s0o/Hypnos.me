'use client'

import { SignUpSchema, SignUpType } from '@/schema/auth-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Checkbox from '@radix-ui/react-checkbox'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/ui/FormInput'
import Icon from '@/components/ui/Icon'

export default function SignUpForm() {
  const { control, handleSubmit } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema)
  })
  const onSubmit = () => {}

  return (
    <div className='w-full sm:w-[370px] xxl:w-[450px]'>
      <h1 className='mb-6 text-center font-cormorant text-smd font-bold'>
        SIGN UP
      </h1>
      <form
        className='flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          <FormInput
            control={control}
            label='name'
            placeholder='John Conan'
            name='name'
          />
          <FormInput
            control={control}
            label='email'
            placeholder='johnuk21@gmail.com'
            name='email'
          />
          <FormInput
            control={control}
            label='password'
            name='password'
            placeholder='*********'
            type='password'
          />
        </div>
        <div className='mb-5 flex justify-between'>
          <Link
            href='/sign-in'
            className='text-xs font-bold underline'>
            ALREADY HAVE AN ACCOUNT?
          </Link>
        </div>
        <button
          type='submit'
          className='w-full rounded bg-black py-5 text-xs font-bold text-white transition-colors
            lg:hover:bg-grey-300'>
          REGISTER
        </button>
        <div className='relative flex'>
          <Checkbox.Root
            className='absolute left-0 top-1 flex size-6 items-center justify-center rounded border
              border-black'
            defaultChecked
            name='subscribed'
            id='c1'>
            <Checkbox.Indicator>
              <Icon
                className='text-black'
                id='icon-check'
                w={16}
                h={16}
              />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label
            className='ml-[45px] text-base font-normal text-grey-400'
            htmlFor='c1'>
            I want to receive discounts and news about new products
          </label>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm text-grey-400'>SIGN UP WITH</p>
          <button
            type='button'
            className='rounded-full bg-brown p-[10px] transition-colors lg:hover:bg-brown-active'>
            <Icon
              id='icon-google'
              className='text-white'
              w={24}
              h={24}
            />
          </button>
        </div>
      </form>
    </div>
  )
}
