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
      className='bg-black px-8 pb-[152px] pt-14 font-manrope text-white md:px-[43px] md:pb-6
        md:pt-14'>
      <div className='flex flex-col items-center gap-[72px] md:gap-0'>
        <Link
          href='/'
          className='md:order-1 md:mx-auto md:mb-16'>
          <Icon
            id='icon-logo'
            className='text-brown'
            w={150}
            h={35}
          />
        </Link>
        <div
          className='flex flex-col items-center gap-[72px] md:order-4 md:mb-16 md:w-full md:flex-row
            md:items-start md:gap-0 xl:ml-[50%] xl:w-1/2'>
          <div className='md:w-1/2'>
            <p className='max-w-[290px] text-center text-sm text-brown md:text-start'>
              Be the first to know about promotions, raffles and auctions for
              exclusive jewellery, which we hold only among the site&apos;s
              audience.
            </p>
          </div>
          <div className='w-[311px] md:w-1/2'>
            <SubscribeForm className='w-full' />
          </div>
        </div>
        <div
          className='flex w-[311px] flex-col gap-[72px] md:order-2 md:mb-16 md:w-full md:flex-row
            md:gap-0'>
          <div className='md:w-1/2'>
            <FooterSchedule />
          </div>
          <div className='md:w-1/4 md:self-start'>
            <FooterInfoList
              infoList={serviceList}
              title='Services'
            />
          </div>
          <div className='md:hidden'>
            <FooterNavigation />
          </div>
          <div className='self-center md:w-1/4 md:self-start'>
            <FooterSubscribeList />
          </div>
        </div>
        <hr className='border-brown-dark hidden w-full border md:order-3 md:mb-16 md:block' />

        <div className='md:hidden'>
          <FooterContactList />
        </div>
        <hr className='border-brown-dark hidden w-full border md:order-5 md:mb-6 md:block' />

        <div className='last:gap-0 md:order-6 md:w-full'>
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  )
}
