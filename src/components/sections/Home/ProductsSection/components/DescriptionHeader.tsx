import { PropsWithChildren } from 'react'

type DescriptionHeaderProps = PropsWithChildren & {
  title: string
}

export default function DescriptionHeader({
  title,
  children
}: DescriptionHeaderProps) {
  return (
    <header className='mb-6 px-4 smd:flex smd:justify-between md:px-10'>
      <h2 className='mb-6 font-cormorant text-md lg:text-lg xl:text-xl'>
        {title} :
      </h2>
      <p className='text-sm text-grey-300 smd:max-w-[276px]'>{children}</p>
    </header>
  )
}
