import React from 'react'

interface SpanBtnProps {
  children: React.ReactNode
  className?: string
}
const BlackBadge: React.FC<SpanBtnProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-black p-6 font-manrope text-xs
        uppercase text-white ${className}`}>
      {children}
    </div>
  )
}

export default BlackBadge
