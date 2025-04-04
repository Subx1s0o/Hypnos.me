import { User } from '@/types/user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UserStore = {
  user: User | null
  setUser: (user: User | null) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    set => ({
      user: null,
      setUser: user => set({ user })
    }),
    {
      name: 'user'
    }
  )
)
