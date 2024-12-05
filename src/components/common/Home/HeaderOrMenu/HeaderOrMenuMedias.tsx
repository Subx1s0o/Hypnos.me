'use client'

import dynamic from 'next/dynamic'

import { Media, MediaContextProvider } from '@/components/helpers/Media'

import HeaderDesktop from './Header/HeaderDesktop'
import MobileMenu from './MobileMenu/MobileMenu'

const ModalManager = dynamic(
  () => import('@/components/modals/ModalsManager'),
  {
    ssr: false
  }
)

export default function HeaderOrMenuMedias() {
  return (
    <>
      <ModalManager />
      <MediaContextProvider>
        <Media greaterThanOrEqual='md'>
          <HeaderDesktop />
        </Media>
        <Media lessThan='md'>
          <MobileMenu />
        </Media>
      </MediaContextProvider>
    </>
  )
}
