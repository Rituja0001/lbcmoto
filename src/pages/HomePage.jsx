import Hero from '../components/Hero'
import CategoryStorySection from '../components/CategoryStorySection'
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

      {/* 2. 01 / CHOOSE YOUR RIDE: 4 Categories Story Section */}
      <CategoryStorySection />

      {/* 3. 02, 03, 04 / NAVIGATION, COMMUNICATION, LIGHTING (Exact Reference Match, Zero Gap) */}
      <TechFeatureBentoSection />

      {/* 4. 05 / FEATURED PRODUCTS: GEAR UP FOR WHAT'S NEXT */}
      <FeaturedProductsSection />

      {/* 5. 06 / BUILD YOUR RIDE & 07 / LBC MOTO COMMUNITY */}
      <RideBuilderAndCommunitySection />

      {/* 6. 08 / OUR PHILOSOPHY: LIVE BY COMPASS. NOT BY TIME. */}
      <PhilosophySection />

      {/* 7. Global Brand Footer */}
      <Footer />

      {/* 8. Fixed Floating Google Review & Instagram Widget (Left Edge Docked) */}
      <FloatingSocialReviews />

      {/* WhatsApp float is hidden as requested */}
      {/* <FloatingWhatsApp /> */}
    </div>
  )
}
