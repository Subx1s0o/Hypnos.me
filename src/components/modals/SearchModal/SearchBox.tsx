import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

import BlackBadge from '@/components/ui/BlackBadge'
import Icon from '@/components/ui/Icon'

import useDebounce from '@/hooks/useDebounce'

interface Product {
  id: string
  title: string
  description: string
  price: number
  discountPercentage?: number
  images: string[]
}

interface SearchResultProps {
  isLoading: boolean
  data: Product[]
}

function SearchResult({ isLoading, data }: SearchResultProps) {
  
  return (
    <ul className='flex flex-col gap-4'>
      {isLoading && <div className='text-white'>Loading...</div>}
      {data &&
        data.map(item => (
          <li
            key={item.id}
            className='border-b-2 border-grey-200'>
            <div className='relative flex pb-4'>
              <Image
                src={item.images[0]}
                alt={item.title}
                width={100}
                height={100}
              />

              <div className='flex w-full flex-col justify-between pl-4'>
                <h3
                  className='align-middle font-manrope text-sm font-semibold not-italic tracking-tight
                    text-black'>
                  {item.title}
                </h3>
                <div className='flex justify-between'>
                  <p className='font-manrope text-sm font-semibold not-italic tracking-tight text-black'>
                    {item.price} $
                  </p>
                  {item.discountPercentage && (
                    <BlackBadge className='w-12'>
                      -{item.discountPercentage}%
                    </BlackBadge>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  )
}

export default function SearchBox() {
  const [search, setSearch] = useState('')

  const debouncedSearchTerm = useDebounce(search, 200)

  const { data, isLoading } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return fetch(
          `https://dummyjson.com/products/search?q=${debouncedSearchTerm}`
        ).then(res => res.json())
      }
      console.log(data)

      return { products: [] }
    }
  })

  return (
    <div>
      <form className='relative m-auto flex w-full lg:w-96'>
        <input
          className='h-[48px] w-full rounded-[4px] border border-grey-200 bg-white py-4 pl-8 pr-2
            text-sm outline-none focus-visible:border-black'
          type='search'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search...'
        />

        <Icon
          className='pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-black/60'
          id='icon-search'
          w={18}
          h={18}
        />
      </form>

      {data?.products.length > 0 && (
        <SearchResult
          isLoading={isLoading}
          data={data.products}
        />
      )}
    </div>
  )
}
