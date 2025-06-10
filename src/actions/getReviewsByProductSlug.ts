import { api } from './api'

export default async function getReviewsByProductSlug(slug: string) {
  try {
    const response = await api.get(`/reviews/${slug}`)

    return response.data
  } catch (error) {
    throw error
  }
}
