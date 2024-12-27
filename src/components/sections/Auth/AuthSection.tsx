'use client'

import { PropsWithChildren } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Media, MediaContextProvider } from '@/components/helpers/Media'
import Icon from '@/components/ui/Icon'

export default function AuthSection({ children }: PropsWithChildren) {
  const router = useRouter()

  return (
    <section className='relative h-[calc(100vh-140px)] gap-[50px] xl:pl-[105px] xl:pr-[155px]'>
      <MediaContextProvider>
        <Media greaterThanOrEqual='sm'>
          <button
            className='absolute top-[50px] sm:left-4 md:left-6'
            onClick={() => router.back()}>
            <Icon
              id='icon-arrow'
              w={28}
              h={28}
              className='-rotate-90 p-5'
            />
          </button>
        </Media>
      </MediaContextProvider>
      <div
        className='mx-auto flex h-full max-w-[1500px] items-center justify-center px-4 lg:px-10
          xl:grid xl:grid-cols-2 xl:items-center'>
        <div className='flex justify-center'>
          <MediaContextProvider>
            <Media greaterThanOrEqual='xl'>
              <Image
                src='/images/auth/rings.avif'
                alt={'Rings Photo'}
                width={585}
                height={524}
                priority
              />
            </Media>
            <Media at='lg'>
              <Image
                src='/images/auth/rings.avif'
                alt={'Rings Photo'}
                width={260}
                height={240}
                className='absolute bottom-[5%] left-[5%]'
                priority
              />
              <Image
                src='/images/auth/silver-rings.avif'
                alt={'Rings Photo'}
                width={260}
                height={240}
                className='absolute right-[5%] top-[5%]'
                priority
              />
            </Media>
          </MediaContextProvider>
        </div>
        <div className='flex xl:justify-end'>{children}</div>
      </div>
    </section>
  )
}
