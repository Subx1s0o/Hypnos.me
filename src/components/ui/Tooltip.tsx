import React from 'react'
import { cn } from '@/lib/cn'
import * as RadixTooltip from '@radix-ui/react-tooltip'

interface TooltipProps {
  children: React.ReactNode
  content: string | React.ReactNode
  className?: string
}

export function Tooltip({ children, content, className = '' }: TooltipProps) {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className={cn(
            'rounded-lg bg-white px-3 py-2 text-xs-heavy shadow-lg',
            className
          )}>
          {content}
          <RadixTooltip.Arrow className='fill-current text-white' />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}
