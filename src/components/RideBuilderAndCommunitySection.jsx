import { useState } from 'react'
import {
  Building2,
  Milestone,
  Mountain,
  Moon,
  Route,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import motoCommunityBg from '../assets/images/MOTO-COMMUNITY.webp'

// Step 1: Riding Style Options (Exact match to reference)
const RIDING_STYLES = [
  { id: 'city', label: 'City', icon: Building2 },
  { id: 'highway', label: 'Highway', icon: Milestone },
  { id: 'mountains', label: 'Mountains', icon: Mountain },
  { id: 'night', label: 'Night Rides', icon: Moon },
  { id: 'tours', label: 'Long Tours', icon: Route }
]

// Expedition Stories Carousel
const STORIES = [
  {
    id: 1,
    title: 'Spiti Valley, India',
    image: '/images/community/clean-spiti.webp'
  },
  {
    id: 2,
    title: 'Ladakh & Khardung La, India',
    image: '/images/Cinematic Mountain Road at Dusk.webp'
  },
  {
    id: 3,
    title: 'Western Ghats Monsoon, India',
    image: '/images/hero-banner.webp'
  }
]

export default function RideBuilderAndCommunitySection() {
  // Configurator state
  const [selectedStyle, setSelectedStyle] = useState('mountains')
  const [builderStep, setBuilderStep] = useState(1)

  // Stories Carousel state
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)

  const handleNextStep = () => {
    if (builderStep === 1) setBuilderStep(2)
    else if (builderStep === 2) setBuilderStep(3)
    else setBuilderStep(1)
  }

  const prevStory = () => {
    setActiveStoryIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1))
  }

  const nextStory = () => {
    setActiveStoryIndex((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1))
  }

  const activeStory = STORIES[activeStoryIndex]

  return (
    <div className="w-full flex flex-col select-none border-t border-white/10">
      {/* ========================================================
          PART 1: 06 / BUILD YOUR RIDE (EXACT 100% REFERENCE MATCH)
          ======================================================== */}
      <section
        id="build-your-ride"
        className="relative w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12 bg-cover bg-no-repeat overflow-hidden min-h-[440px] lg:min-h-[490px] flex items-center"
        style={{
          backgroundImage: "url('/images/community/section-06-bg.webp')",
          backgroundPosition: 'center 85%'
        }}
      >
        {/* Subtle shadow ONLY behind left text (max 32%), keeping center biker and road 100% clear & bright */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[32%] bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        <div className="max-w-[1536px] w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Column: Headlines & CTA (Compact width ~320-360px on far left) */}
          <div className="w-full lg:w-[330px] xl:w-[360px] shrink-0 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.22em] text-[#F59E0B] uppercase">
                06 / BUILD YOUR RIDE
              </span>
            </div>

            <h2 className="font-rajdhani font-black text-4xl sm:text-5xl lg:text-[54px] uppercase tracking-tight text-white leading-[0.92]">
              FIND YOUR
              <br />
              <span className="text-white">PERFECT SETUP</span>
            </h2>

            <p className="font-sora text-xs sm:text-sm text-zinc-200 mt-3 max-w-[320px] font-medium leading-relaxed">
              Answer a few questions and get a personalised gear recommendation for your riding style.
            </p>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('builder-card')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#d97706] text-black font-rajdhani font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer group"
            >
              <span>START BUILDING</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Center Stage Gap: Biker on mountain road in background is 100% unblocked & visible */}

          {/* Right Column: Floating Dark Glass Configurator Card (Docked to far right ~500-540px) */}
          <div id="builder-card" className="w-full lg:w-[500px] xl:w-[540px] shrink-0 lg:ml-auto z-10">
            <div className="relative rounded-2xl bg-[#12151B]/92 backdrop-blur-md border border-white/10 p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              
              {/* Question Header */}
              <div className="mb-4">
                <h3 className="font-sora font-semibold text-sm sm:text-base md:text-lg text-white">
                  {builderStep === 1 && 'What type of riding do you do most?'}
                  {builderStep === 2 && 'Which motorcycle category do you ride?'}
                  {builderStep === 3 && 'Your Recommended Expedition Kit'}
                </h3>
              </div>

              {/* STEP 1: 5 Option Cards in 1 Single Row */}
              {builderStep === 1 && (
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 mb-5">
                  {RIDING_STYLES.map((style) => {
                    const isSelected = selectedStyle === style.id
                    const IconComponent = style.icon

                    return (
                      <button
                        key={style.id}
                        type="button"
                        onClick={() => setSelectedStyle(style.id)}
                        className={`flex flex-col items-center justify-center py-2.5 sm:py-4 px-0.5 sm:px-1 rounded-xl transition-all duration-200 cursor-pointer text-center aspect-[4/5] ${
                          isSelected
                            ? 'bg-[#1E2229] border-2 border-[#F59E0B] shadow-[0_0_18px_rgba(245,158,11,0.3)] text-white'
                            : 'bg-[#181B21] border border-white/5 text-zinc-400 hover:text-white hover:bg-[#1E2229]'
                        }`}
                      >
                        <IconComponent
                          className={`w-4 h-4 sm:w-6 sm:h-6 mb-1.5 sm:mb-2 ${
                            isSelected ? 'text-white' : 'text-zinc-400'
                          }`}
                        />
                        <span
                          className={`font-sora text-[9px] sm:text-[11px] leading-tight break-words ${
                            isSelected ? 'font-semibold text-white' : 'font-medium'
                          }`}
                        >
                          {style.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}

              {/* STEP 2: Bike Category */}
              {builderStep === 2 && (
                <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6">
                  {['Adventure / ADV', 'Cruiser / Tourer', 'Naked / Street', 'SuperSport'].map(
                    (bike, i) => (
                      <button
                        key={bike}
                        type="button"
                        onClick={() => setSelectedStyle(bike)}
                        className="flex flex-col items-center justify-center py-5 px-2 rounded-xl bg-[#181B21] hover:bg-[#1E2229] border border-white/5 hover:border-[#F59E0B] text-zinc-300 hover:text-white transition-all cursor-pointer text-center"
                      >
                        <Mountain className="w-6 h-6 mb-2 text-[#F59E0B]" />
                        <span className="font-sora text-xs font-semibold">{bike}</span>
                      </button>
                    )
                  )}
                </div>
              )}

              {/* STEP 3: Recommended Kit */}
              {builderStep === 3 && (
                <div className="flex items-center gap-4 bg-white/5 border border-[#F59E0B]/30 rounded-xl p-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B] text-slate-950 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 fill-slate-950" />
                  </div>
                  <div className="flex-grow">
                    <div className="font-rajdhani font-black text-sm uppercase text-[#F59E0B] tracking-wider">
                      Optimal Kit Matched
                    </div>
                    <div className="font-sora text-xs sm:text-sm text-zinc-200 mt-0.5">
                      Recommended: <strong>LBC BM6 6&quot; Cockpit HUD</strong> + <strong>Aux Fog Lights Pro</strong> + <strong>Cardo Mesh Intercom</strong>.
                    </div>
                  </div>
                </div>
              )}

              {/* Card Footer: Stepper Dots + Next CTA (Exact match to reference) */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                {/* Reference style subtle stepper indicator */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-zinc-500 text-xs font-mono">✦</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#d97706] text-black font-rajdhani font-black text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md group"
                >
                  <span>{builderStep === 3 ? 'Reset' : 'Next'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          PART 2: 07 / LBC MOTO COMMUNITY (EXACT REFERENCE MATCH)
          ======================================================== */}
      <section
        id="community-stories"
        className="relative w-full py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 bg-cover bg-center bg-no-repeat overflow-hidden border-t border-white/10 flex items-center"
        style={{
          backgroundImage: `url(${motoCommunityBg})`
        }}
      >
        {/* Overall Dark Overlay to darken the background as requested */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Soft shadow on the left side only for text legibility */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[38%] bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />

        <div className="max-w-[1536px] w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Column: Headline & Community Creed (Unified height matching cards) */}
          <div className="w-full lg:w-[320px] xl:w-[350px] shrink-0 flex flex-col justify-between h-auto lg:h-[300px] xl:h-[330px] pr-0 lg:pr-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.22em] text-[#F59E0B] uppercase">
                  07 / LBC MOTO COMMUNITY
                </span>
              </div>

              <h2 className="font-rajdhani font-black text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] uppercase tracking-tight text-white leading-[0.92]">
                REAL RIDERS.
                <br />
                <span className="text-white">REAL STORIES.</span>
              </h2>

              <p className="font-sora text-xs sm:text-[13px] text-zinc-300 mt-3 max-w-[310px] font-medium leading-relaxed">
                Every ride creates a memory. Be part of a community that lives by compass, not by time.
              </p>
            </div>

            <div className="pt-5 lg:pt-0">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/40 hover:border-[#F59E0B] bg-black/50 hover:bg-[#F59E0B] text-white hover:text-black font-rajdhani font-black text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-md group"
              >
                <span>EXPLORE STORIES</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 2-Part Bento Story Showcase (Unified Equal Height) */}
          <div className="w-full lg:w-[740px] xl:w-[840px] shrink-0 lg:ml-auto flex flex-col md:flex-row gap-3 sm:gap-3.5 h-auto md:h-[300px] xl:h-[330px]">
            
            {/* 1. Main Expedition Story Card (58% width, 100% height) */}
            <div className="w-full md:w-[58%] h-[240px] sm:h-[280px] md:h-full relative rounded-xl overflow-hidden border border-white/20 shadow-2xl group bg-black/50 shrink-0">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Reference Bottom Overlay: [<] Spiti Valley, India on the left, [>] on the right */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={prevStory}
                    aria-label="Previous story"
                    className="w-7 h-7 rounded-full bg-black/75 hover:bg-[#F59E0B] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer border border-white/30 shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="font-sora font-semibold text-xs sm:text-[13px] text-white drop-shadow-md">
                    {activeStory.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={nextStory}
                  aria-label="Next story"
                  className="w-7 h-7 rounded-full bg-black/75 hover:bg-[#F59E0B] text-white hover:text-black flex items-center justify-center transition-all cursor-pointer border border-white/30 shadow-md"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. 2x2 Grid of 4 Small Cards (42% width, 100% height, 2 rows) */}
            <div className="w-full md:w-[42%] h-[240px] sm:h-[280px] md:h-full grid grid-cols-2 grid-rows-2 gap-2 sm:gap-2.5 shrink-0">
              {/* Card 1: Sunrise Summit */}
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg group bg-black/50 w-full h-full">
                <img
                  src="/images/community/hd-sunrise.webp"
                  alt="Sunrise Summit Ride"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
              </div>

              {/* Card 2: Highway Squad */}
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg group bg-black/50 w-full h-full">
                <img
                  src="/images/community/hd-squad.webp"
                  alt="Highway Squad Tour"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
              </div>

              {/* Card 3: Scenic Curves */}
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg group bg-black/50 w-full h-full">
                <img
                  src="/images/community/hd-curves.webp"
                  alt="Scenic Mountain Road"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
              </div>

              {/* Card 4: Rider Setup with "SHOP THIS SETUP" Button */}
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-lg group bg-black/50 w-full h-full">
                <img
                  src="/images/community/hd-setup.webp"
                  alt="Touring Cockpit Setup"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('featured-products')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="absolute inset-x-2 bottom-2 py-1.5 px-2 rounded-lg bg-black/85 hover:bg-[#F59E0B] text-white hover:text-black font-rajdhani font-black text-[10px] sm:text-[11px] uppercase tracking-wider border border-white/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md group/btn"
                >
                  <span>SHOP THIS SETUP</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
