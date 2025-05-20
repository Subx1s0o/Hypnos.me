import React from 'react'
import getUser from '@/actions/getUser'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import BonusesPage from '@/components/sections/Profile/ProfilePages/BonusesPage'

export default function Bonuses() {
  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BonusesPage />
    </HydrationBoundary>
  )
}
