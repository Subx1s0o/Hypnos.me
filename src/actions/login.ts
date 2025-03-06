'use server'

import { Auth } from '@/types'
import { User } from '@/types/user'
import { AxiosError, AxiosResponse } from 'axios'
import { cookies } from 'next/headers'

import { SignInType } from '@/components/forms/schema/auth-schemas'

import { api } from './api'

export async function login(data: SignInType) {
  try {
    const response: AxiosResponse<Auth & { user: User }> = await api.post(
      '/auth/sign-in',
      {
        ...data,
        cart: []
      }
    )

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, ...tokens } = response.data

    cookies().set('accessToken', tokens.accessToken)
    cookies().set('refreshToken', tokens.refreshToken)
    cookies().set('isAuthenticated', 'true')

    return { success: true }
  } catch (error: unknown) {
    console.error('Error during login:', error)

    if (error instanceof AxiosError) {
      return {
        error: {
          message: error.response?.data?.message || 'Unknown error',
          status: error.response?.status || 500
        }
      }
    }

    return {
      error: {
        message: 'An unexpected error occurred',
        status: 500
      }
    }
  }
}
