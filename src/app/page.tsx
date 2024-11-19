import HeaderOrMenu from '@/components/common/Home/HeaderOrMenu/HeaderOrMenu'
import AboutSection from '@/components/sections/AboutSection/AboutSection'
import HeroSection from '@/components/sections/Home/HeroSection/HeroSection'
import ProductSection from '@/components/sections/Home/Products/ProductSection'

export default function HomePage() {
  return (
    <>
      <HeaderOrMenu />
      <main>
        <HeroSection />
        <ProductSection category='classic'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductSection>
        <ProductSection category='neo_classic'>
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
