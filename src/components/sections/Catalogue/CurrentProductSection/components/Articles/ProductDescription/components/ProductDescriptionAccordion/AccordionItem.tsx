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
        className={'flex w-full items-center gap-3 border-b bg-grey-200 p-4'}>
        <div className='rounded-full bg-brown p-[7px]'>
          <Icon
            w={18}
            h={18}
            id={iconId}
            className='text-white'
          />
        </div>
        <p className='text-base'>{title}</p>
      </Accordion.Trigger>
      <Accordion.Content>{children}</Accordion.Content>
    </Accordion.Item>
  )
}
