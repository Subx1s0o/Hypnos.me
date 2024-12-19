'use client'

import getProducts from '@/actions/getProducts'
import { Product } from '@/types'
import { ProductCategories } from '@/types/product-categories.type'
import { useQuery } from '@tanstack/react-query'
import useEmblaCarousel from 'embla-carousel-react'

import ProductItem from './ProductItem'

interface ProductListProps {
  category: ProductCategories
}

export default function ProductList({ category }: ProductListProps) {
  const [emblaRef] = useEmblaCarousel({
    breakpoints: {
      '(min-width: 1024px)': { dragFree: true },
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 0px)': { slidesToScroll: 'auto' }
    }
  })
  const { data, isLoading, isError, error } = useQuery<{
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

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) return <p>Error loading products</p>

  return (
    <div
      className='space-x-4 overflow-hidden px-4 md:px-10'
      ref={emblaRef}>
      <ul className='-ml-4 flex'>
        {data?.data.map((product: Product) => (
          <ProductItem
            product={product}
            key={product.id}
          />
        ))}
      </ul>
    </div>
  )
}
