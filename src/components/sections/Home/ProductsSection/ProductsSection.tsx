import { PropsWithChildren } from 'react'
import getProducts from '@/actions/getProducts'
import { ProductCategories } from '@/types'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import ProductsMainComponent from './ProductsMainComponent'

type ProductSectionProps = PropsWithChildren & {
  category: ProductCategories
  id?: string
}

export default async function ProductSection({
  category,
  children,
  id
}: ProductSectionProps) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products', category],
    queryFn: () => getProducts({ category }),
    staleTime: 1000 * 60 * 60 * 24 * 3
  })

  return (
    <section
      id={id}
      className='overflow-hidden py-10 md:py-[60px] lg:py-[70px]'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductsMainComponent category={category}>
          {children}
        </ProductsMainComponent>
      </HydrationBoundary>
    </section>
  )
}
