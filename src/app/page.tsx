import AboutSection from '@/components/sections/Home/AboutSection/AboutSection'
import HeroSection from '@/components/sections/Home/HeroSection/HeroSection'
import ProductSection from '@/components/sections/Home/ProductsSection/ProductSection'
import TitleSection from '@/components/sections/Home/TitleSection/TitleSection'

export default function HomePage() {
  return (
    <>
      <main className='max-w-screen-3xl mx-auto'>
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
