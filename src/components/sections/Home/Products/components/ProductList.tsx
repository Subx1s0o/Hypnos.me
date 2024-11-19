'use client'

import getProducts from '@/actions/getProducts'
import { ProductCategories } from '@/types/product-categories.type'
import { useQuery } from '@tanstack/react-query'
import ProductItem from './ProductItem'

interface ProductListProps {
  category: ProductCategories
}

export default function ProductList({ category }: ProductListProps) {
  const { data, isLoading, isError, error } = useQuery({
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

  if (isLoading) {
    return <p>loaadiiinngg</p>
  }

  return (
    <ul className='px-4 md:px-10 flex gap-4'>
      {data?.data.map(
        (product: any) => (
          <ProductItem key={product.id} products={product}/>
        )
      )}
    </ul>
  )
}
