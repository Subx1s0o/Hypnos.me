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
    <>
      <div
        className='pr-4'>
        <div className='mb-8 h-[88px] w-[292px] overflow-hidden font-manrope text-base'>
          <p className='line-clamp-4'>{slide.text}</p>
        </div>
        <Icon
          id='icon-Vector-180'
          w={292}
          h={32}
          className='fill-transparent stroke-[#D9CABF]'
        />
        <div className='flex items-end gap-6'>
          <img
            src={slide.imageUrl}
            alt={slide.altText}
            className='size-16 rounded-full'
          />
          <div className='flex flex-col gap-1 font-manrope'>
            <h3 className='text-base leading-[19.2px]'>{slide.author}</h3>
            <p className='text-xs font-semibold text-brown'>{slide.date}</p>
          </div>
        </div>
      </div>
    </>
  )
}
