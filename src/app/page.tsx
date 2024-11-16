import HeaderOrMenu from '@/components/common/Home/HeaderOrMenu/HeaderOrMenu'
import AboutSection from '@/components/sections/AboutSection/AboutSection'
import HeroSection from '@/components/sections/HeroSection/HeroSection'

export default function HomePage() {
  return (
    <>
      <HeaderOrMenu />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  )
}
