import { PropsWithChildren } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import ProfileSection from '@/components/sections/Profile/ProfileSection'

export default function ProfilePage({ children }: PropsWithChildren) {
  const isAuthenticated = cookies().get('isAuthenticated')?.value

  if (!isAuthenticated) {
    return redirect('/sign-up')
  }

  return <ProfileSection>{children}</ProfileSection>
}
