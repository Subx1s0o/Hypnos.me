'use client'

import getProductBySlug from '@/actions/getProductBySlug'
import { Product } from '@/types'
import { useQuery } from '@tanstack/react-query'

import Breadcrumb from '@/components/features/BreadCrumb'
import { Media, MediaContextProvider } from '@/components/helpers/Media'

import BannerSection from './BannerSection'
import ProductDescription from './components/Articles/ProductDescription/ProductDescription'
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
      <div className='flex flex-col items-start gap-4 md:grid md:grid-cols-2'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <MediaContextProvider>
            <Media
              className='h-full'
              greaterThanOrEqual='xl'>
              <BannerSection
                src='/images/products/decorative/decorative-arrow.avif'
                title='Samples of rings in silver'
                spanText='Try for free'
                description='Try on and wear sample rings up to 7 days.'
                linkHref='/offers'
                linkText='See More Offers'
              />
            </Media>
            <Media
              lessThan='md'
              className='!mt-6'>
              <Breadcrumb />
            </Media>
          </MediaContextProvider>
          <ProductImages media={data?.media} />
        </div>
        <ProductDescription product={data} />
      </div>
    </section>
  )
}
