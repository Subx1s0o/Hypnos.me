import useMedia from '@/hooks/useMedia'

import HomeHeader from '../common/HomeHeader'
import MobileNavigation from '../common/MobileNavigation'
import HeroSection from '../sections/HeroSection'

export default function Home() {
  const isDesktop = useMedia('(min-width: 768px)')
  return (
    <>
      {isDesktop ? <HomeHeader /> : <MobileNavigation />}
      <main>
        <HeroSection />
      </main>
    </>
  )
}
