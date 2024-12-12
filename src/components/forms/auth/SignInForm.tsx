'use client'

import { SignInSchema, SignInType } from '@/schema/auth-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/ui/FormInput'
import Icon from '@/components/ui/Icon'

export default function SignInForm() {
  const { control, handleSubmit } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema)
  })
  const onSubmit = () => {}

  return (
    <div className='w-full sm:w-[370px] xxl:w-[450px]'>
      <h1 className='mb-6 text-center font-cormorant text-smd font-bold'>
        SIGN IN
      </h1>
      <form
        className='flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
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
            href='/sign-up'
            className='text-xs font-bold underline'>
            DON&apos;T HAVE AN ACCOUNT?
          </Link>
          <Link
            href='/forgot-password'
            className='text-xs font-bold underline'>
            FORGOT PASSWORD
          </Link>
        </div>
        <button
          type='submit'
          className='w-full rounded bg-black py-5 text-xs font-bold text-white transition-colors
            lg:hover:bg-grey-300'>
          LOGIN IN
        </button>
        <div className='flex justify-between'>
          <p className='text-sm text-grey-400'>SIGN IN WITH</p>
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
