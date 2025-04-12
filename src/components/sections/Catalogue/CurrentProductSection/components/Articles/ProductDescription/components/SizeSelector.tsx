'use client'

import RadioButton from '@/components/ui/RadioButton'

type RingSizeProps = {
  sizes: number[]
  handleSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedSize: string
}
export default function RingSizeSelector({
  sizes,
  handleSizeChange,
  selectedSize
}: RingSizeProps) {
  return (
    <div className='mb-3'>
      <div className='mb-[14px] flex justify-between'>
        <h4 className='font-manrope text-sm'>Choose size:</h4>
        <p className='font-manrope text-sm text-brown underline'>
          What is my size?
        </p>
      </div>
      <ul className='flex gap-2 overflow-hidden'>
        {sizes.map(size => {
          const sizeS = size.toString()

          return (
            <li key={sizeS}>
              <RadioButton
                classNameLabel={`relative inline-flex shrink-0 text-black h-8 w-10 items-center justify-center border-brown-accent rounded-sm border text-sm
              `}
                key={sizeS}
                value={sizeS}
                name='size'
                selected={selectedSize}
                onChange={handleSizeChange}
                classNameInput='absolute inset-0 cursor-pointer opacity-0'>
                <span>{sizeS}</span>
              </RadioButton>
            </li>
          )
        })}
      </ul>
      {/* <p className='font-manrope text-sm'>Choosed size: {selectedSize}</p> */}
    </div>
  )
}
