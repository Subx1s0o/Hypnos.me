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
  const [emblaRef] = useEmblaCarousel({
    breakpoints: {
    "(min-width: 1024px)": { dragFree: true },
    "(min-width: 768px)": { slidesToScroll: 2 },
    "(min-width: 0px)": { slidesToScroll: "auto" },
  },
    })
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
    <div className=" space-x-4 px-4 md:px-10 overflow-hidden" ref={emblaRef}>
      <ul className=" flex -ml-4">
        {data?.data.map((product: any) => (
     
            <ProductItem product={product} key={product.id} />
       
        ))}
      </ul>
    </div>
  )
}
