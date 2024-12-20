'use client'

import { ReactNode } from 'react'
import getProducts from '@/actions/getProducts'
import { Product, ProductCategories } from '@/types'
import { useQuery } from '@tanstack/react-query'

import ProductList from './components/ProductList'
import ProductsDescriptionHeader from './components/ProductsDescriptionHeader'

export default function ProductMainComponent({
  category,
  children
}: {
  children: ReactNode
  category: ProductCategories
}) {
  const { data, isError, error } = useQuery<{
    data: Product[]
    totalPages: number
  }>({
    queryKey: ['products', category],
    queryFn: async () => getProducts({ category })
  })

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    )
  }

  if (isError) return <p>Error loading {category} products</p>

  return data?.data && data?.data.length > 1 ? (
    <>
      <ProductsDescriptionHeader
        title={category.charAt(0).toUpperCase() + category.slice(1)}>
        {children}
      </ProductsDescriptionHeader>
      <ProductList products={data?.data} />
    </>
  ) : null
}
