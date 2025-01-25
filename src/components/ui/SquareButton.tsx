import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const SquareButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button'
}) => {
  return (
    <button
      className={`flex items-center justify-center rounded font-manrope uppercase transition-all
        duration-200 ${className}`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default SquareButton
