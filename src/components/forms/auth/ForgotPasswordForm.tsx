'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  ForgotPasswordSchema,
  ForgotPasswordType
} from '@/components/forms/schema/auth-schemas'
import FormInput from '@/components/ui/FormInput'

export default function ForgotPasswordForm() {
  const { control, handleSubmit } = useForm<ForgotPasswordType>({
    resolver: zodResolver(ForgotPasswordSchema)
  })
  const onSubmit = () => {}

  return (
    <div className='w-full sm:w-[370px] xxl:w-[450px]'>
      <h1 className='mb-5 text-center font-cormorant text-smd font-bold uppercase'>
        forgot password
      </h1>
      <div className='mb-5 flex justify-center'>
        <p className='max-w-80 text-center text-sm text-grey-normal'>
          Write here the email from which you registered so that we can{' '}
          <span className='font-bold text-black'>send you a letter</span> to
          recover your password
        </p>
      </div>
      <form
        className='mb-[50px] flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          <FormInput
            control={control}
            label='email'
            name='email'
            placeholder='johnuk21@gmail.com'
          />
        </div>
        <button
          type='submit'
          className='w-full rounded bg-black py-5 text-xs font-bold text-white transition-colors
            lg:hover:bg-grey-300'>
          RESET PASSWORD
        </button>
      </form>
      <div className='flex justify-center'>
        <p className='max-w-96 text-center text-sm'>
          If something went wrong, write to us at{' '}
          <span className='font-bold text-black'>subx1s0o@gmail.com</span> so
          that a manager can help you. In the letter, please provide the name
          and mail that you used when registering.
        </p>
      </div>
    </div>
  )
}
