import { env } from '@/lib/env'
import { ProductCategories } from '@/types/product-categories.type'
import axios from 'axios'

interface GetProductsProps {
  category?: ProductCategories
}

export default async function getProducts({ category }: GetProductsProps) {
  const base_url = `${env.NEXT_PUBLIC_API_URL}/goods`

  try {
    const response = await axios.get(
      `${base_url}?limit=10&category=${category}`
    )

    return response.data
  } catch (error) {
    throw error
  }
}
