import AboutSection from '@/components/sections/Home/AboutSection/AboutSection'
import HeroSection from '@/components/sections/Home/HeroSection/HeroSection'
import ProductsSection from '@/components/sections/Home/ProductsSection/ProductsSection'
import SubscribeSection from '@/components/sections/Home/SubscribeSection/SubscribeSection'
import TitleSection from '@/components/sections/Home/TitleSection/TitleSection'
import ReviewsSection from '@/components/sections/ReviewsSection/ReviewsSection'

export default function HomePage() {
  return (
    <>
      <main className='mx-auto max-w-screen-xxl'>
        <TitleSection />
        <HeroSection />
        <ProductsSection
          id='products'
          category='classic'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductsSection>
        <ProductsSection category='neoclassic'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductsSection>
        <ProductsSection category='conceptual'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductsSection>
        <ProductsSection category='geometrical'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductsSection>
        <ProductsSection category='symbolical'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductsSection>
        <ProductsSection category='futuristic'>
          A variety of housing options tailored to fit your needs. Choose from
          multiple designs, each offering distinct features and benefits.
        </ProductsSection>

        <SubscribeSection />
        <ReviewsSection />
        <AboutSection />
      </main>
    </>
  )
}
