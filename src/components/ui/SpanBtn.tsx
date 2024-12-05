import React from 'react'

interface SpanBtnProps {
  children: React.ReactNode
  className?: string
}
const SpanBtn: React.FC<SpanBtnProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`flex h-6 items-center justify-center rounded-full bg-black font-manrope text-xs
        uppercase text-white ${className}`}>
      {children}
    </div>
  )
}

export default SpanBtn
