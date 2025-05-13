import { UserDataType } from '@/components/forms/schema/user-data-schema'

import { apiSecure } from './apiSecure'

export default async function updateUserInfo(data: UserDataType) {
  try {
    const response = await apiSecure.put('/user', {
      ...data
    })

    return response.data
  } catch (error) {
    throw error
  }
}
