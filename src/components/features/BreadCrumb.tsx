'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  const selectPathName = (link: string) => {
    const name = (link[0].toUpperCase() + link.slice(1, link.length))
      .split('-')
      .join(' ')

    return name
  }

  return (
    <div>
      <ul className='xmd:max-w-[400px] flex gap-3 md:max-w-[270px] lg:max-w-[500px] xl:max-w-[400px]'>
        <li className='relative'>
          <Link
            className='duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px]
              after:w-0 after:-translate-x-1/2 after:bg-grey-400 after:duration-300
              lg:hover:after:w-full'
            href={'/'}>
            Home
          </Link>
        </li>
        {pathNames.length > 0 && '>'}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const itemClasses =
            paths === href
              ? 'font-bold truncate'
              : 'relative duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-grey-400 after:duration-300 lg:hover:after:w-full'
          const itemLink = selectPathName(link)

          return (
            <Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && '>'}
            </Fragment>
          )
        })}
      </ul>
    </div>
  )
}
