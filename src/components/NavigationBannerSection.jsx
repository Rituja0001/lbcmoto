import {
  ArrowRight,
  Navigation,
  MapPin,
  ShieldCheck,
  Route
} from 'lucide-react'
import heroBg from '../assets/images/hero-banner.webp'

export default function NavigationBannerSection() {
  const handleShopClick = () => {
    const el = document.getElementById('featured-products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="navigation-flyer"
      className="relative w-full bg-[#050608] border-b border-white/10 select-none overflow-hidden"
    >
      {/* =========================================================================
          DESKTOP VERSION (>= lg): EXACT MATCH TO CLIENT SKETCH
          Left Dark Landscape + 3 Angled Parallelograms (Yellow, Cyan, Green)
         ========================================================================= */}
      <div className="hidden lg:block relative w-full h-[360px] xl:h-[400px] 2xl:h-[440px] overflow-hidden bg-black">
        
        {/* Left Cinematic Mountain Road Background (Pure scenic road, ZERO mirrors) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={heroBg}
            alt="Mountain Road Adventure"
            className="w-full h-full object-cover object-left opacity-45"
          />
          {/* Gradients ensuring left headline text is razor sharp */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent w-[55%]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Left Headline Area (~35% width) */}
        <div className="relative z-10 w-[35%] xl:w-[33%] h-full pl-8 xl:pl-14 2xl:pl-20 pr-4 flex flex-col justify-center">
          {/* Badge matching client sketch */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-rajdhani font-bold text-xs xl:text-sm tracking-[0.2em] text-[#FECD08] uppercase">
              02 / NAVIGATION (PRIORITY 01)
            </span>
          </div>

          {/* Headline matching client sketch */}
          <h2 className="font-rajdhani font-black text-4xl xl:text-5xl 2xl:text-[56px] uppercase tracking-tight text-white leading-[0.95] drop-shadow-lg">
            NEVER LOSE <br />
            YOUR WAY
          </h2>

          {/* Subtitle matching client sketch */}
          <p className="font-sora text-xs xl:text-sm text-zinc-300 mt-4 leading-relaxed max-w-sm">
            Go further with advanced motorcycle GPS and wireless CarPlay/Android Auto navigation built for real-world riders.
          </p>
        </div>

        {/* Right Side: 3 SVG Angled Diagonal Panels (Yellow, Cyan, Green) */}
        <div className="absolute top-0 right-0 h-full w-[67%] xl:w-[69%] z-20 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >
            {/* Panel 1: Yellow (LBC) */}
            <polygon
              points="145,0 440,0 295,500 0,500"
              fill="#FFD000"
            />
            {/* Panel 2: Cyan (CARPURIDE) */}
            <polygon
              points="435,0 725,0 580,500 290,500"
              fill="#0099CC"
            />
            {/* Panel 3: Green (AOOCCI) */}
            <polygon
              points="720,0 1000,0 1000,500 575,500"
              fill="#00B050"
            />
          </svg>
        </div>

        {/* Interactive Click & Content Layer Over the 3 Angled Panels */}
        <div className="absolute top-0 right-0 h-full w-[67%] xl:w-[69%] z-30 flex">
          
          {/* Panel 1: LBC */}
          <div
            onClick={handleShopClick}
            className="relative flex-1 h-full flex flex-col items-center justify-center cursor-pointer group select-none pr-6 xl:pr-10"
          >
            <h3 className="font-rajdhani font-black text-4xl xl:text-5xl 2xl:text-6xl text-black uppercase tracking-wider transition-transform duration-300 group-hover:scale-105">
              LBC
            </h3>
            <button
              type="button"
              className="mt-6 px-6 py-2.5 rounded-full bg-black hover:bg-zinc-900 text-white font-rajdhani font-black text-xs xl:text-sm tracking-widest uppercase flex items-center gap-2.5 shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
            >
              <span>SHOP NOW</span>
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-bold">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Panel 2: CARPURIDE */}
          <div
            onClick={handleShopClick}
            className="relative flex-1 h-full flex flex-col items-center justify-center cursor-pointer group select-none px-4"
          >
            <h3 className="font-rajdhani font-black text-3xl xl:text-4xl 2xl:text-5xl text-black uppercase tracking-wider transition-transform duration-300 group-hover:scale-105">
              CARPURIDE
            </h3>
            <button
              type="button"
              className="mt-6 px-6 py-2.5 rounded-full bg-black hover:bg-zinc-900 text-white font-rajdhani font-black text-xs xl:text-sm tracking-widest uppercase flex items-center gap-2.5 shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
            >
              <span>SHOP NOW</span>
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-bold">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Panel 3: AOOCCI */}
          <div
            onClick={handleShopClick}
            className="relative flex-1 h-full flex flex-col items-center justify-center cursor-pointer group select-none pl-6 xl:pl-8 pr-4"
          >
            <h3 className="font-rajdhani font-black text-3xl xl:text-4xl 2xl:text-5xl text-black uppercase tracking-wider transition-transform duration-300 group-hover:scale-105">
              AOOCCI
            </h3>
            <button
              type="button"
              className="mt-6 px-6 py-2.5 rounded-full bg-black hover:bg-zinc-900 text-white font-rajdhani font-black text-xs xl:text-sm tracking-widest uppercase flex items-center gap-2.5 shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
            >
              <span>SHOP NOW</span>
              <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-bold">
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

        </div>

      </div>

      {/* =========================================================================
          MOBILE & TABLET VERSION (< lg): 100% RESPONSIVE, ZERO OUT-OF-SYNC
         ========================================================================= */}
      <div className="lg:hidden w-full px-4 sm:px-6 py-8 relative overflow-hidden bg-black">
        {/* Mobile Background Image (Pure scenic road, ZERO mirrors) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={heroBg}
            alt="Scenic Mountain Road"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black" />
        </div>

        <div className="relative z-10">
          {/* Mobile Header matching client mock */}
          <div className="mb-6">
            <span className="font-rajdhani font-bold text-xs tracking-[0.2em] text-[#FECD08] uppercase block mb-2">
              02 / NAVIGATION (PRIORITY 01)
            </span>
            <h2 className="font-rajdhani font-black text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
              NEVER LOSE YOUR WAY
            </h2>
            <p className="font-sora text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
              Go further with advanced motorcycle GPS and wireless CarPlay/Android Auto navigation built for real-world riders.
            </p>
          </div>

          {/* 3 Mobile Cards matching exact colors & typography */}
          <div className="space-y-3.5">
            
            {/* Mobile Card 1: LBC (Yellow) */}
            <div
              onClick={handleShopClick}
              className="w-full rounded-2xl bg-[#FFD000] p-5 flex items-center justify-between gap-4 shadow-xl cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div>
                <span className="text-[10px] font-rajdhani font-black uppercase tracking-wider text-black/70 block mb-0.5">
                  FLAGSHIP COCKPIT
                </span>
                <h3 className="font-rajdhani font-black text-2xl sm:text-3xl text-black uppercase tracking-wider leading-none">
                  LBC
                </h3>
              </div>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-black text-white font-rajdhani font-black text-xs tracking-wider uppercase flex items-center gap-2 shadow-md shrink-0"
              >
                <span>SHOP NOW</span>
                <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </button>
            </div>

            {/* Mobile Card 2: CARPURIDE (Cyan) */}
            <div
              onClick={handleShopClick}
              className="w-full rounded-2xl bg-[#0099CC] p-5 flex items-center justify-between gap-4 shadow-xl cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div>
                <span className="text-[10px] font-rajdhani font-black uppercase tracking-wider text-black/70 block mb-0.5">
                  WIRELESS CARPLAY
                </span>
                <h3 className="font-rajdhani font-black text-2xl sm:text-3xl text-black uppercase tracking-wider leading-none">
                  CARPURIDE
                </h3>
              </div>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-black text-white font-rajdhani font-black text-xs tracking-wider uppercase flex items-center gap-2 shadow-md shrink-0"
              >
                <span>SHOP NOW</span>
                <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </button>
            </div>

            {/* Mobile Card 3: AOOCCI (Green) */}
            <div
              onClick={handleShopClick}
              className="w-full rounded-2xl bg-[#00B050] p-5 flex items-center justify-between gap-4 shadow-xl cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div>
                <span className="text-[10px] font-rajdhani font-black uppercase tracking-wider text-black/70 block mb-0.5">
                  DUAL 4K HUD
                </span>
                <h3 className="font-rajdhani font-black text-2xl sm:text-3xl text-black uppercase tracking-wider leading-none">
                  AOOCCI
                </h3>
              </div>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-black text-white font-rajdhani font-black text-xs tracking-wider uppercase flex items-center gap-2 shadow-md shrink-0"
              >
                <span>SHOP NOW</span>
                <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center font-bold">
                  <ArrowRight className="w-2.5 h-2.5" />
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM FEATURE STRIP (EXACT MATCH TO CLIENT SKETCH)
          Turn-by-Turn GPS | Offline Maps Ready | IPX7 Weatherproof | Dynamic Route Planning
         ========================================================================= */}
      <div className="relative z-30 w-full px-4 sm:px-8 xl:px-12 2xl:px-16 py-3 border-t border-white/10 bg-black/90 backdrop-blur-md">
        <div className="max-w-[1536px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs font-sora text-white/80">
          
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
              <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-xs">Turn-by-Turn GPS</div>
              <div className="text-[10px] text-zinc-400 hidden sm:block">Realtime Cockpit HUD</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-xs">Offline Maps Ready</div>
              <div className="text-[10px] text-zinc-400 hidden sm:block">CarPlay & Android Auto</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-xs">IPX7 Weatherproof</div>
              <div className="text-[10px] text-zinc-400 hidden sm:block">Vibration-Damped Mounts</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
              <Route className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-xs">Dynamic Route Planning</div>
              <div className="text-[10px] text-zinc-400 hidden sm:block">Dual 4K & Radar Telemetry</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
