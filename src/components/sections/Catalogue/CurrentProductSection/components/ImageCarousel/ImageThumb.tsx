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
    <article className='flex w-full flex-col items-center'>
      <div className={'mb-2 flex w-full flex-[0_0_23%] px-1 md:flex-[0_0_30%]'}>
        <button
          onClick={onClick}
          type='button'
          className={cn(
            `xxs:h-20 relative h-16 w-full rounded-lg border-2 border-gray-300 bg-white
            hover:bg-gray-50 sm:h-24 smd:h-28 md:h-24 lg:h-28 xl:h-32`,
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
      <div
        className={cn('h-1 w-[calc(100%-8px)] rounded-lg bg-gray-300', {
          'bg-brown': isSelected
        })}
      />
    </article>
  )
}
