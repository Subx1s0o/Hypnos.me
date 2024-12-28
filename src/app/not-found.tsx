'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div
      className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col
        items-center'>
      <img src='/404.svg' alt='404' />
      <p className='mb-10 text-center text-xl'>
        Page not found
      </p>
      <button
        className='lg:hover:bg-brown-active lg:focus-visible:bg-brown-active rounded-xl bg-brown
          px-20 py-5 text-smd text-white outline-none transition-colors'
        onClick={() => router.back()}>
        Go back
      </button>
    </div>
  )
}
