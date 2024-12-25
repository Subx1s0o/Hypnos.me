import { Product } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'

import ProductCard from '@/components/ui/ProductCard'

interface ProductListProps {
  products: Product[] | undefined
}

export default function ProductList({ products }: ProductListProps) {
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
      className='space-x-4 overflow-hidden px-4 md:px-10'
      ref={emblaRef}>
      <ul className='-ml-4 flex'>
        {products?.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </div>
  )
}
