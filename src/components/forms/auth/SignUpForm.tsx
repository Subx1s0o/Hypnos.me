'use client'

import { register } from '@/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Checkbox from '@radix-ui/react-checkbox'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
  SignUpSchema,
  SignUpType
} from '@/components/forms/schema/auth-schemas'
import FormInput from '@/components/ui/FormInput'
import Icon from '@/components/ui/Icon'

export default function SignUpForm() {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema)
  })
  const isSubscribed = watch('subscribed', true)
  const router = useRouter()
  const onSubmit: SubmitHandler<SignUpType> = async data => {
    await register(data)
    router.replace('/')
  }

  return (
    <div className='w-full sm:w-[370px] xxl:w-[450px]'>
      <h1 className='mb-5 text-center font-cormorant text-smd font-bold'>
        SIGN UP
      </h1>
      <form
        className='flex flex-col gap-5'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4'>
          <FormInput
            control={control}
            label='First name'
            placeholder='John Conan'
            name='firstName'
          />
          <FormInput
            control={control}
            label='Second name'
            placeholder='John Conan'
            name='secondName'
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
        <div className='relative flex'>
          <Checkbox.Root
            className='absolute left-0 top-1 flex size-6 items-center justify-center rounded border
              border-black'
            defaultChecked
            checked={!!isSubscribed}
            onCheckedChange={checked =>
              setValue('subscribed', checked === true)
            }
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
