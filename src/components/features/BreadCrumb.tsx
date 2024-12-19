'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Icon from '../ui/Icon'

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
    <nav
      aria-label='Breadcrumb'
      className='overflow-x-auto'>
      <ul
        className='flex items-center gap-3 md:max-w-[270px] xmd:max-w-[400px] lg:max-w-[500px]
          xl:max-w-[400px]'>
        <li className='relative'>
          <Link
            className='duration-300 after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px]
              after:w-0 after:-translate-x-1/2 after:bg-grey-400 after:duration-300
              lg:hover:after:w-full'
            href={'/'}>
            <Icon
              id='icon-home'
              w={20}
              h={20}
              className='text-black'
            />
          </Link>
        </li>
        {pathNames.length > 0 && '>'}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const itemClasses =
            paths === href
              ? 'font-bold whitespace-nowrap'
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
    </nav>
  )
}
