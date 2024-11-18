import HeaderOrMenu from '@/components/common/Home/HeaderOrMenu/HeaderOrMenu'
import AboutSection from '@/components/sections/AboutSection/AboutSection'
import HeroSection from '@/components/sections/HeroSection/HeroSection'
import TitleSection from '@/components/sections/TitleSection/TitleSection'

export default function HomePage() {
  return (
    <>
      <HeaderOrMenu />
      <main>
        <TitleSection />
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}
