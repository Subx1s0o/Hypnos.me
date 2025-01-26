import React, { useState } from 'react'

import RadioButton from '@/components/ui/RadioButton'

interface SampleItem {
  id: string
  title: string
  isAvailable: boolean
}
const samples: SampleItem[] = [
  { id: '1', title: '375 sample', isAvailable: true },
  { id: '2', title: '585 sample', isAvailable: false },
  { id: '3', title: '750 sample', isAvailable: true }
]

export default function RadioBtnGroup() {
  const [selectedSample, setSelectedSample] = useState(samples[0].title)

  const handleVariantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSample(event.target.value)
    console.log('selected sample:', event.target.value)
  }

  return (
    <div className='mb-6'>
      <div className='flex items-center gap-10'>
        {samples.map(({ id, title }) => (
          <div
            key={id}
            className='flex items-center'>
            <RadioButton
              classNameLabel={`shrink-0 flex relative size-5 rounded-full items-center justify-center border-2
            text-sm ${selectedSample === title ? 'border-brown-light ' : 'border-grey-normal'} hover:bg-brown-accent/50 `}
              value={title}
              selected={selectedSample}
              name='sample'
              onChange={handleVariantChange}
              classNameInput='absolute inset-0 cursor-pointer opacity-0'>
              <div
                className={`absolute z-10 size-3 shrink-0 rounded-full hover:size-8 hover:bg-brown-accent/20
                ${selectedSample === title ? 'bg-brown-light' : 'bg-white'}`}></div>
            </RadioButton>
            <p className='mx-4'>{title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
// ${isAvailable && !(selectedSample === title) && 'border-grey-normal'}
// ${selectedSample === title && isAvailable && 'border-brown-light '}
