'use client'

import { login } from '@/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  SignInSchema,
  SignInType
} from '@/components/forms/schema/auth-schemas'
import FormInput from '@/components/ui/FormInput'

export default function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SignInType>({
    resolver: zodResolver(SignInSchema)
  })
  const router = useRouter()
  const onSubmit: SubmitHandler<SignInType> = async data => {
    await login(data)
    router.replace('/')
  }

  return (
    <div className='w-full sm:w-[370px] xl:w-[450px]'>
      <h1 className='mb-5 text-center font-cormorant text-smd font-bold'>
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
            placeholder='johnuk21@gmail.com'
          />
          <FormInput
            control={control}
            label='password'
            name='password'
            placeholder='*********'
            type='password'
          />
        </div>
        <div className='mb-5 flex flex-col justify-between gap-2 sm:flex-row'>
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
          disabled={isSubmitting}
          className='w-full rounded bg-black py-5 text-xs font-bold text-white transition-colors
            lg:hover:bg-grey-300'>
          {isSubmitting ? (
            <p className='flex items-center justify-center gap-5'>
              SIGNING IN...<span className='loader'></span>
            </p>
          ) : (
            'SIGN IN'
          )}
        </button>
      </form>
    </div>
  )
}
