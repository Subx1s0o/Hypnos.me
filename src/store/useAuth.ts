import { Auth } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthStore = {
  auth: Auth | null
  setAuth: (data: Auth) => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      auth: null,
      setAuth: data => set({ auth: data })
    }),
    {
      name: 'auth'
    }
  )
)
