'use client'

import { useForm } from 'react-hook-form'

import FormInput from '@/components/ui/FormInput'

export default function SignInForm() {
  const { control } = useForm()
  return (
    <div className='xxl:w-[450px] w-[370px]'>
      <h1 className='mb-6 text-center font-cormorant text-smd font-bold'>
        SIGN IN
      </h1>
      <form className='flex flex-col gap-4'>
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
      </form>
    </div>
  )
}
