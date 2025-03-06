'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/ui/FormInput'
import Icon from '@/components/ui/Icon'

import { NewPasswordSchema, NewPasswordType } from '../schema/user-data-schema'

export default function ChangePasswordForm() {
  const { control, handleSubmit } = useForm<NewPasswordType>({
    resolver: zodResolver(NewPasswordSchema)
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const onSubmit = () => {}
  return (
    <>
      <form
        className='flex flex-col gap-8'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-8 xxl:flex-row xxl:gap-4'>
          <div className='xxl:w1/2 w-full'>
            <FormInput
              label='NEW PASSWORD'
              name='newPassword'
              control={control}
              type={showPassword ? 'text' : 'password'}
              isPasswordField={true}
              showPassword={showPassword}
              toggleShowPassword={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className='xxl:w1/2 w-full'>
            <FormInput
              label='REPEAT NEW PASSWORD'
              name='repeatNewPassword'
              control={control}
              type={showRepeatPassword ? 'text' : 'password'}
              isPasswordField={true}
              showPassword={showRepeatPassword}
              toggleShowPassword={() =>
                setShowRepeatPassword(!showRepeatPassword)
              }
            />
          </div>
        </div>

        <button
          type='submit'
          className='flex w-full items-center rounded-[3px] bg-black px-4 py-[19px] text-xs
            font-extrabold uppercase text-white xxl:w-1/2'>
          <span className='flex-grow text-center'>Change Password</span>
          <span className='ml-2 flex size-6 items-center justify-center rounded-full bg-white'>
            <Icon
              id='icon-arrow'
              w={9}
              h={9}
              className='rotate-90 stroke-none text-black'
            />
          </span>
        </button>
      </form>
    </>
  )
}
