import Image from 'next/image'

interface MainImageListProps {
  media: { [key: string]: { url: string; status: string } }
}

export default function MainImageList({ media }: MainImageListProps) {
  return (
    <ul className='flex'>
      {Object.entries(media).map(([key, value]) => {
        if (value.status !== 'not_uploaded') {
          return (
            <li
              key={key}
              className='min-w-full'>
              <Image
                alt='photo'
                src={value.url}
                width={800}
                height={500}
                className='w-full object-cover'
              />
            </li>
          )
        }
      })}
    </ul>
  )
}
