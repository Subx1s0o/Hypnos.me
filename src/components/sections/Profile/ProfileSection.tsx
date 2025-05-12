import { PropsWithChildren } from 'react'

import ProfileNavigation from './components/ProfileNavigation'
import ProfileTitle from './components/ProfileTitle'

export default function ProfileSection({ children }: PropsWithChildren) {
  return (
    <section className='mx-auto mb-[64px] w-full max-w-screen-xxl px-4 md:mb-[56px] md:px-10'>
      <ProfileTitle />
      <div className='min-h-[calc(100vh-300px)] smd:grid smd:grid-cols-2'>
        <ProfileNavigation />
        {children}
      </div>
    </section>
  )
}
