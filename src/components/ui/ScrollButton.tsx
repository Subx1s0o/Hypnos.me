'use client'

import { PropsWithChildren } from 'react'

type ScrollButtonProps = PropsWithChildren & {
  id: string
}

export default function ScrollButton({ id, children }: ScrollButtonProps) {
  const scrollToSection = () => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error(`Section with id "${id}" not found.`)
    }
  }

  return <button onClick={scrollToSection}>{children}</button>
}
