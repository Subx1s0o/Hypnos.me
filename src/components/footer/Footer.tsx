'use client'

import React from 'react'
import Link from 'next/link'

import Icon from '@/components/ui/Icon'

import SubscribeForm from '../forms/SubscribeForm'
import serviceList from './components/common/data/serviceList.json'
import FooterContactList from './components/FooterContactList'
import FooterInfoList from './components/FooterInfoList'
import FooterSubscribeList from './components/FooterSubscribeList'

const Footer: React.FC = () => {
  return (
    <footer className='bg-black pb-[24px] pt-[40px] text-white'>
      <div className='mx-auto my-0 w-[1280px] px-[43px] py-0'>
        <div>
          <Link
            href='/'
            className='mx-auto my-0 block'>
            <Icon
              id='icon-logo'
              className='text-brown'
              w={150}
              h={35}
            />
          </Link>
        </div>
        <div className='flex items-start justify-between gap-4 bg-black p-4'>
          <FooterContactList />
          <FooterInfoList
            infoList={serviceList}
            title='Services'
          />
          <FooterSubscribeList />
        </div>
        <div
          className='mb-[24px] flex items-start justify-end border-y border-grey-normal bg-black
            py-12 text-white'>
          <p className='mr-8 max-w-[290px] text-left font-manrope text-[14px] leading-[21px] text-brown'>
            Be the first to know about promotions, raffles and auctions for
            exclusive jewellery, which we hold only among the site&apos;s
            audience.
          </p>
          <SubscribeForm className='pb-16 md:col-start-2' />
        </div>

        <span className='mr-[52px] text-[12px]'>Credentials</span>
        <span className='mr-[52px] text-[12px]'>Customer Agreement</span>
        <span className='mr-[170px] text-[12px]'>Data processing policy</span>

        <span className='mr-[24px] text-[12px] text-brown'>2024 © Hypnos</span>
        <span className='text-[12px] text-brown'>All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
