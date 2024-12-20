import { Product } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'

import ProductItem from './ProductItem'

interface ProductListProps {
  products: Product[] | undefined
}

export default function ProductList({ products }: ProductListProps) {
  const [emblaRef] = useEmblaCarousel({
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
          <ProductItem
            product={product}
            key={product.id}
          />
        ))}
      </ul>
    </div>
  )
}
