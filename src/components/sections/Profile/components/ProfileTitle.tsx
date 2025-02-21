'use client'

import { useRouter } from 'next/navigation'

import Icon from '@/components/ui/Icon'

export default function ProfileTitle() {
  const router = useRouter()

  return (
    <div className='relative flex flex-col items-center justify-center'>
      <div className='my-14 md:my-12'>
        <button onClick={() => router.replace('/')}>
          <Icon
            id='icon-arrow'
            className='absolute left-0 top-1/2 -translate-y-1/2 -rotate-90'
            h={20}
            w={20}
          />
        </button>
        <h1 className='text-center font-cormorant text-smd uppercase md:text-lg'>
          My Profile
        </h1>
      </div>
      <hr className='mb-12 hidden w-full bg-black md:block' />
    </div>
  )
}
