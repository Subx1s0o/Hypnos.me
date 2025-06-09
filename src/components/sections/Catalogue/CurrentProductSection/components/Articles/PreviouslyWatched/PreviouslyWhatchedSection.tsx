import { Product } from '@/types'

import 'swiper/css'

import ProductList from '@/components/sections/Home/ProductsSection/components/ProductList'

interface PreviouslyWhatchedProps {
  products: Product[]
}

export default function PreviouslyWhatchedSection({
  products
}: PreviouslyWhatchedProps) {
  return (
    <div className='mb-[120px]'>
      <h2 className='mb-8 text-center text-md'>Previously watched</h2>
      <ProductList products={products} />
    </div>
  )
}
