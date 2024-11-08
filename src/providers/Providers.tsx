import { PropsWithChildren } from 'react'
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
export default function Providers({ children }: PropsWithChildren) {
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
