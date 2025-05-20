import React from 'react'
import { SpriteTypes } from '@/types'
import * as Accordion from '@radix-ui/react-accordion'

import Icon from '@/components/ui/Icon'

type AccordionItemProps = {
  value: string
  iconId: SpriteTypes
  title: string
  children: React.ReactNode
}

export default function AccordionItem({
  value,
  iconId,
  title,
  children
}: AccordionItemProps) {
  return (
    <Accordion.Item value={value}>
      <Accordion.Trigger
        className={
          'flex w-full items-center gap-3 border-b border-grey-200 bg-grey-light p-[22px]'
        }>
        <div className='bg-brown-hover flex size-8 items-center justify-center rounded-full'>
          <Icon
            w={18}
            h={18}
            id={iconId}
            className='text-white'
          />
        </div>
        <p className='text-base font-semibold'>{title}</p>
      </Accordion.Trigger>
      <Accordion.Content>{children}</Accordion.Content>
    </Accordion.Item>
  )
}
