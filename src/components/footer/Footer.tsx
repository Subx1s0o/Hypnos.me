'use client'

import React from 'react'
import Link from 'next/link'

import Icon from '@/components/ui/Icon'

import SubscribeForm from '../forms/SubscribeForm'
import serviceList from './components/common/data/serviceList.json'
import FooterContactList from './components/FooterContactList'
import FooterInfoList from './components/FooterInfoList'
import FooterLegalLinks from './components/FooterLegalLinks'
import FooterNavigation from './components/FooterNavigation'
import FooterSchedule from './components/FooterSchedule'
import FooterSubscribeList from './components/FooterSubscribeList'

export default function Footer() {
  return (
    <footer className='bg-black pb-[152px] pt-14 font-manrope text-white'>
      <div className='flex flex-col items-center gap-[72px]'>
        <Link
          href='/'
          className=''>
          <Icon
            id='icon-logo'
            className='text-brown'
            w={150}
            h={35}
          />
        </Link>
        <div className='flex flex-col items-center gap-[72px]'>
          <p className='max-w-[290px] text-center text-sm text-brown'>
            Be the first to know about promotions, raffles and auctions for
            exclusive jewellery, which we hold only among the site&apos;s
            audience.
          </p>
          <SubscribeForm className='w-[311px]' />
        </div>
        <FooterSchedule />
        <FooterInfoList
          infoList={serviceList}
          title='Services'
        />
        <FooterNavigation />
        <FooterSubscribeList />
        <FooterContactList />
        <FooterLegalLinks />
      </div>
    </footer>
  )
}
