'use client'

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import Icon from '@/components/ui/Icon'

interface BurgerBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  id: string
  w: number
  h: number
  className?: string
  onClick?: () => void
}

export default function BurgerBtn({ id, w, h, className }: BurgerBtnProps) {
  return (
    <div>
      <button className={className || ''}>
        <Icon
          id={id}
          h={w}
          w={h}
        />
      </button>
    </div>
  )
}
