import { useState } from 'react'
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
          className='h-24 w-full animate-pulse rounded-md bg-gray-200'
        />
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

  const debouncedSearchTerm = useDebounce(search, 200)

  const { data = [], isLoading } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: async () => {
      if (debouncedSearchTerm) {
        const response = await fetch(
          `https://hypnos.koyeb.app/goods?search=${debouncedSearchTerm}`
        )
        const result = await response.json()

        return result || []
      }

      return []
    }
  })

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
      {isLoading ? (
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
