'use client'

import { PropsWithChildren } from 'react'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider
        delayDuration={0}
        skipDelayDuration={0}>
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  )
}
