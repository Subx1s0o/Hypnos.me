import { ChangePasswordType } from '@/types/user'
import { AxiosError, AxiosResponse } from 'axios'

import { NewPasswordType } from '@/components/forms/schema/user-data-schema'

import { apiSecure } from './apiSecure'

export async function changePassword(data: NewPasswordType) {
  try {
    const response: AxiosResponse = await apiSecure.post(
      '/auth/change-password',
      {
        ...data
      }
    )

    return response.data
  } catch (error: unknown) {
    console.error('Error during password changing:', error)

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
