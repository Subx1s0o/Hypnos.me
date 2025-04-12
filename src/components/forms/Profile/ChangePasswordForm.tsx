'use client'

import { useState } from 'react'
import { changePassword } from '@/actions/changePassword'
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

  const onSubmit = async (data: NewPasswordType) => {
    const passwordRes = await changePassword(data)
    console.log(data)

    if (passwordRes.error) {
      alert(passwordRes.error.message)

      return
    }
  }

  return (
    <>
      <form
        className='flex flex-col gap-8'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-8 xxl:flex-row xxl:gap-4'>
          <div className='w-full xxl:w-1/2'>
            <FormInput
              label='NEW PASSWORD'
              name='oldPassword'
              control={control}
              type={showPassword ? 'text' : 'password'}
              isPasswordField={true}
              isPasswordShown={showPassword}
              toggleShowPassword={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className='w-full xxl:w-1/2'>
            <FormInput
              label='REPEAT NEW PASSWORD'
              name='newPassword'
              control={control}
              type={showRepeatPassword ? 'text' : 'password'}
              isPasswordField={true}
              isPasswordShown={showRepeatPassword}
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
          <span className='grow text-center'>Change Password</span>
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
