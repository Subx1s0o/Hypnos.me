import Icon from '@/components/features/Icon'

export default function Home() {
  return (
    <div>
      <p className='flex items-center gap-2 text-violet-600'>
        hello
        <Icon
          id='icon-fire'
          w={25}
          h={25}
          className='fill-orange-500'
        />
      </p>
    </div>
  )
}
