'use client'

import { SignUpSchema, SignUpType } from '@/schema/auth-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
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
    <div className='w-[370px] xxl:w-[450px]'>
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
            name='name'
          />
          <FormInput
            control={control}
            label='email'
            name='email'
          />
          <FormInput
            control={control}
            label='password'
            name='password'
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
          className='w-full rounded-[4px] bg-black py-5 text-xs font-bold text-white
            transition-colors lg:hover:bg-grey-300'>
          REGISTER
        </button>
        <div className='flex justify-between'>
          <p className='text-sm text-grey-400'>SIGN UP WITH</p>
          <button
            type='button'
            className='rounded-full bg-brown p-[10px]'>
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
