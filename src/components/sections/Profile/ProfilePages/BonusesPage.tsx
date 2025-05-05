'use client'

import getUser from '@/actions/getUser'
import { User } from '@/types/user'
import { useQuery } from '@tanstack/react-query'

import Icon from '@/components/ui/Icon'

import ProfileBonuseHistory from '../components/ProfileBonuseHistory'
import ProfileReferral from '../components/ProfileReferral'

export default function BonusesPage() {
  const { data: userData } = useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60
  })

  // console.log(userData)

  return (
    <section>
      <div className='mb-16 flex flex-col gap-8 font-manrope smd:mb-12'>
        <div className='flex flex-col gap-2 md:flex-row md:items-center md:gap-4'>
          <span className='flex size-8 items-center justify-center rounded-full bg-grey-light'>
            <Icon
              id='icon-wallet-filled'
              w={16}
              h={16}
              className='text-black'
            />
          </span>
          <h2 className='text-base-big xxl:font-semibold xxl:leading-[32px]'>
            Bonuses
          </h2>
        </div>
        <div className='flex w-full gap-4'>
          <div>
            <p className='text-sm text-grey-normal'>Your bonuses</p>
            <p className='p-0 text-left text-smd xxs:text-[48px] smd:text-lg smd:font-normal'>
              {userData?.bonuses}
            </p>
          </div>
          <div className='self-end p-0 text-left text-smd xxs:text-[48px] smd:text-lg smd:font-normal'>
            =
          </div>
          <div>
            <p className='text-sm text-grey-normal'>100 bonuses = 1 $</p>
            <p className='p-0 text-left text-smd xxs:text-[48px] smd:text-lg smd:font-normal'>
              {userData?.bonuses} $
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
          <div className='rounded-[3px] bg-grey-light p-[18px]'>
            <p className='mb-[26px] text-base-big font-semibold'>20%</p>
            <p className='text-sm'>Of order can be payed by bonuses</p>
          </div>
          <div className='rounded-[3px] bg-grey-light p-[18px]'>
            <p className='mb-[26px] text-base-big font-semibold'>5%</p>
            <p className='text-sm'>
              You can receive from each order for Bonuses
            </p>
          </div>
        </div>
      </div>
      <hr className='mb-16 w-full smd:mb-12' />
      <ProfileBonuseHistory userData={userData} />
      <hr className='mb-16 w-full smd:mb-12' />
      <ProfileReferral userData={userData} />
    </section>
  )
}
