'use client'

import React from 'react'
import Link from 'next/link'

import Icon from '@/components/ui/Icon'

import SubscribeForm from '../forms/SubscribeForm'
import serviceList from './components/common/data/serviceList.json'
import FooterContactList from './components/FooterContactList'
import FooterInfoList from './components/FooterInfoList'
import FooterSubscribeList from './components/FooterSubscribeList'

function Footer() {
  return (
    <footer className='bg-black pb-[24px] pt-[62px] text-white'>
      <div className='mx-auto w-[1280px] px-[43px]'>
        <div>
          <Link
            href='/'
            className='mx-auto block'>
            <Icon
              id='icon-logo'
              className='text-brown'
              w={150}
              h={35}
            />
          </Link>
        </div>

        <div className='flex items-start justify-between gap-4 p-4'>
          <FooterContactList />
          <FooterInfoList
            infoList={serviceList}
            title='Services'
          />
          <FooterSubscribeList />
        </div>

        <div className='mb-[24px] flex items-start justify-end border-y border-white py-12'>
          <p className='mr-8 max-w-[290px] text-left font-manrope text-[14px] leading-[21px] text-brown'>
            Be the first to know about promotions, raffles and auctions for
            exclusive jewellery, which we hold only among the site&apos;s
            audience.
          </p>
          <SubscribeForm className='pb-16 md:col-start-2' />
        </div>

        <div className='flex flex-wrap items-center justify-between text-[12px]'>
          <div className='flex gap-[52px]'>
            <span>Credentials</span>
            <span>Customer Agreement</span>
            <span>Data Processing Policy</span>
          </div>
          <div className='flex gap-[24px] text-brown'>
            <span>2024 © Hypnos</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
