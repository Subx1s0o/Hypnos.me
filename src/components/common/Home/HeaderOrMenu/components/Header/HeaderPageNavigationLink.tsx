import Link from 'next/link'

export default function HeaderPageNavigationLink({
  href,
  label
}: {
  href: string
  label: string
}) {
  return (
    <li
      className='relative'
      key={href}>
      <Link
        href={href}
        className='duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px]
          after:w-0 after:-translate-x-1/2 after:bg-grey-400 after:duration-300
          lg:hover:after:w-full'>
        {label}
      </Link>
    </li>
  )
}
