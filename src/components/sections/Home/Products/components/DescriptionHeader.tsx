import { PropsWithChildren } from 'react'

type DescriptionHeaderProps = PropsWithChildren & {
  title: string
}

export default function DescriptionHeader({
  title,
  children
}: DescriptionHeaderProps) {
  return (
    <header className='smd:flex smd:justify-between mb-6 px-4 md:px-10'>
      <h2 className='mb-6 font-cormorant text-md lg:text-lg xl:text-xl'>
        {title} :
      </h2>
      <p className='text-grey-300 smd:max-w-[276px] text-sm'>{children}</p>
    </header>
  )
}
