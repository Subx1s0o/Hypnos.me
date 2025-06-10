import { useForm } from 'react-hook-form'

import { useModal } from '@/components/context/ModalContext'
import FormInput from '@/components/ui/FormInput'
import Icon from '@/components/ui/Icon'

type FormInputType = {
  size: number
}

export default function RingSizeModal() {
  const { control, watch } = useForm<FormInputType>({
    defaultValues: {
      size: 0
    }
  })

  const { closeModal } = useModal()

  const ringSize: number = watch('size')
  const convertMmToRingSize = (mmSize: number): string => {
    if (mmSize <= 0) return 'Enter size above'

    const sizes = [
      { max: 47, size: '15' },
      { max: 48.7, size: '15.5' },
      { max: 50.3, size: '16' },
      { max: 51.8, size: '16.5' },
      { max: 53.4, size: '17' },
      { max: 55, size: '17.5' },
      { max: 56.5, size: '18' },
      { max: 58.1, size: '18.5' },
      { max: 59.7, size: '19' },
      { max: 61.3, size: '19.5' },
      { max: 62.8, size: '20' },
      { max: 64.4, size: '20.5' },
      { max: 66, size: '21' }
    ]

    return sizes.find(s => mmSize <= s.max)?.size ?? 'N/A'
  }

  return (
    <>
      <div className='mb-2 flex w-full items-center justify-between font-manrope md:mb-3'>
        <button
          className='flex size-6 items-center justify-center'
          onClick={() => closeModal('ringSize')}>
          <Icon
            id='icon-x-altx-alt'
            w={24}
            h={24}
          />
        </button>
        <h2 className='text-sm text-brown underline md:text-base'>
          What is my size?
        </h2>
      </div>
      <div className='flex max-h-svh flex-col items-center gap-[6px] px-4 py-1 font-manrope md:gap-4'>
        <p className='text-xs font-semibold md:text-base-big md:font-bold'>
          Find your size
        </p>
        <form className='flex w-full flex-col items-center gap-1 md:gap-2'>
          <h3 className='text-xs font-normal md:text-base'>
            Enter your finger size in mm
          </h3>
          <FormInput
            control={control}
            name='size'
            className='border-brown-accent text-center text-sm leading-[18px] md:text-base'
          />
        </form>
        <div className='flex w-full flex-col items-center gap-1 md:gap-2'>
          <h3 className='text-xs font-normal md:text-base'>Your size</h3>
          <p
            className='w-full rounded-[3px] bg-black py-4 text-center text-sm leading-[18px] text-white
              md:max-w-[188px] md:text-base'>
            {convertMmToRingSize(ringSize)}
          </p>
        </div>
      </div>
    </>
  )
}
