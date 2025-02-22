'use client'

import React from 'react'
import Link from 'next/link'

import Icon from '@/components/ui/Icon'

import NavItemsList from '../common/Home/HeaderOrMenu/components/Header/NavItemsList'
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
    <footer className='bg-black pb-[152px] pt-14 font-manrope text-white md:px-[43px] md:pb-6 md:pt-14'>
      <nav className='order-1 hidden md:block'>{/* <NavItemsList /> */}</nav>
      <div
        className='flex flex-col items-center gap-[72px] md:inline-flex md:w-full md:flex-row
          md:flex-wrap md:gap-0'>
        <Link
          href='/'
          className='md:order-2 md:mx-auto md:mb-5'>
          <Icon
            id='icon-logo'
            className='text-brown'
            w={150}
            h={35}
          />
        </Link>
        <div
          className='flex flex-col items-center gap-[72px] md:order-10 md:mb-16 md:w-full md:flex-row
            md:items-start md:gap-0 xl:ml-[50%] xl:w-[50%]'>
          <div className='md:w-[50%]'>
            <p className='max-w-[290px] text-center text-sm text-brown md:text-start'>
              Be the first to know about promotions, raffles and auctions for
              exclusive jewellery, which we hold only among the site&apos;s
              audience.
            </p>
          </div>
          <div className='w-[311px] md:w-[50%]'>
            <SubscribeForm className='w-full' />
          </div>
        </div>
        <div className='w-[308px] md:order-6 md:inline-block md:w-[50%] md:self-start'>
          <FooterSchedule />
        </div>
        <div className='md:order-7 md:mb-[64px] md:inline-block md:w-[25%] md:self-start'>
          <FooterInfoList
            infoList={serviceList}
            title='Services'
          />
        </div>
        <div className='md:order-4 md:w-full'>
          <FooterNavigation />
        </div>
        <hr className='hidden w-full border border-[#2B2724] md:order-5 md:mb-8 md:block' />
        <div className='md:order-8 md:inline-block md:w-[25%] md:self-start'>
          <FooterSubscribeList />
        </div>
        <hr className='hidden w-full border border-[#2B2724] md:order-9 md:mb-16 md:block' />

        <div className='md:order-3 md:mb-[82px] md:w-full'>
          <FooterContactList />
        </div>
        <hr className='hidden w-full border border-[#2B2724] md:order-11 md:mb-6 md:block' />

        <div className='md:order-12 md:w-full'>
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  )
}
