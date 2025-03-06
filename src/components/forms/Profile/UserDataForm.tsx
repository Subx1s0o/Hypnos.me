'use client'

import { User } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/ui/FormInput'

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
        <div className='xxl:w1/2 w-full'>
          <FormInput
            label='FIRST NAME'
            name='firstName'
            control={control}
            defaultValue={data?.firstName}
          />
        </div>
        <div className='xxl:w1/2 w-full'>
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
    </form>
  )
}
