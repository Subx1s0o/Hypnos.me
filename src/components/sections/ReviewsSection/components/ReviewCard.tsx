import Image from 'next/image'

import Icon from '@/components/ui/Icon'

type ReviewData = {
  text: string
  altText: string
  imageUrl: string
  author: string
  date: string
}

type ReviewCardProps = {
  slide: ReviewData
}
export default function ReviewCard({ slide }: ReviewCardProps) {
  return (
    <div className='w-full pr-8'>
      <div className='mb-8 h-[88px] max-w-[292px] overflow-hidden font-manrope text-base'>
        <p className='line-clamp-4'>{slide.text}</p>
      </div>
      <Icon
        id='icon-Vector-180'
        w={292}
        h={32}
        className='fill-transparent stroke-[#D9CABF]'
      />
      <div className='flex max-w-[200px] items-end gap-6'>
        <Image
          src={slide.imageUrl}
          alt={slide.altText}
          width={64}
          height={64}
        />
        <div className='flex flex-col gap-1 font-manrope'>
          <h3 className='text-base leading-[19.2px]'>{slide.author}</h3>
          <p className='text-xs font-semibold text-brown'>{slide.date}</p>
        </div>
      </div>
    </div>
  )
}
