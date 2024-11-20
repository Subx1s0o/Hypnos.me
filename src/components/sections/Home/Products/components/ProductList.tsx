'use client'

import getProducts from '@/actions/getProducts'
import { ProductCategories } from '@/types/product-categories.type'
import { useQuery } from '@tanstack/react-query'
import ProductItem from './ProductItem'
import useEmblaCarousel from 'embla-carousel-react'

interface ProductListProps {
  category: ProductCategories
}

export default function ProductList({ category }: ProductListProps) {
  const [emblaRef] = useEmblaCarousel()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products', category],
    queryFn: async () => getProducts({ category }),
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

  if (data?.statusCode === 500) {
    return <p>Error 500</p>
  }

  return (
    <div className="overflow-x-auto px-4 md:px-10" ref={emblaRef}>
      <ul className="embla__container flex gap-4">
        {data?.data.map((product: any) => (
     
            <ProductItem products={product} key={product.id} />
       
        ))}
      </ul>
    </div>
  )
}
