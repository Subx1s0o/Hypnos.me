import { useAuthStore } from '@/store/useAuth'
import { useUserStore } from '@/store/userStore'
import { Auth } from '@/types'
import { User } from '@/types/user'
import { AxiosResponse } from 'axios'
import Cookie from 'js-cookie'

import { SignInType } from '@/components/forms/schema/auth-schemas'

import { api } from './api'

export async function login(data: SignInType) {
  const cart = localStorage.getItem('cart') ?? []

  try {
    const response: AxiosResponse<Auth & { user: User }> = await api.post(
      '/auth/sign-in',
      {
        ...data,
        cart
      }
    )

    const { setUser } = useUserStore.getState()
    const { setAuth } = useAuthStore.getState()

    const { user, ...tokens } = response.data

    setUser(user)
    setAuth(tokens)
    Cookie.set('isAuthenticated', 'true')

    return
  } catch (error) {
    throw error
  }
}
