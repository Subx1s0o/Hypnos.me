import React from 'react'

interface SpanBtnProps {
  children: React.ReactNode
  className?: string
}
const BlackBadge: React.FC<SpanBtnProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`flex max-h-9 items-center justify-center rounded-full bg-black p-2 font-manrope
        text-xs uppercase text-white ${className}`}>
      {children}
    </div>
  )
}

export default BlackBadge
