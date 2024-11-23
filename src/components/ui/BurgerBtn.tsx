'use client'

import React from 'react'


interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onClick: () => void
  children: React.ReactNode
  className: string
}

export default function BurgerBtn({
  children,
  className,
  onClick,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <div>
      <button
        onClick={onClick}
        type='button'
        className={className || ''}
        {...props}>
        {children}
      </button>
    </div>
  )
}

