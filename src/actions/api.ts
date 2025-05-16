import type { AxiosError } from 'axios'

import { env } from '@/lib/env'
import { useAuthStore } from '@/store/useAuth'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.API_URL
})

const { auth } = useAuthStore.getState()
const accessToken = auth?.accessToken || ''
const refreshToken = auth?.refreshToken || ''

export const apiSecure = axios.create({
  baseURL: env.API_URL
})

apiSecure.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

apiSecure.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const response = await api.post('/auth/refresh', {
          refreshToken
        })

        const {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
          ...dates
        } = response.data

        useAuthStore.getState().setAuth({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
          ...dates
        })

        return apiSecure(originalRequest)
      } catch (refreshError) {
        const axiosError = refreshError as AxiosError<{ message: string }>
        const errorMessage =
          axiosError.response?.data?.message || axiosError.message || ''

        if (errorMessage.includes('JWT_EXPIRED')) {
          useAuthStore.getState().logout()
        }

        return Promise.reject(axiosError)
      }
    }

    return Promise.reject(error)
  }
)
