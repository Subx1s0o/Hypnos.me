import React, { useState } from 'react'

import { Media, MediaContextProvider } from '@/components/helpers/Media'
import RadioButton from '@/components/ui/RadioButton'

interface SampleItem {
  id: string
  sample: string
  isAvailable: boolean
}
const samples: SampleItem[] = [
  { id: '1', sample: '375', isAvailable: true },
  { id: '2', sample: '585', isAvailable: false },
  { id: '3', sample: '750', isAvailable: true }
]

export default function RadioBtnGroup() {
  const [selectedSample, setSelectedSample] = useState(samples[0].sample)

  const handleVariantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSample(event.target.value)
  }

  return (
    <div className='mb-1'>
      <div className='flex items-center justify-between gap-10'>
        <MediaContextProvider>
          {samples.map(({ id, sample }) => (
            <div
              key={id}
              className='flex items-center'>
              <RadioButton
                classNameLabel={`shrink-0 flex relative size-5 rounded-full items-center justify-center border-2
            text-sm ${selectedSample === sample ? 'border-brown-hover ' : 'border-grey-hover'} `}
                value={sample}
                selected={selectedSample}
                selectedBgColor='bg-white'
                name='sample'
                onChange={handleVariantChange}
                classNameInput='absolute inset-0 cursor-pointer opacity-0'>
                <div
                  className={`absolute z-10 size-3 shrink-0 rounded-full
                  ${selectedSample === sample ? 'bg-brown-hover' : 'bg-white'}`}></div>
              </RadioButton>
              <div className='flex items-center text-sm text-grey-300'>
                <p className='mx-1'>{sample}</p>
                <Media greaterThanOrEqual='xmd'>
                  <p>sample</p>
                </Media>
              </div>
            </div>
          ))}
        </MediaContextProvider>
      </div>
    </div>
  )
}
// ${isAvailable && !(selectedSample === title) && 'border-grey-normal'}
// ${selectedSample === title && isAvailable && 'border-brown-light '}
