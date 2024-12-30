import { env } from '@/lib/env'
import axios from 'axios'

export default async function getProductBySlug(slug: string) {
  const base_url = `${env.NEXT_PUBLIC_API_URL}/goods`

  try {
    const response = await axios.get(`${base_url}/${slug}`)

    return response.data
  } catch (error) {
    throw error
  }
}
