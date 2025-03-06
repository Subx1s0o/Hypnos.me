'use server'

import { cookies } from 'next/headers'

export const logout = () => {
  cookies().delete('accessToken')
  cookies().delete('refreshToken')
  cookies().delete('isAuthenticated')
}
