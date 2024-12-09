'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div
      className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col
        items-center'>
      <h2 className='mb-10 text-center text-xl'>
        Sorry, this page with wasn&apos;t found, try to go another way
      </h2>
      <button
        className='lg:hover:bg-brown-active lg:focus-visible:bg-brown-active rounded-xl bg-brown
          px-20 py-5 text-smd text-white outline-none transition-colors'
        onClick={() => router.back()}>
        Go back
      </button>
    </div>
  )
}
