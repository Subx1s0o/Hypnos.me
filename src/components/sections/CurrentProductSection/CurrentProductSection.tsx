'use client'

import getProductBySlug from '@/actions/getProductBySlug'
import { useQuery } from '@tanstack/react-query'

interface CurrentProductSectionProps {
  slug: string
}

export default function CurrentProductSection({
  slug
}: CurrentProductSectionProps) {
  const { data, error } = useQuery({
    queryKey: ['products', slug],
    staleTime: 1000 * 60 * 60 * 24 * 3,
    queryFn: async () => await getProductBySlug(slug)
  })

  console.log(data, error)

  return <section>CurrentProductSection</section>
}
