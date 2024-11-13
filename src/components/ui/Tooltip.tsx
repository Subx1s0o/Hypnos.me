import { cn } from '@/lib/utils'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

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
            'text-xs-heavy rounded-lg bg-white px-3 py-2 shadow-lg',
            className
          )}>
          {content}
          <RadixTooltip.Arrow className='fill-current text-white' />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}
