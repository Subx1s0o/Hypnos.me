'use client'

import getUser from '@/actions/getUser'
import { useQuery } from '@tanstack/react-query'

import UserDataForm from '@/components/forms/Profile/UserDataForm'
import Icon from '@/components/ui/Icon'

export default function PersonalData() {
  const { data, error } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60
  })

  return (
    <section>
      <span className='mb-2 inline-block rounded-full bg-grey-light p-[7px]'>
        <Icon
          id='icon-profile-filled'
          w={16}
          h={16}
          className='text-black'
        />
      </span>
      <h2 className='mb-8 text-base-big'>Your Information</h2>

      <div className='flex flex-col gap-4'>
        <UserDataForm data={data} />
      </div>
    </section>
  )
}
