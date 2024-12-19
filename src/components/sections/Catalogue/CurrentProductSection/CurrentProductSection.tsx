'use client'

import getProductBySlug from '@/actions/getProductBySlug'
import { Product } from '@/types'
import { useQuery } from '@tanstack/react-query'

import ProductDescription from './components/Articles/ProductDescription'
import ProductImages from './components/Articles/ProductImages'

interface CurrentProductSectionProps {
  slug: string
}

export default function CurrentProductSection({
  slug
}: CurrentProductSectionProps) {
  const { data, error, isLoading } = useQuery<Product>({
    queryKey: ['products', slug],
    staleTime: 1000 * 60 * 60 * 24 * 3,
    queryFn: async () => await getProductBySlug(slug)
  })

  if (error) return <p>Error loading product data.</p>
  if (isLoading) return <p>loading</p>

  return (
    <section className='px-3 md:px-10'>
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
        <ProductImages media={data?.media} />
        <ProductDescription product={data} />
      </div>
    </section>
  )
}
