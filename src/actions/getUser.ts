import { api } from './api'

export default async function getUser() {
  try {
    const response = await api.get('/users/me')

    return response.data
  } catch (error) {
    throw error
  }
}
