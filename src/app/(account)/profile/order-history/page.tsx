import React from 'react'
import getUser from '@/actions/getUser'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import OrdersHistoryPage from '@/components/sections/Profile/ProfilePages/OrdersHistoryPage'

export default function OrderHistory() {
  const queryClient = new QueryClient()

  queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OrdersHistoryPage />
    </HydrationBoundary>
  )
}
