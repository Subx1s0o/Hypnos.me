import ImageThumb from './ImageThumb'

interface ThumbnailListProps {
  media: { [key: string]: { url: string; status: string } }
  selectedIndex: number
  onThumbClick: (index: number) => void
}

export default function ThumbnailList({
  media,
  selectedIndex,
  onThumbClick
}: ThumbnailListProps) {
  return (
    <div className='flex'>
      {Object.entries(media).map(([key, value], index) => {
        if (value.status === 'fulfilled') {
          return (
            <ImageThumb
              key={key}
              onClick={() => onThumbClick(index)}
              isSelected={index === selectedIndex}
              index={index}
              src={value.url}
            />
          )
        }
      })}
    </div>
  )
}
