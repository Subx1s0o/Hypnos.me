'use client'

import { useState } from 'react'
import { changePassword } from '@/actions/changePassword'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/ui/FormInput'
import Icon from '@/components/ui/Icon'

import { NewPasswordSchema, NewPasswordType } from '../schema/user-data-schema'

export default function ChangePasswordForm() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewPasswordType>({
    resolver: zodResolver(NewPasswordSchema)
  })
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const onSubmit = async (data: NewPasswordType) => {
    const passwordRes = await changePassword(data)

    if (passwordRes.error) {
      alert(passwordRes.error.message)

      return
    }

    if (passwordRes.success) {
      alert('Password changed successfully')
    }
    reset({ oldPassword: '', newPassword: '' })
  }

  return (
    <>
      <form
        className='flex flex-col gap-8'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-8 xxl:flex-row xxl:gap-4'>
          <div className='w-full xxl:w-1/2'>
            <FormInput
              label='OLD PASSWORD'
              name='oldPassword'
              control={control}
              type={showOldPassword ? 'text' : 'password'}
              isPasswordField={true}
              isPasswordShown={showOldPassword}
              toggleShowPassword={() => setShowOldPassword(!showOldPassword)}
            />
          </div>

          <div className='w-full xxl:w-1/2'>
            <FormInput
              label='NEW PASSWORD'
              name='newPassword'
              control={control}
              type={showNewPassword ? 'text' : 'password'}
              isPasswordField={true}
              isPasswordShown={showNewPassword}
              toggleShowPassword={() => setShowNewPassword(!showNewPassword)}
            />
          </div>
        </div>

        <button
          type='submit'
          className='flex w-full items-center rounded-[3px] bg-black px-4 py-[19px] text-xs
            font-extrabold uppercase text-white transition-colors hover:bg-black-hover
            focus:bg-black-hover xxl:w-1/2'>
          {isSubmitting ? (
            <p className='grow text-center'>
              Changing...<span className='loader'></span>
            </p>
          ) : (
            <p className='grow text-center'>Change Password</p>
          )}
          <div className='ml-2 flex size-6 items-center justify-center rounded-full bg-white'>
            <Icon
              id='icon-arrow'
              w={9}
              h={9}
              className='rotate-90 stroke-none text-black'
            />
          </div>
        </button>
      </form>
    </>
  )
}
