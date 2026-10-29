import { useState } from 'react'
import {
  ArrowRight,
  Play,
  Crosshair,
  X,
} from 'lucide-react'
import Navbar from './components/Navbar'
import heroBg from './assets/images/hero-banner.jpg'

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#212121] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] relative overflow-x-hidden">
      
      {/* 1. Transparent Floating Header Navigation */}
      <Navbar />

      {/* =========================================================================
          2. EPIC CINEMATIC HERO SECTION (ONLY SECTION)
         ========================================================================= */}
      <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 sm:pb-12 overflow-hidden">
        
        {/* Background Image Container with Cinematic Overlays */}
        <div className="absolute inset-0 -z-10 bg-black">
          <img
            src={heroBg}
            alt="LBC MOTO Adventure Touring"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle directional vignette gradient so text on left is super crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/80 via-transparent to-black/60" />
        </div>

        {/* Hero Main Content Grid */}
        <div className="w-full px-4 sm:px-8 xl:px-12 2xl:px-16 flex-1 flex flex-col justify-center my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area: Typography & Call To Actions */}
            <div className="lg:col-span-7 xl:col-span-8 text-left pt-6 sm:pt-12">
              
              {/* Badge: LBC MOTO */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#FECD08] rotate-45 shadow-sm shadow-[#FECD08]/50" />
                <span className="font-rajdhani font-black text-sm tracking-widest text-[#FECD08] uppercase">
                  LBC MOTO
                </span>
              </div>

              {/* Massive Bold Headline: YOUR RIDE. YOUR RULES. YOUR ROAD. */}
              <h1 className="font-rajdhani font-black text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.2rem] tracking-tight leading-[0.9] uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <span className="block">YOUR RIDE.</span>
                <span className="block">YOUR RULES.</span>
                <span className="block text-[#FECD08]">YOUR ROAD.</span>
              </h1>

              {/* Subheading */}
              <p className="font-sora text-sm sm:text-base lg:text-lg text-white/85 max-w-xl mt-6 leading-relaxed drop-shadow-md">
                Gear up for every adventure with technology built for the way you ride.
              </p>

              {/* CTAs: EXPLORE THE GEAR & DISCOVER THE JOURNEY */}
              <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
                <a
                  href="/shop"
                  className="px-8 py-4 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-base uppercase tracking-wider flex items-center gap-2.5 shadow-xl shadow-[#FECD08]/25 transition-all duration-200 cursor-pointer group"
                >
                  <span>EXPLORE THE GEAR</span>
                  <ArrowRight className="w-4 h-4 text-[#212121] group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="px-7 py-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/30 hover:border-white backdrop-blur-md text-white font-rajdhani font-bold text-base uppercase tracking-wider flex items-center gap-3 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#212121] group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-[#212121] text-[#212121] ml-0.5" />
                  </div>
                  <span>DISCOVER THE JOURNEY</span>
                </button>
              </div>

            </div>

            {/* Right Sky Area: Script Tagline Quote */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between items-start lg:items-end text-left lg:text-right pt-6 lg:pt-0">
              <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-white/95 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] -rotate-3 select-none">
                <div>Live by Compass</div>
                <div className="lg:mr-6">Not by Time.</div>
              </div>
            </div>

          </div>
        </div>

        {/* Hero Bottom Bar: Scroll to Ride & GPS Reticle */}
        <div className="w-full px-4 sm:px-8 xl:px-12 2xl:px-16 pt-8 sm:pt-12 flex items-end justify-between">
          
          {/* Bottom Left: Mouse Scroll to Ride */}
          <div className="flex items-center gap-3.5 text-white/80 select-none group cursor-pointer">
            <div className="w-5 h-8.5 rounded-full border-2 border-white/40 group-hover:border-[#FECD08] transition-colors flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-[#FECD08] rounded-full animate-bounce" />
            </div>
            <span className="font-rajdhani font-bold text-xs tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
              SCROLL TO RIDE
            </span>
          </div>

          {/* Bottom Right: GPS Coordinates HUD Reticle */}
          <div className="flex items-center gap-3.5 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 hover:border-[#FECD08]/40 transition-colors">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Crosshair className="w-7 h-7 text-[#FECD08] animate-spin-slow stroke-[1.8]" />
            </div>
            <div className="font-mono text-xs sm:text-sm text-white/90 leading-tight">
              <div className="font-bold tracking-wider">27.9881° N</div>
              <div className="text-white/60 tracking-wider">86.9250° E</div>
            </div>
          </div>

        </div>

      </section>

      {/* Video Modal (Optional preview on click) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#181818] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <span className="font-rajdhani font-bold text-lg text-[#FECD08] uppercase tracking-wider">
                LBC MOTO | The Mountain Pass Expedition
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#FECD08] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center text-white/60">
              <div className="text-center p-6">
                <Play className="w-16 h-16 text-[#FECD08] mx-auto mb-3 animate-pulse" />
                <p className="font-rajdhani font-bold text-2xl text-white">Live by Compass, Not by Time.</p>
                <p className="font-sora text-sm text-white/50 mt-1">Expedition Video Ready for Embedding</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
