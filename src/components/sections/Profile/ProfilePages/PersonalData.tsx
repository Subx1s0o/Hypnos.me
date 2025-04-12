'use client'

import getUser from '@/actions/getUser'
import { useQuery } from '@tanstack/react-query'

import ChangePasswordForm from '@/components/forms/Profile/ChangePasswordForm'
import UserDataForm from '@/components/forms/Profile/UserDataForm'
import Icon from '@/components/ui/Icon'

export default function PersonalData() {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60
  })

  console.log(data)

  return (
    <section>
      <div className='mb-8 flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
        <span className='flex size-8 items-center justify-center rounded-full bg-grey-light'>
          <Icon
            id='icon-profile-filled'
            w={16}
            h={16}
            className='text-black'
          />
        </span>
        <h2 className='text-base-big xxl:font-semibold xxl:leading-[32px]'>
          Your Information
        </h2>
      </div>

      <div className='flex flex-col'>
        <UserDataForm data={data} />
      </div>
      <hr className='my-16 w-full md:my-12' />

      <div className='mb-8 flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
        <span className='flex size-8 items-center justify-center rounded-full bg-grey-light'>
          <Icon
            id='icon-lock-password'
            w={16}
            h={16}
            className='text-black'
          />
        </span>
        <h2 className='text-base-big xxl:font-semibold xxl:leading-[32px]'>
          Change Password
        </h2>
      </div>
      <ChangePasswordForm />
    </section>
  )
}
