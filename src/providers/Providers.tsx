'use client'

import { PropsWithChildren } from 'react'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ModalProvider } from '@/components/context/ModalContext'

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <TooltipProvider
          delayDuration={0}
          skipDelayDuration={0}>
          {children}
        </TooltipProvider>
      </ModalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
