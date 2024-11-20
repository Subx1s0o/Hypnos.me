import { env } from '@/lib/env'
import { ProductCategories } from '@/types/product-categories.type'

interface GetProductsProps {
  category?: ProductCategories
}

export default async function getProducts({ category }: GetProductsProps) {
  const base_url = `${env.NEXT_PUBLIC_API_URL}/goods`
  if (category) {
    try {
      const products = await fetch(
        `${base_url}?limit=15&category=${category}`,
        {
          cache: 'no-cache',
          headers: {
            Accept: 'application/json'
          }
        }
      )

      return products.json()
    } catch (error) {
      throw error
    }
  } else {
    try {
      const products = await fetch(`${base_url}`, {
        cache: 'no-cache'
      })

      return products.json()
    } catch (error) {
      throw error
    }
  }
}
