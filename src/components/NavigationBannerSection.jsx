import { useState } from 'react'
import {
  ArrowRight,
  Navigation,
  MapPin,
  ShieldCheck,
  Route,
  ExternalLink
} from 'lucide-react'
import aoocciNavImg from '../assets/images/AOOCCI-Navigation.webp'
import carpurideNavImg from '../assets/images/CARPURIDE-Navigation.webp'
import lbcNavImg from '../assets/images/LBC-MOTO-Navigation.webp'
import duskBg from '../assets/images/cinematic-mountain-road-dusk.webp'

// The 3 Flagship Navigation Brands with client-requested colors & website styling
const NAV_BRANDS = [
  {
    id: 'lbc-moto',
    name: 'LBC MOTO',
    shortName: 'LBC',
    tagline: 'Signature BM6 & S5 Pro Cockpit Screens',
    specs: 'TPMS & Blind Spot Radar',
    // Client sketch: Yellow
    panelBg: 'bg-[#FECD08]',
    textColor: 'text-slate-950',
    accentColor: '#FECD08',
    image: lbcNavImg,
    badge: 'FLAGSHIP'
  },
  {
    id: 'carpuride',
    name: 'CARPURIDE',
    shortName: 'CARPURIDE',
    tagline: 'W502 & W702 Wireless CarPlay Series',
    specs: 'Apple CarPlay & Android Auto',
    // Client sketch: Cyan / Ocean Blue
    panelBg: 'bg-[#0284C7]',
    textColor: 'text-white',
    accentColor: '#0284C7',
    image: carpurideNavImg,
    badge: 'OFFICIAL'
  },
  {
    id: 'aoocci',
    name: 'AOOCCI',
    shortName: 'AOOCCI',
    tagline: 'Dual 4K Recording Smart HUD Dashcam',
    specs: 'Front & Rear Sony 4K HUD',
    // Client sketch: Green
    panelBg: 'bg-[#10B981]',
    textColor: 'text-slate-950',
    accentColor: '#10B981',
    image: aoocciNavImg,
    badge: '4K TECH'
  }
]

export default function NavigationBannerSection() {
  const [hoveredBrand, setHoveredBrand] = useState(null)

  const handleShopClick = () => {
    const el = document.getElementById('featured-products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="navigation-flyer"
      className="relative w-full bg-[#07090D] border-b border-white/10 select-none overflow-hidden"
    >
      {/* =========================================================================
          DESKTOP VERSION (>= lg): EXACT CLIENT ANGLED/DIAGONAL 3-BRAND FLYER
         ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-[460px] xl:min-h-[500px]">
        
        {/* Left Side: Dark Hero Headline with Cinematic Mountain Backdrop (~38% width) */}
        <div className="relative w-[38%] xl:w-[36%] shrink-0 flex flex-col justify-between p-8 xl:p-12 z-10 overflow-hidden bg-black">
          {/* Background image & dark gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={duskBg}
              alt="Motorcycle Navigation Background"
              className="w-full h-full object-cover object-left opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-black/70" />
          </div>

          {/* Left Content Area */}
          <div className="relative z-10 my-auto pr-4">
            {/* Header Badge matching client mock */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FECD08] animate-pulse" />
              <span className="font-rajdhani font-black text-xs tracking-[0.2em] text-[#FECD08] uppercase">
                02 / NAVIGATION (PRIORITY 01)
              </span>
            </div>

            {/* Headline matching client mock */}
            <h2 className="font-rajdhani font-black text-4xl xl:text-5xl 2xl:text-6xl uppercase tracking-tight text-white leading-[0.95] drop-shadow-lg">
              NEVER LOSE <br />
              YOUR WAY
            </h2>

            {/* Subtitle matching client mock */}
            <p className="font-sora text-sm xl:text-base text-zinc-300 mt-4 leading-relaxed max-w-sm">
              Go further with advanced motorcycle GPS and wireless CarPlay/Android Auto navigation built for real-world riders.
            </p>

            {/* Micro Quick Link */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={handleShopClick}
                className="inline-flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-wider text-[#FECD08] hover:text-white transition-colors cursor-pointer group/link"
              >
                <span>EXPLORE ALL BRANDS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: 3 Angled / Slanted Brand Slices (~62% width) */}
        <div className="relative flex-1 flex overflow-hidden -ml-12 xl:-ml-16 z-20">
          {NAV_BRANDS.map((brand, index) => {
            const isHovered = hoveredBrand === brand.id

            return (
              <div
                key={brand.id}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
                onClick={handleShopClick}
                style={{
                  clipPath: 'polygon(18% 0, 100% 0, 82% 100%, 0 100%)',
                  marginLeft: index === 0 ? '-3%' : '-7%',
                  zIndex: isHovered ? 30 : index + 10
                }}
                className={`relative flex-1 transition-all duration-500 ease-out cursor-pointer group overflow-hidden ${
                  brand.panelBg
                } ${isHovered ? 'flex-[1.25]' : 'flex-1'} shadow-[-15px_0_35px_rgba(0,0,0,0.5)]`}
              >
                {/* Subtle Hardware Product Image Overlay inside the slice */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 group-hover:opacity-40 transition-opacity duration-500">
                  <img
                    src={brand.image}
                    alt={`${brand.name} Navigation`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Angled highlight shine edge */}
                <div className="absolute inset-y-0 left-0 w-[2px] bg-white/30 pointer-events-none" />

                {/* Brand Content (Counter-balanced so text remains crisp and centered) */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 xl:p-8 text-center">
                  
                  {/* Top Badge */}
                  <span className="text-[10px] xl:text-xs font-rajdhani font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-black/25 text-white/95 mb-3 backdrop-blur-sm">
                    {brand.badge}
                  </span>

                  {/* Big Brand Typography matching client sketch */}
                  <h3
                    className={`font-rajdhani font-black text-3xl xl:text-4xl 2xl:text-5xl uppercase tracking-wider ${
                      brand.textColor
                    } drop-shadow-sm group-hover:scale-105 transition-transform duration-300 leading-none`}
                  >
                    {brand.name}
                  </h3>

                  {/* Subtitle / Model Tag */}
                  <p
                    className={`font-sora text-xs xl:text-sm font-semibold mt-2 max-w-[200px] line-clamp-1 opacity-90 ${
                      brand.textColor
                    }`}
                  >
                    {brand.specs}
                  </p>

                  {/* Pill SHOP NOW Button matching client sketch */}
                  <div className="mt-6">
                    <button
                      type="button"
                      className="px-6 py-2.5 rounded-full bg-black hover:bg-slate-900 text-white font-rajdhani font-black text-xs xl:text-sm tracking-widest uppercase flex items-center gap-2.5 transition-all duration-300 shadow-xl group-hover:scale-105 group-hover:shadow-2xl cursor-pointer"
                    >
                      <span>SHOP NOW</span>
                      <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* =========================================================================
          MOBILE & TABLET VERSION (< lg): 100% RESPONSIVE, STACKED & TOUCH-OPTIMIZED
         ========================================================================= */}
      <div className="lg:hidden w-full px-4 sm:px-6 py-10">
        
        {/* Mobile Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FECD08] animate-pulse" />
            <span className="font-rajdhani font-black text-[11px] sm:text-xs tracking-[0.2em] text-[#FECD08] uppercase">
              02 / NAVIGATION (PRIORITY 01)
            </span>
          </div>

          <h2 className="font-rajdhani font-black text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
            NEVER LOSE YOUR WAY
          </h2>

          <p className="font-sora text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
            Go further with advanced motorcycle GPS and wireless CarPlay/Android Auto navigation built for real-world riders.
          </p>
        </div>

        {/* 3 Responsive Mobile Cards (Stacked, zero cramming, high touch usability) */}
        <div className="space-y-4">
          {NAV_BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={handleShopClick}
              className={`relative rounded-2xl overflow-hidden p-5 transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.98] ${
                brand.panelBg
              }`}
            >
              {/* Product Background preview */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20 overflow-hidden">
                <img
                  src={brand.image}
                  alt={`${brand.name} Display`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
              </div>

              {/* Mobile Card Content */}
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-rajdhani font-black tracking-widest uppercase px-2 py-0.5 rounded bg-black/25 text-white inline-block mb-1">
                    {brand.badge}
                  </span>
                  <h3
                    className={`font-rajdhani font-black text-2xl sm:text-3xl uppercase tracking-wider leading-none ${
                      brand.textColor
                    }`}
                  >
                    {brand.name}
                  </h3>
                  <p
                    className={`font-sora text-xs font-medium mt-1 line-clamp-1 ${
                      brand.textColor
                    } opacity-90`}
                  >
                    {brand.tagline}
                  </p>
                </div>

                {/* Mobile Shop Now Pill Button */}
                <button
                  type="button"
                  className="shrink-0 px-4 py-2 rounded-full bg-black text-white font-rajdhani font-black text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-md"
                >
                  <span>SHOP</span>
                  <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center">
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================================
          BOTTOM FEATURE STRIP (MATCHING CLIENT SKETCH)
          Turn-by-Turn GPS | Offline Maps Ready | IPX7 Weatherproof | Dynamic Route Planning
         ========================================================================= */}
      <div className="relative z-30 w-full px-4 sm:px-8 xl:px-12 2xl:px-16 py-3.5 border-t border-white/10 bg-black/90 backdrop-blur-md">
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
