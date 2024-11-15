import useMedia from '@/hooks/useMedia'

import Header from '../common/Header/Header'
import MobileNavigation from '../common/Navigations/MobileNavigation'
import AboutSection from '../sections/AboutSection/AboutSection'
import HeroSection from '../sections/HeroSection/HeroSection'

export default function Home() {
  const isDesktop = useMedia('(min-width: 768px)')

  return (
    <>
      {isDesktop ? <Header /> : <MobileNavigation />}
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}
