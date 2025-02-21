'use client'

import { User } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/ui/FormInput'

import UserDataSchema, { UserDataType } from '../schema/user-data-schema'

export default function UserDataForm({ data }: { data: User | undefined }) {
  const { control, handleSubmit } = useForm<UserDataType>({
    resolver: zodResolver(UserDataSchema),
    defaultValues: {
      firstName: data?.firstName,
      secondName: data?.secondName,
      email: data?.email,
      phone: data?.phone,
      birthday: data?.birthday ? data.birthday.toISOString().split('T')[0] : ''
    }
  })

  const onSubmit = (data: UserDataType) => {
    console.log('Form submitted:', data)
  }

  return (
    <form
      className='flex flex-col gap-8'
      onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='FIRST NAME'
        name='firstName'
        control={control}
      />
      <FormInput
        label='SECOND NAME'
        name='secondName'
        control={control}
      />
      <FormInput
        label='EMAIL'
        name='email'
        control={control}
      />
      <FormInput
        label='PHONE'
        name='phone'
        control={control}
      />
      <FormInput
        label='BIRTHDAY'
        name='birthday'
        type='date'
        control={control}
      />
    </form>
  )
}
