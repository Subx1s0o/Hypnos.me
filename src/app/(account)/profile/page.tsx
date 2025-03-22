import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function ProfilePage() {
  const isAuthenticated = cookies().get('isAuthenticated')?.value

  if (!isAuthenticated) {
    return redirect('/sign-up')
  }

  return <div>ProfilePage</div>
}
