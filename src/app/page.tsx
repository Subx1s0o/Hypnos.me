import HeaderOrMenu from '@/components/common/Home/HeaderOrMenu/HeaderOrMenu'
<<<<<<< HEAD
import AboutSection from '@/components/sections/Home/AboutSection/AboutSection'
import HeroSection from '@/components/sections/Home/HeroSection/HeroSection'
import ProductSection from '@/components/sections/Home/Products/ProductSection'
=======
import AboutSection from '@/components/sections/AboutSection/AboutSection'
import HeroSection from '@/components/sections/HeroSection/HeroSection'
>>>>>>> 5de91ccf998a231a27af988250181e39e8557435
import TitleSection from '@/components/sections/TitleSection/TitleSection'

export default function HomePage() {
  return (
    <>
      <HeaderOrMenu />
      <main>
        <TitleSection />
        <HeroSection />
        <ProductSection category='classic'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductSection>
        <ProductSection category='neoclassic'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductSection>
        <ProductSection category='conceptual'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductSection>
        <ProductSection category='geometrical'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductSection>
        <ProductSection category='symbolical'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductSection>
        <ProductSection category='futuristic'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductSection>
        <AboutSection />
      </main>
    </>
  )
}
