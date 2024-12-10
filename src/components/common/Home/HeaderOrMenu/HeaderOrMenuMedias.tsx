'use client'

import { Media, MediaContextProvider } from '@/components/helpers/Media'

import HeaderDesktop from './components/HeaderDesktop'
import MobileMenu from './components/MobileMenu'

export default function HeaderOrMenuMedias() {
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual='md'>
        <HeaderDesktop />
      </Media>
      <Media lessThan='md'>
        <MobileMenu />
      </Media>
    </MediaContextProvider>
  )
}
