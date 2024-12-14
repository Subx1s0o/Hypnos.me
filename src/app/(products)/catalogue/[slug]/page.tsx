import { QueryClient } from '@tanstack/react-query'

export default async function CataloguePage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products', slug],
    staleTime: 1000 * 60 * 60 * 60,
    queryFn: 
  })

  return <div>{slug}</div>
}
