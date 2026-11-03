import Hero from '../components/Hero'
import CategoryStorySection from '../components/CategoryStorySection'
import BrandScrollerSection from '../components/BrandScrollerSection'
import TechFeatureBentoSection from '../components/TechFeatureBentoSection'
import FeaturedProductsSection from '../components/FeaturedProductsSection'
import RideBuilderAndCommunitySection from '../components/RideBuilderAndCommunitySection'
import PhilosophySection from '../components/PhilosophySection'
import Footer from '../components/Footer'
import FloatingSocialReviews from '../components/FloatingSocialReviews'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function HomePage() {
  return (
    <div className="w-full flex flex-col min-h-screen relative">
      {/* 1. Cinematic Fullscreen Hero */}
      <Hero />

      {/* 2. 01 / CHOOSE YOUR RIDE: 4 Categories Story Section (Navigation, Intercoms, Aux Lights, Accessories) */}
      <CategoryStorySection />

      {/* 3. Official & Authorised Brands Infinite Marquee Scroller */}
      <BrandScrollerSection />

      {/* 4. 02, 03, 04 / NAVIGATION, COMMUNICATION, AUX LIGHTING (Exact Priority Match) */}
      <TechFeatureBentoSection />

      {/* 5. 05 / FEATURED PRODUCTS: GEAR UP FOR WHAT'S NEXT (Mobile 2-Col & White Price Tags) */}
      <FeaturedProductsSection />

      {/* 6. 06 / BUILD YOUR RIDE & 07 / LBC MOTO COMMUNITY */}
      <RideBuilderAndCommunitySection />

      {/* 7. 08 / OUR PHILOSOPHY: LIVE BY COMPASS. NOT BY TIME. */}
      <PhilosophySection />

      {/* 8. Global Brand Footer */}
      <Footer />

      {/* 9. Fixed Floating Google Review & Instagram Widget (Left Edge Docked, Closed by Default) */}
      <FloatingSocialReviews />

      {/* WhatsApp float is hidden as requested */}
      {/* <FloatingWhatsApp /> */}
    </div>
  )
}
