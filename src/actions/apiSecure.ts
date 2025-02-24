import { env } from '@/lib/env'
import axios from 'axios'
import Cookies from 'js-cookie'

import { api } from './api'

const getAccessToken = () => {
  return Cookies.get('accessToken') || ''
}

const getRefreshToken = () => {
  return Cookies.get('refreshToken') || ''
}

export const apiSecure = axios.create({
  baseURL: env.API_URL
})

apiSecure.interceptors.request.use(config => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

apiSecure.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = getRefreshToken()
        const response = await api.post('/auth/refresh', { refreshToken })

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          response.data

        Cookies.set('accessToken', newAccessToken)
        Cookies.set('refreshToken', newRefreshToken)

        return apiSecure(originalRequest)
      } catch (error) {
        return Promise.reject(error)
      }
    }

    return Promise.reject(error)
  }
)
