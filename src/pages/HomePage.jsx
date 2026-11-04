import Hero from '../components/Hero'
import NavigationBannerSection from '../components/NavigationBannerSection'
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

      {/* 2. Flagship Navigation Flyer (FIRST thing seen on scroll down: LBC MOTO • CARPURIDE • AOOCCI) */}
      <NavigationBannerSection />

      {/* 3. 01 / CHOOSE YOUR RIDE: 4 Categories Story Section (Navigation, Intercoms, Aux Lights, Accessories) */}
      <CategoryStorySection />

      {/* 4. Official & Authorised Brands Infinite Marquee Scroller */}
      <BrandScrollerSection />

      {/* 5. Communication (Mesh Intercoms) & Auxiliary Lighting Feature Blocks */}
      <TechFeatureBentoSection />

      {/* 6. 05 / FEATURED PRODUCTS: GEAR UP FOR WHAT'S NEXT (Mobile 2-Col & White Price Tags) */}
      <FeaturedProductsSection />

      {/* 7. 06 / BUILD YOUR RIDE & 07 / LBC MOTO COMMUNITY */}
      <RideBuilderAndCommunitySection />

      {/* 8. 08 / OUR PHILOSOPHY: LIVE BY COMPASS. NOT BY TIME. */}
      <PhilosophySection />

      {/* 9. Global Brand Footer */}
      <Footer />

      {/* 10. Fixed Floating Google Review & Instagram Widget (Left Edge Docked, Closed by Default) */}
      <FloatingSocialReviews />

      {/* WhatsApp float is hidden as requested */}
      {/* <FloatingWhatsApp /> */}
    </div>
  )
}
