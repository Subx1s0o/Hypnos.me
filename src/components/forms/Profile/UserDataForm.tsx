'use client'

import { User } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/ui/FormInput'
import Icon from '@/components/ui/Icon'

import { UserDataSchema, UserDataType } from '../schema/user-data-schema'

export default function UserDataForm({ data }: { data: User | undefined }) {
  const { control, handleSubmit } = useForm<UserDataType>({
    resolver: zodResolver(UserDataSchema)
  })

  const onSubmit = (data: UserDataType) => {
    console.log('Form submitted:', data)
  }

  return (
    <form
      className='flex flex-col gap-8'
      onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-8 xxl:w-full xxl:flex-row xxl:gap-4'>
        <div className='w-full xxl:w-1/2'>
          <FormInput
            label='FIRST NAME'
            name='firstName'
            control={control}
            defaultValue={data?.firstName}
          />
        </div>
        <div className='w-full xxl:w-1/2'>
          <FormInput
            label='SECOND NAME'
            name='secondName'
            control={control}
            defaultValue={data?.secondName}
          />
        </div>
      </div>
      <FormInput
        label='EMAIL'
        name='email'
        control={control}
        defaultValue={data?.email}
      />
      <FormInput
        label='PHONE'
        name='phone'
        control={control}
        defaultValue={data?.phone}
      />
      <FormInput
        label='BIRTHDAY'
        name='birthday'
        type='date'
        control={control}
        defaultValue={data?.birthday?.toISOString().split('T')[0]}
      />
      <button
        type='submit'
        className='flex w-full items-center rounded-[3px] bg-black px-4 py-[19px] text-xs
          font-extrabold uppercase text-white xxl:w-1/2'>
        <span className='grow text-center'>Save changes</span>
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
  )
}
