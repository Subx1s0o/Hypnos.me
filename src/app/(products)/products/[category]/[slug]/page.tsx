import getProductBySlug from '@/actions/getProductBySlug'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import CurrentProductSection from '@/components/sections/Catalogue/CurrentProductSection/CurrentProductSection'

export default async function CataloguePage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products', slug],
    staleTime: 1000 * 60 * 60 * 24 * 3,
    queryFn: async () => await getProductBySlug(slug)
  })

  return (
    <main className='max-w-screen-3xl mx-auto'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CurrentProductSection slug={slug} />
      </HydrationBoundary>
    </main>
  )
}
