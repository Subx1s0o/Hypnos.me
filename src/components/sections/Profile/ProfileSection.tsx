import { PropsWithChildren } from 'react'

import ProfileNavigation from './components/ProfileNavigation'
import ProfileTitle from './components/ProfileTitle'

export default function ProfileSection({ children }: PropsWithChildren) {
  return (
    <section className='mx-auto max-w-screen-xxl px-4 md:px-10'>
      <ProfileTitle />
      <div className='smd:grid smd:grid-cols-2'>
        <ProfileNavigation />
        {children}
      </div>
    </section>
  )
}
