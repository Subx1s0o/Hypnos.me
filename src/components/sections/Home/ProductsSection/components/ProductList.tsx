import { Product, ProductCategories } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'

import ProductCard from '@/components/sections/Home/ProductsSection/ProductCard'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

interface ProductListProps {
  products: Product[] | undefined
  category?: ProductCategories
}

export default function ProductList({ products, category }: ProductListProps) {
  const [emblaRef] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    breakpoints: {
      '(min-width: 1024px)': { dragFree: true },
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 0px)': { slidesToScroll: 'auto' }
    }
  })

  return (
    <div
      className='space-x-4 overflow-hidden'
      ref={emblaRef}>
      <ul className='-ml-4 flex'>
        {products?.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
        <li className='aspect-square flex-1 pl-4 sm:flex-1/2 md:flex-1/3 lg:flex-1/4'>
          <Link href={`catalogue/${category}`}>
            <div className='relative mb-3 max-h-[460px] bg-grey-light'>
              <div className='relative aspect-[1] bg-grey-200'>
                <ImageWithFallback
                  src='/images/products/decorative/see-more.avif'
                  fill
                  alt='see more image'
                />
              </div>
            </div>
            <h3 className='mb-2 text-base-big font-medium text-black'>
              See more {category} products...
            </h3>
          </Link>
        </li>
      </ul>
    </div>
  )
}
