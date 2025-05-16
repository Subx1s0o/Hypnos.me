import { useEffect, useState } from 'react'
import { Product } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import Icon from '@/components/ui/Icon'
import Loader from '@/components/ui/Loader'

import useDebounce from '@/hooks/useDebounce'

import ItemInModal from '../ItemInModal/ItemInModal'

interface SearchResultProps {
  isLoading: boolean
  data: Product[] | null
}
function SearchSkeleton() {
  return (
    <div className='flex flex-col gap-2'>
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className='h-max w-full rounded-sm border border-grey-200 md:m-auto md:w-[490px]'>
          <div className='relative flex'>
            <div className='h-[102px] min-w-[102px] animate-pulse bg-gray-200' />

            <div className='flex w-full flex-col justify-between p-3'>
              <div className='mb-2 h-4 w-3/5 animate-pulse rounded bg-gray-200' />
              <div className='mb-4 h-3 w-1/4 animate-pulse rounded bg-gray-200' />

              <div className='flex items-center justify-between'>
                <div className='h-4 w-1/3 animate-pulse rounded bg-gray-200' />
                <div className='h-5 w-10 animate-pulse rounded bg-gray-200' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
function SearchResult({ isLoading, data }: SearchResultProps) {
  return (
    <div className='z-10 bg-white md:absolute md:left-0 md:top-[200px] md:w-full'>
      {isLoading && <Loader />}
      <ul className='mb-6 flex flex-col gap-4'>
        {data &&
          data.length > 0 &&
          data.slice(0, 3).map(item => {
            return (
              <li key={item.id}>
                <Link href={`catalogue/${item.category}/${item.slug}`}>
                  <ItemInModal
                    id={item.id}
                    title={item.title}
                    media={item.media}
                    price={item.price}
                    discountPercent={item.discountPercent}
                  />
                </Link>
              </li>
            )
          })}
      </ul>
      {data && data.length > 0 && (
        <Link
          href='/search'
          className='m-auto block pb-10 text-center font-manrope text-xs font-bold uppercase
            leading-normal text-black underline'>
          ALL results ({data.length})
        </Link>
      )}
      {data && data.length === 0 && (
        <p
          className='m-auto pb-10 text-center font-manrope text-xs font-bold uppercase leading-normal
            text-black'>
          No results
        </p>
      )}
    </div>
  )
}

export default function SearchBox() {
  const [search, setSearch] = useState('')
  const [showSkeleton, setShowSkeleton] = useState(false)
  const debouncedSearchTerm = useDebounce(search, 400)

  const { data = [], isLoading } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: async () => {
      const response = await fetch(
        `https://hypnos.koyeb.app/goods?search=${debouncedSearchTerm}`
      )
      const result = await response.json()

      return result || []
    },
    enabled: debouncedSearchTerm.length >= 4
  })
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (isLoading && debouncedSearchTerm.length >= 4) {
      timer = setTimeout(() => setShowSkeleton(true), 150) // задержка 150ms
    } else {
      setShowSkeleton(false)
    }

    return () => clearTimeout(timer)
  }, [isLoading, debouncedSearchTerm])

  const clearSearch = () => {
    setSearch('')
  }

  return (
    <>
      <form
        className='relative mb-6 flex w-full md:m-auto md:mb-4 md:w-[490px]'
        onSubmit={e => e.preventDefault()}>
        <input
          className='h-[48px] w-full rounded-[4px] border border-grey-200 bg-white pl-12 text-sm
            outline-none focus-visible:border-black'
          type='search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search...'
        />

        <Icon
          className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-grey-400'
          id='icon-search'
          w={18}
          h={18}
        />
        {search && (
          <button
            type='button'
            className='absolute right-0 top-1/2 -translate-y-1/2 rounded-[4px] bg-black p-3 text-white'
            onClick={clearSearch}>
            <Icon
              id='icon-x-altx-alt'
              w={24}
              h={24}
            />
          </button>
        )}
      </form>

      {showSkeleton ? (
        <SearchSkeleton />
      ) : (
        data &&
        data.data &&
        data.data.length > 0 && (
          <SearchResult
            data={data.data}
            isLoading={isLoading}
          />
        )
      )}
    </>
  )
}
