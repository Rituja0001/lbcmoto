import { ArrowRight } from 'lucide-react'
import ourPhilosophyBg from '../assets/images/OUR-PHILOSOPHY.webp'

export default function PhilosophySection({ customBg = null }) {
  const bgImage = customBg || ourPhilosophyBg

  return (
    <section
      id="our-philosophy"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/10 flex items-center min-h-[460px] lg:min-h-[520px] select-none"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      {/* Soft Cinematic Left Gradient for Text Readability without darkening center sunset & rider */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[42%] bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />

      <div className="max-w-[1536px] w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Headline, Philosophy & Dual CTA Buttons */}
        <div className="w-full lg:w-[580px] xl:w-[650px] flex flex-col items-start">
          
          {/* Step Tag */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.22em] text-[#F59E0B] uppercase">
              08 / OUR PHILOSOPHY
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-rajdhani font-black text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] uppercase tracking-tight text-white leading-[0.92]">
            LIVE BY COMPASS.
            <br />
            <span className="text-white">NOT BY TIME.</span>
          </h2>

          {/* Subtitle */}
          <p className="font-sora text-sm sm:text-base text-zinc-200 mt-3.5 max-w-lg font-medium leading-relaxed">
            There&apos;s always another road. Another horizon. Another reason to ride.
          </p>

          {/* Dual Buttons (Exact match to reference) */}
          <div className="flex flex-wrap items-center gap-3.5 mt-7">
            {/* 1. FIND YOUR NEXT GEAR (Yellow Primary Button) */}
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('featured-products')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#d97706] text-black font-rajdhani font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer group"
            >
              <span>FIND YOUR NEXT GEAR</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* 2. EXPLORE OUR STORY (Bordered Secondary Button) */}
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('community-stories')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/40 hover:border-[#F59E0B] bg-black/40 hover:bg-[#F59E0B] text-white hover:text-black font-rajdhani font-black text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>EXPLORE OUR STORY</span>
            </button>
          </div>
        </div>

        {/* Right Side: Script Tagline in 2 Lines (Without video button, exact match) */}
        <div className="w-full lg:w-auto lg:ml-auto flex items-center justify-end pr-0 lg:pr-10 xl:pr-14">
          <div className="flex flex-col text-right font-caveat text-4xl sm:text-5xl lg:text-[54px] text-white/95 leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] [transform:rotate(-5deg)] select-none">
            <span>More Roads.</span>
            <span>More Stories.</span>
          </div>
        </div>

      </div>
    </section>
  )
}
