import { cn } from '@/lib/cn'
import Image from 'next/image'

type PropType = {
  isSelected: boolean
  index: number
  onClick: () => void
  src: string
}

export default function ImageThumb({ isSelected, src, onClick }: PropType) {
  return (
    <div className={'flex flex-[0_0_23%] px-1'}>
      <button
        onClick={onClick}
        type='button'
        className={cn(
          `xxs:h-20 relative h-16 w-full rounded-lg border-2 border-gray-300 bg-white
          hover:bg-gray-50 sm:h-24`,
          isSelected && 'border-brown'
        )}>
        <div className='relative size-full'>
          <Image
            src={src}
            alt='Image Thumbnail'
            fill
            className='rounded-lg object-cover'
          />
          {!isSelected && (
            <div className='absolute inset-0 rounded-md bg-black opacity-10'></div>
          )}
        </div>
      </button>
    </div>
  )
}
