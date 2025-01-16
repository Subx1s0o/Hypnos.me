import React, { useState } from 'react'

type RingSize = string | number

const RingSizeSelector: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<RingSize>('')

  const sizes: RingSize[] = [
    '18',
    '18.5',
    '19',
    '19.5',
    '20',
    '20.5',
    '21',
    '21.5',
    '22',
    '22.5',
    '23',
    '23.5',
    '24'
  ]

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value)
  }

  return (
    <div>
      <div className='flex justify-between'>
        <h4 className='font-manrope text-sm'>Choose size:</h4>
        <p className='font-manrope text-sm text-brown'> What is my size? </p>
      </div>

      <div className='flex flex-wrap justify-between'>
        {sizes.map(size => (
          <label
            key={size}
            className={`relative inline-flex h-8 w-10 cursor-pointer items-center justify-center
            rounded-sm border-2 text-sm transition-all duration-200
            ${selectedSize === size ? 'border-brown bg-brown text-white' : 'border-brown bg-white text-black'}
            hover:border-brown-hover/20 hover:bg-brown/70`}>
            <input
              type='radio'
              name='ringSize'
              value={size}
              checked={selectedSize === size}
              onChange={handleSizeChange}
              className='absolute inset-0 cursor-pointer opacity-0'
            />
            {size}
          </label>
        ))}
      </div>
      <p className='font-manrope text-sm'>
        Choosed size: {selectedSize || 'не выбран'}
      </p>
    </div>
  )
}

export default RingSizeSelector
