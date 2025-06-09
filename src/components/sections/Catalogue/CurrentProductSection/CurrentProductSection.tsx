'use client'

import { useEffect } from 'react'
import getProductBySlug from '@/actions/getProductBySlug'
import getReviewsByProductSlug from '@/actions/getReviewsByProductSlug'
import usePreviouslyWatched from '@/store/previouslyWatched/previouslyWatched'
import { Product } from '@/types'
import { Review } from '@/types/review'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'

import Breadcrumb from '@/components/features/BreadCrumb'
import { Media, MediaContextProvider } from '@/components/helpers/Media'
import Loader from '@/components/ui/Loader'

import BannerSection from './BannerSection'
import PreviouslyWhatchedSection from './components/Articles/PreviouslyWatched/PreviouslyWhatchedSection'
import ReviewsBlock from './components/Articles/ProductDescription/components/ReviewsBlock'
import ProductDescription from './components/Articles/ProductDescription/ProductDescription'
import ProductImages from './components/Articles/ProductImages/ProductImages'
import OfferSlide from './components/Articles/UniqueOffers/OfferSlide'
import OffersSwiper from './components/Articles/UniqueOffers/OffersSwiper'

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

  const {
    data: reviews,
    isLoading: isReviewsLoading,
    error: reviewsError
  } = useQuery<{ data: Review[] }>({
    queryKey: ['reviews', slug],
    staleTime: 1000 * 60 * 60 * 24 * 3,
    queryFn: async () => await getReviewsByProductSlug(data?.slug ?? '')
  })

  const { addToPreviouslyWatched, previouslyWatched } = usePreviouslyWatched()

  useEffect(() => {
    if (data) {
      addToPreviouslyWatched(data)
    }
  }, [data, addToPreviouslyWatched])

  if (error) notFound()
  if (isLoading) return <Loader />

  return (
    <section className='px-3 md:px-10'>
      <MediaContextProvider>
        <div
          className='mb-[137px] flex w-full flex-col items-start gap-4 md:mb-[120px] md:grid
            md:grid-cols-2 md:gap-5 xl:mb-[80px] xl:grid-cols-[1fr_2fr_2fr]'>
          {/* First column */}

          <Media
            className='flex h-full flex-col gap-4'
            greaterThanOrEqual='xl'>
            <div className='flex flex-col gap-4'>
              <OfferSlide
                iconId='icon-vector-samples'
                title='Samples of rings in silver'
                buttonText='Free'
                text='Try on and wear sample rings for up to 7 days'
              />
              <OfferSlide
                iconId='icon-vector-polishing'
                title='Polishing and Cleaning'
                buttonText='Indefinitely'
                text='With your purchase, you get a certificate for service'
                className='bg-gradient-to-bl from-[#F3F1EF00] to-[#F3F1EF]'
              />
              <OfferSlide
                iconId='icon-vector-engraving'
                title='Engraving'
                buttonText='Flawless'
                text='Take advantage of our online font selection service'
              />
            </div>
          </Media>

          {/* Second column */}

          <div className='flex w-full flex-col gap-4 md:gap-8'>
            <Media
              lessThan='md'
              className='!mt-6'>
              <Breadcrumb />
            </Media>
            <ProductImages media={data?.media} />
            <Media greaterThanOrEqual='md'>
              <div className='flex w-full flex-col'>
                <ReviewsBlock
                  slug={slug}
                  id='reviewsBlock'
                  reviews={reviews?.data}
                  isReviewsLoading={isReviewsLoading}
                  isReviewsError={!!reviewsError}
                />
                <Media lessThan='xl'>
                  <OffersSwiper />
                </Media>
              </div>
            </Media>
            <Media lessThan='md'>
              <ProductDescription
                product={data}
                reviews={reviews?.data.length}
              />
              <ReviewsBlock
                slug={slug}
                id='reviewsBlock'
                reviews={reviews?.data}
                isReviewsLoading={isReviewsLoading}
                isReviewsError={!!reviewsError}
              />
              <OffersSwiper />
            </Media>
          </div>

          {/* Third column */}

          <Media greaterThanOrEqual='md'>
            <ProductDescription
              product={data}
              reviews={reviews?.data.length}
            />
          </Media>
        </div>

        {/* The row felow columns */}
        
        <div>
          <PreviouslyWhatchedSection products={previouslyWatched} />
        </div>
      </MediaContextProvider>
    </section>
  )
}
