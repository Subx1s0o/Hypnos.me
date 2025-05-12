'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Icon from '@/components/ui/Icon'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className='relative flex flex-col items-center py-[80px]'>
      <Image
        src='/images/NotFound/404.avif'
        alt='404'
        height={140}
        width={305}
        className='mb-16 md:h-auto md:w-[366px]'
      />
      <p className='mb-[236px] text-center text-smd md:mb-[100px]'>
        Page not found
      </p>
      <button
        className='relative z-30 flex w-[237px] items-center justify-center rounded-[3px] bg-black
          px-[18px] py-5 text-xs font-extrabold text-white outline-none transition-colors
          lg:hover:bg-black-hover lg:focus-visible:bg-black-hover'
        onClick={() => router.back()}>
        <p className=''>Go back</p>
        <div
          className='absolute right-4 top-4 flex size-6 rotate-90 items-center justify-center
            rounded-full bg-white text-black'>
          <Icon
            id='icon-arrow'
            h={14}
            w={14}
          />
        </div>
      </button>
      <div className='hidden h-[200px] md:block'></div>
    </div>
  )
}
