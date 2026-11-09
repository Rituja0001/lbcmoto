import { useState } from 'react'
import {
  ArrowRight,
  Navigation,
  MapPin,
  ShieldCheck,
  Route
} from 'lucide-react'
import heroBg from '../assets/images/hero-banner.webp'
import lbcNavImg from '../assets/images/LBC-MOTO.webp'
import carpurideNavImg from '../assets/images/Carpuride.webp'
import aoocciNavImg from '../assets/images/Aoocci.webp'

// The 3 Flagship Navigation Brands (Full Cover Images with Tailored Focus)
const NAV_BRANDS = [
  {
    id: 'lbc-moto',
    name: 'LBC MOTO',
    image: lbcNavImg,
    imgObjectPos: 'object-center',
    accentColor: '#FECD08'
  },
  {
    id: 'carpuride',
    name: 'CARPURIDE',
    image: carpurideNavImg,
    imgObjectPos: 'object-[52%_42%]',
    accentColor: '#00E5FF'
  },
  {
    id: 'aoocci',
    name: 'AOOCCI',
    image: aoocciNavImg,
    imgObjectPos: 'object-[62%_35%]',
    accentColor: '#00FF88'
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
      className="relative w-full bg-[#050608] border-b border-white/10 select-none overflow-hidden"
    >
      {/* =========================================================================
          DESKTOP VERSION (>= lg): DYNAMIC CROSS SLICES WITH SOLID BLACK DOCKED BASE
          Clear Unobstructed Image on Top + Solid Black Docked Name & CTA at Bottom
         ========================================================================= */}
      <div className="hidden lg:flex w-full h-[460px] xl:h-[500px] 2xl:h-[540px] relative overflow-hidden bg-black">
        
        {/* Left Side: Dark Scenic Mountain Road (~35% width, comfortable spacing, zero mirrors) */}
        <div className="relative w-[36%] xl:w-[33%] shrink-0 h-full flex flex-col justify-center pl-8 xl:pl-16 pr-6 z-10 overflow-hidden bg-black">
          {/* Background Scenic Road */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={heroBg}
              alt="Mountain Road Adventure"
              className="w-full h-full object-cover object-left opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent w-[85%]" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Left Headline Area */}
          <div className="relative z-10 my-auto">
            <h2 className="font-rajdhani font-black text-3xl sm:text-4xl xl:text-5xl 2xl:text-[54px] uppercase tracking-tight text-white leading-[0.98] drop-shadow-lg max-w-sm">
              NEVER LOSE <br />
              YOUR WAY
            </h2>

            <p className="font-sora text-xs xl:text-sm text-zinc-300 mt-4 leading-relaxed max-w-xs xl:max-w-sm drop-shadow">
              Go further with advanced motorcycle GPS and wireless CarPlay/Android Auto navigation built for real-world riders.
            </p>
          </div>
        </div>

        {/* Right Side: 3 Cross Slices with Clear Upper Image + Solid Black Docked Bottom */}
        <div className="relative flex-1 h-full flex overflow-hidden -ml-[100px] z-20">
          {NAV_BRANDS.map((brand, index) => {
            const isHovered = hoveredBrand === brand.id
            const isLast = index === NAV_BRANDS.length - 1

            // 100px diagonal slant: dynamic cross slash
            const clipPathStyle = isLast
              ? 'polygon(100px 0, 100% 0, 100% 100%, 0 100%)'
              : 'polygon(100px 0, 100% 0, calc(100% - 100px) 100%, 0 100%)'

            return (
              <div
                key={brand.id}
                onMouseEnter={() => setHoveredBrand(brand.id)}
                onMouseLeave={() => setHoveredBrand(null)}
                onClick={handleShopClick}
                style={{
                  clipPath: clipPathStyle,
                  marginLeft: index === 0 ? '0px' : '-100px',
                  zIndex: isHovered ? 30 : index + 10
                }}
                className={`relative flex-1 h-full flex flex-col justify-between transition-all duration-500 ease-out cursor-pointer group overflow-hidden bg-[#0A0C10] ${
                  isHovered ? 'flex-[1.2]' : 'flex-1'
                } shadow-[-20px_0_40px_rgba(0,0,0,0.85)] border-r border-white/5`}
              >
                {/* 1. Upper Product Image Area: Clean, Unobstructed Full View */}
                <div className="relative w-full flex-1 overflow-hidden bg-black">
                  <img
                    src={brand.image}
                    alt={`${brand.name} Motorcycle Navigation Display`}
                    className={`w-full h-full object-cover ${brand.imgObjectPos} group-hover:scale-108 transition-transform duration-700 brightness-95 group-hover:brightness-105`}
                  />

                  {/* Gentle vignette around image edges */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

                  {/* Subtle color tint on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: brand.accentColor }}
                  />
                </div>

                {/* Angled Glowing Cross Divider Edge */}
                <div
                  className="absolute inset-y-0 left-0 w-[3px] opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_15px_rgba(254,205,8,0.5)] z-20"
                  style={{ backgroundColor: brand.accentColor }}
                />

                {/* 2. Lower Grounded Black Dock for Name & CTA (Properly Anchored) */}
                <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/95 to-black/85 border-t border-white/10 pt-4 pb-7 xl:pb-9 px-6 flex flex-col items-center text-center select-none shadow-[0_-15px_30px_rgba(0,0,0,0.9)]">
                  
                  {/* Brand Name */}
                  <h3 className="font-rajdhani font-black text-2xl xl:text-3xl 2xl:text-4xl text-white uppercase tracking-wider drop-shadow-md mb-3 leading-none group-hover:text-[#FECD08] transition-colors">
                    {brand.name}
                  </h3>

                  {/* Standard Website Yellow CTA Button */}
                  <button
                    type="button"
                    onClick={handleShopClick}
                    className="px-6 py-2.5 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-xs xl:text-sm tracking-wider uppercase flex items-center gap-2 shadow-xl shadow-[#FECD08]/25 transition-all duration-200 group-hover:scale-105 cursor-pointer"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight className="w-4 h-4 text-[#212121] group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>

              </div>
            )
          })}
        </div>

      </div>

      {/* =========================================================================
          MOBILE & TABLET VERSION (< lg): 100% RESPONSIVE DOCKED CARDS
         ========================================================================= */}
      <div className="lg:hidden w-full px-4 sm:px-6 py-8 relative overflow-hidden bg-black">
        {/* Mobile Background Image (Scenic mountain road, ZERO mirrors) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={heroBg}
            alt="Scenic Mountain Road"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black" />
        </div>

        <div className="relative z-10">
          {/* Mobile Header (No badge) */}
          <div className="mb-6">
            <h2 className="font-rajdhani font-black text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
              NEVER LOSE YOUR WAY
            </h2>
            <p className="font-sora text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
              Go further with advanced motorcycle GPS and wireless CarPlay/Android Auto navigation built for real-world riders.
            </p>
          </div>

          {/* 3 Mobile Cards with Black Docked Bottom */}
          <div className="space-y-4">
            {NAV_BRANDS.map((brand) => (
              <div
                key={brand.id}
                onClick={handleShopClick}
                className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl cursor-pointer group active:scale-[0.98] transition-transform bg-black flex flex-col"
              >
                {/* Upper Product Image */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                  <img
                    src={brand.image}
                    alt={`${brand.name} Display`}
                    className="w-full h-full object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </div>

                {/* Grounded Black Bottom Dock */}
                <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-t from-black via-black/95 to-black/80 border-t border-white/10">
                  <h3 className="font-rajdhani font-black text-2xl sm:text-3xl uppercase tracking-wider text-white leading-none drop-shadow">
                    {brand.name}
                  </h3>

                  <button
                    type="button"
                    onClick={handleShopClick}
                    className="px-5 py-2.5 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-xl shadow-[#FECD08]/20 transition-all"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#212121]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* =========================================================================
          BOTTOM FEATURE STRIP (FULL-WIDTH TRUST BAR)
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
