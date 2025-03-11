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
    <footer
      className='mx-auto max-w-screen-xxl bg-black px-8 pb-[152px] pt-14 font-manrope text-white
        smd:px-[43px] smd:pb-6 smd:pt-14'>
      <div className='flex flex-col items-center gap-[72px] smd:gap-0'>
        <Link
          href='/'
          className='smd:order-1 smd:mx-auto smd:mb-16'>
          <Icon
            id='icon-logo'
            className='text-brown-light'
            w={150}
            h={35}
          />
        </Link>
        <div
          className='flex flex-col items-center gap-[72px] smd:order-4 smd:mb-16 smd:w-full
            smd:flex-row smd:items-start smd:gap-0 xl:ml-[50%] xl:w-1/2'>
          <div className='smd:w-[60%] lg:w-1/2'>
            <p className='max-w-[290px] text-center text-sm text-brown smd:text-start'>
              Be the first to know about promotions, raffles and auctions for
              exclusive jewellery, which we hold only among the site&apos;s
              audience.
            </p>
          </div>
          <div className='w-[311px] smd:w-[40%] xxl:w-1/2'>
            <SubscribeForm className='w-full' />
          </div>
        </div>
        <div
          className='flex w-[311px] flex-col gap-[72px] smd:order-2 smd:mb-16 smd:w-full smd:flex-row
            smd:flex-wrap smd:gap-0 lg:flex-nowrap'>
          <div className='smd:w-[60%] lg:w-1/2'>
            <FooterSchedule />
          </div>
          <div className='smd:w-[40%] lg:w-1/4 lg:self-start'>
            <FooterInfoList
              infoList={serviceList}
              title='Services'
            />
          </div>
          <div className='smd:hidden'>
            <FooterNavigation />
          </div>
          <div className='self-center lg:w-1/4 lg:self-start'>
            <FooterSubscribeList />
          </div>
        </div>
        <hr className='border-brown-dark hidden w-full border smd:order-3 smd:mb-16 smd:block' />

        <div className='smd:hidden'>
          <FooterContactList />
        </div>
        <hr className='border-brown-dark hidden w-full border smd:order-5 smd:mb-6 smd:block' />

        <div className='last:gap-0 smd:order-6 smd:w-full'>
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  )
}
