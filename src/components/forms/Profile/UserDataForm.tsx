'use client'

import { useEffect } from 'react'
import updateUserInfo from '@/actions/updateUserInfo'
import { User, UserDataBackendType } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import DateInput from '@/components/ui/DateInput'
import FormInput from '@/components/ui/FormInput'
import Icon from '@/components/ui/Icon'

import { UserDataSchema, UserDataType } from '../schema/user-data-schema'

export default function UserDataForm({ data }: { data: User | undefined }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<UserDataType>({
    resolver: zodResolver(UserDataSchema),
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      phone: '',
      birthday: ''
    },
    mode: 'onSubmit'
  })

  useEffect(() => {
    if (data) {
      reset({
        firstName: data.firstName || '',
        secondName: data.secondName || '',
        email: data.email || '',
        phone: data.phone || '',
        birthday: data.birthday ? String(data.birthday) : ''
      })
    }
  }, [data, reset])

  const onSubmit = async (data: UserDataBackendType) => {
    const dataToSend = {
      ...data,
      birthday: data.birthday === '' ? null : data.birthday
    }

    const updateRes = await updateUserInfo(dataToSend)
    console.log(data)

    if (updateRes.error) {
      alert(updateRes.error.message)

      return
    }

    if (updateRes.success) {
      alert('User info updated successfully')
    }
  }

  return (
    <form
      className='flex flex-col gap-8'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-8 xxl:w-full xxl:flex-row xxl:gap-4'>
        <div className='w-full xxl:w-1/2'>
          <FormInput
            placeholder='First name'
            label='FIRST NAME'
            name='firstName'
            control={control}
          />
        </div>
        <div className='w-full xxl:w-1/2'>
          <FormInput
            placeholder='Second name'
            label='SECOND NAME'
            name='secondName'
            control={control}
          />
        </div>
      </div>
      <FormInput
        placeholder='Email'
        label='EMAIL'
        name='email'
        control={control}
      />
      <FormInput
        placeholder='Phone number'
        label='PHONE'
        name='phone'
        control={control}
        className='xxl:w-1/2'
      />

      <DateInput
        placeholder='Birthday date'
        defaultValue={data?.birthday}
        label='BIRTHDAY'
        name='birthday'
        control={control}
      />
      <button
        type='submit'
        className='flex w-full items-center rounded-[3px] bg-black px-4 py-[19px] text-xs
          font-extrabold uppercase text-white transition-colors hover:bg-black-hover
          focus:bg-black-hover xxl:w-1/2'>
        {isSubmitting ? (
          <p className='grow text-center'>
            Saving...<span className='loader'></span>
          </p>
        ) : (
          <p className='grow text-center'>Save changes</p>
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
  )
}
