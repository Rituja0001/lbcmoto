import { useState, useEffect } from 'react'
import { ArrowRight, Play, X } from 'lucide-react'
import heroBg from '../assets/images/hero-banner.webp'

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [coords, setCoords] = useState({
    lat: 27.9881,
    lng: 86.9250,
  })

  // Live dynamic GPS coordinates simulation (subtle mountain touring movement)
  useEffect(() => {
    const interval = setInterval(() => {
      setCoords((prev) => {
        let nextLat = +(prev.lat + (Math.random() * 0.0003 - 0.0001)).toFixed(4)
        let nextLng = +(prev.lng + (Math.random() * 0.0004 - 0.0001)).toFixed(4)
        if (nextLat > 28.0500 || nextLat < 27.9500) nextLat = 27.9881
        if (nextLng > 87.0000 || nextLng < 86.8500) nextLng = 86.9250
        return { lat: nextLat, lng: nextLng }
      })
    }, 600)

    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const el = document.getElementById('categories-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section className="relative min-h-[580px] sm:min-h-[640px] md:min-h-screen w-full flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-4 sm:pb-10 select-none">
        
        {/* Background Image: hero-banner.webp */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="LBC MOTO Adventure Touring"
            className="w-full h-full object-cover object-center scale-100"
          />
          {/* Subtle directional vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-black/40" />
        </div>

        {/* Hero Middle Content Area */}
        <div className="relative z-10 w-full px-5 sm:px-8 xl:px-12 2xl:px-16 flex-1 flex flex-col justify-center my-auto min-h-0 py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
            
            {/* Left Column: Bold Headline & Action Buttons */}
            <div className="lg:col-span-7 xl:col-span-8 text-left pt-2 sm:pt-10">
              
              {/* Top Mini Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#FECD08] rotate-45 shadow-sm shadow-[#FECD08]/50" />
                <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                  LBC MOTO
                </span>
              </div>

              {/* Headline: YOUR RIDE. YOUR RULES. YOUR ROAD. */}
              <h1 className="font-rajdhani font-black text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.4rem] 2xl:text-[6.4rem] tracking-tight leading-[0.94] sm:leading-[0.92] uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]">
                <span className="block">YOUR RIDE.</span>
                <span className="block">YOUR RULES.</span>
                <span className="block text-[#FECD08]">YOUR ROAD.</span>
              </h1>

              {/* Subheading */}
              <p className="font-sora text-xs sm:text-sm md:text-base text-white/90 max-w-lg mt-2.5 sm:mt-5 leading-relaxed drop-shadow">
                Gear up for every adventure with technology built for the way you ride.
              </p>

              {/* Action Buttons: Stacked cleanly full-width on mobile, inline on sm+ */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mt-5 sm:mt-8 max-w-md sm:max-w-none">
                <button
                  type="button"
                  onClick={scrollToNext}
                  className="w-full sm:w-auto px-6 py-3 sm:py-3.5 sm:px-7 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FECD08]/25 transition-all duration-200 cursor-pointer group"
                >
                  <span>EXPLORE THE GEAR</span>
                  <ArrowRight className="w-4 h-4 text-[#212121] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="w-full sm:w-auto px-5 py-3 sm:py-3.5 sm:px-6 rounded-xl bg-black/45 hover:bg-black/65 border border-white/30 hover:border-white backdrop-blur-md text-white font-rajdhani font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center text-[#212121] group-hover:scale-110 transition-transform">
                    <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#212121] text-[#212121] ml-0.5" />
                  </div>
                  <span>DISCOVER THE JOURNEY</span>
                </button>
              </div>

            </div>

            {/* Right Column: Handwritten Quote Floating over Scenic Sky / Valley */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center items-end text-right mt-3 sm:mt-8 lg:mt-0 pr-1 sm:pr-0">
              <div className="font-script text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/95 leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] -rotate-3 select-none">
                <div>Live by Compass</div>
                <div className="lg:mr-6">Not by Time.</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Pinned Controls: Scroll to Ride & GPS Reticle */}
        <div className="relative z-10 w-full px-5 sm:px-8 xl:px-12 2xl:px-16 pt-1 pb-1 sm:pt-2 flex items-center justify-between shrink-0">
          
          {/* Bottom Left: Mouse Scroll to Ride */}
          <div
            onClick={scrollToNext}
            className="flex items-center gap-3 text-white/90 select-none group cursor-pointer"
          >
            <div className="w-4.5 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-white/50 group-hover:border-[#FECD08] transition-colors flex justify-center pt-1">
              <div className="w-1 h-2 bg-[#FECD08] rounded-full animate-bounce" />
            </div>
            <span className="font-rajdhani font-bold text-[11px] sm:text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
              SCROLL TO RIDE
            </span>
          </div>

          {/* Bottom Right: Live GPS Coordinates HUD Reticle */}
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 hover:border-[#FECD08]/50 transition-colors shadow-lg">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#FECD08] animate-spin-slow shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="8.5" />
                <line x1="12" y1="2" x2="12" y2="5.5" />
                <line x1="12" y1="18.5" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5.5" y2="12" />
                <line x1="18.5" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <div className="font-mono tabular-nums text-[11px] sm:text-xs text-white/95 leading-tight select-none">
              <div className="font-bold tracking-wider">{coords.lat.toFixed(4)}° N</div>
              <div className="text-white/70 tracking-wider">{coords.lng.toFixed(4)}° E</div>
            </div>
          </div>

        </div>

      </section>

      {/* Video Modal */}
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
    </>
  )
}
