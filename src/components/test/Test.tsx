'use client'
import { useAuthStore } from '@/store/useAuth'

export default function LogoutTest() {
  const auth = useAuthStore(state => state.auth)
  const logout = useAuthStore(state => state.logout)

  return (
    <div>
      <p>Текущий auth: {JSON.stringify(auth)}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
