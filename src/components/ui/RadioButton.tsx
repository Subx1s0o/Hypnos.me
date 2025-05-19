import React from 'react'

interface RadioButtonProps {
  children: React.ReactNode
  value: string | number
  name: string

  selected: string | number
  selectedBgColor?: string
  classNameLabel?: string
  classNameInput?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  value,
  selected,
  selectedBgColor,
  name,
  onChange,
  classNameLabel,
  classNameInput
}) => {
  return (
    <label
      className={`cursor-pointer items-center justify-center transition-all duration-200
        ${classNameLabel} ${selected === value ? `${selectedBgColor}` : ''} `}>
      <input
        type='radio'
        name={name}
        value={value}
        checked={selected === value}
        onChange={onChange}
        className={classNameInput}
      />
      {children}
    </label>
  )
}

export default RadioButton
