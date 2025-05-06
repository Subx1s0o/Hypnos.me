import { ProductCategories } from '@/types/product-categories.type'

import { api } from './api'

interface GetProductsProps {
  category?: ProductCategories
}

export default async function getProducts({ category }: GetProductsProps) {
  try {
    const response = await api.get(`/goods?limit=10&category=${category}`)

    return response.data
  } catch (error) {
    throw error
  }
}
