import { PropsWithChildren } from 'react'
import getProducts from '@/actions/getProducts'
import { ProductCategories } from '@/types'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import DescriptionHeader from './components/DescriptionHeader'
import ProductList from './components/ProductList'

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
      className='overflow-hidden py-[60px] lg:py-[70px]'>
      <DescriptionHeader
        title={category.charAt(0).toUpperCase() + category.slice(1)}>
        {children}
      </DescriptionHeader>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductList category={category} />
      </HydrationBoundary>
    </section>
  )
}
