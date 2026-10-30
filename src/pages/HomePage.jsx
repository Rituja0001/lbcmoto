import Hero from '../components/Hero'
import CategoryStorySection from '../components/CategoryStorySection'
import TechFeatureBentoSection from '../components/TechFeatureBentoSection'
import Footer from '../components/Footer'
import FloatingSocialReviews from '../components/FloatingSocialReviews'

export default function HomePage() {
  return (
    <div className="w-full flex flex-col min-h-screen relative">
      {/* 1. Cinematic Fullscreen Hero */}
      <Hero />

      {/* 2. 01 / CHOOSE YOUR RIDE: 4 Categories Story Section */}
      <CategoryStorySection />

      {/* 3. 02, 03, 04 / NAVIGATION, COMMUNICATION, LIGHTING (Exact Reference Match, Zero Gap) */}
      <TechFeatureBentoSection />

      {/* 4. Global Brand Footer */}
      <Footer />

      {/* 5. Fixed Floating Google Review & Instagram Widget */}
      <FloatingSocialReviews />
    </div>
  )
}
