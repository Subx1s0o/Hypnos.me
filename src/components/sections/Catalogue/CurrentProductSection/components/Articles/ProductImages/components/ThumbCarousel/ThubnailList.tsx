import ImageThumb from './ImageThumb'

interface ThumbnailListProps {
  media: {
    [key: string]: {
      url: string
      status: 'not_uploaded' | 'fulfilled' | 'rejected'
    }
  }
  selectedIndex: number
  onThumbClick: (index: number) => void
}

export default function ThumbnailList({
  media,
  selectedIndex,
  onThumbClick
}: ThumbnailListProps) {
  return (
    <ul className='flex flex-1 justify-start gap-2 md:h-full md:gap-[6px] lg:gap-[10px]'>
      {Object.entries(media).map(([key, value], index) => {
        if (value.status !== 'not_uploaded')
          return (
            <ImageThumb
              status={value.status}
              key={key}
              onClick={() => onThumbClick(index)}
              isSelected={index === selectedIndex}
              index={index}
              src={value.url}
            />
          )
      })}
    </ul>
  )
}
