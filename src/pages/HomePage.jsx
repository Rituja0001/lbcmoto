import Hero from '../components/Hero'
import CategoryStorySection from '../components/CategoryStorySection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Cinematic Fullscreen Hero */}
      <Hero />

      {/* 2. 4 Categories Story Section (Matching Reference Design) */}
      <CategoryStorySection />

      {/* 3. Footer */}
      <Footer />
    </div>
  )
}
