import { UserDataBackendType } from '@/types/user'

import { apiSecure } from './apiSecure'

export default async function updateUserInfo(data: UserDataBackendType) {
  try {
    const response = await apiSecure.put('/user', {
      ...data
    })

    return response.data
  } catch (error) {
    throw error
  }
}
