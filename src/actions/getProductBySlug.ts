import { api } from './api'

export default async function getProductBySlug(slug: string) {
  try {
    const response = await api.get(`/goods/${slug}`)

    return response.data
  } catch (error) {
    throw error
  }
}
