import AboutSection from '@/components/sections/Home/AboutSection/AboutSection'
import HeroSection from '@/components/sections/Home/HeroSection/HeroSection'
import ProductSection from '@/components/sections/Home/Products/ProductSection'
import SubscribeSection from '@/components/sections/Home/SubscribeSection/SubscribeSection'
import TitleSection from '@/components/sections/Home/TitleSection/TitleSection'
import ReviewsSection from '@/components/sections/ReviewsSection/ReviewsSection'

export default function HomePage() {
  return (
    <>
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
        <SubscribeSection />
        <ReviewsSection />
        <AboutSection />
      </main>
    </>
  )
}
