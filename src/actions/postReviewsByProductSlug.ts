import { ReviewFormValues } from '@/types/review'

import { api } from './api'

export default async function postReviewsByProductSlug(
  slug: string,
  reviewData: ReviewFormValues
) {
  try {
    const response = await api.post(`/reviews/${slug}`, {
      ...reviewData
    })

    return response.data
  } catch (error) {
    throw error
  }
}
