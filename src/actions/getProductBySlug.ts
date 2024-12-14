import { env } from '@/lib/env'
import { ProductCategories } from '@/types/product-categories.type'
import axios from 'axios'

interface GetProductsBySlugProps {
  slug?: ProductCategories
}

export default async function getProductsBySlug({
  slug
}: GetProductsBySlugProps) {
  const base_url = `${env.NEXT_PUBLIC_API_URL}/goods`

  try {
    const response = slug
      ? await axios.get(`${base_url}/${slug}`, {
          headers: {
            Accept: 'application/json'
          }
        })
      : await axios.get(base_url)

    return response.data
  } catch (error) {
    throw error
  }
}
