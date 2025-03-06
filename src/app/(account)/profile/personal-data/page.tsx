import React from 'react'
import getUser from '@/actions/getUser'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import PersonalData from '@/components/sections/Profile/ProfilePages/PersonalData'

export default function PersonalDataPage() {
  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PersonalData />
    </HydrationBoundary>
  )
}
