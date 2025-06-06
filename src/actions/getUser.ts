import { apiSecure } from './apiSecure'

export default async function getUser() {
  try {
    const response = await apiSecure.get('/user')

    return response.data
  } catch (error) {
    throw error
  }
}
