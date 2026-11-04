import {
  ArrowRight,
  Navigation,
  Smartphone,
  ShieldCheck,
  Video,
  CheckCircle2,
  Cpu
} from 'lucide-react'
import aoocciNavImg from '../assets/images/AOOCCI-Navigation.webp'
import carpurideNavImg from '../assets/images/CARPURIDE-Navigation.webp'
import lbcNavImg from '../assets/images/LBC-MOTO-Navigation.webp'

// The 3 Flagship Navigation Brands requested by client
const NAV_BRANDS = [
  {
    id: 'lbc-moto',
    name: 'LBC MOTO',
    badge: 'FLAGSHIP COCKPIT',
    badgeStyle: 'bg-[#FECD08] text-slate-950 font-black',
    title: 'BM6 & S5 PRO Displays',
    highlight: 'Integrated TPMS & Dual Blind-Spot Radar',
    features: ['6.0" Sunlight IPS', 'Realtime Tire Pressure (TPMS)', 'Dual BSD Radar Sensor'],
    image: lbcNavImg,
    btnLabel: 'EXPLORE LBC MOTO',
    accentBorder: 'hover:border-[#FECD08]/80',
    accentGlow: 'hover:shadow-[0_10px_35px_rgba(254,205,8,0.18)]'
  },
  {
    id: 'carpuride',
    name: 'CARPURIDE',
    badge: 'OFFICIAL WIRELESS',
    badgeStyle: 'bg-white text-slate-950 font-black',
    title: 'W502 & W702 Pro Series',
    highlight: 'Wireless Apple CarPlay & Android Auto',
    features: ['Wireless Apple CarPlay', 'Wireless Android Auto Link', 'IP67 Waterproof & Shockproof'],
    image: carpurideNavImg,
    btnLabel: 'EXPLORE CARPURIDE',
    accentBorder: 'hover:border-cyan-400/80',
    accentGlow: 'hover:shadow-[0_10px_35px_rgba(34,211,238,0.16)]'
  },
  {
    id: 'aoocci',
    name: 'AOOCCI',
    badge: 'DUAL 4K HUD',
    badgeStyle: 'bg-[#FECD08] text-slate-950 font-black',
    title: 'Dual 4K Recording Dashcam HUD',
    highlight: 'Front & Rear Sony 4K Cameras',
    features: ['Front & Rear Sony 4K Video', 'Turn-by-Turn GPS HUD', 'High-Speed Wi-Fi App Transfer'],
    image: aoocciNavImg,
    btnLabel: 'EXPLORE AOOCCI',
    accentBorder: 'hover:border-emerald-400/80',
    accentGlow: 'hover:shadow-[0_10px_35px_rgba(52,211,153,0.16)]'
  }
]

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
      className="relative w-full bg-[#080A0F] border-b border-white/10 pt-10 sm:pt-14 pb-5 sm:pb-7 overflow-hidden"
    >
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-[#FECD08]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header: Minimal & Punchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FECD08] animate-pulse" />
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.2em] text-[#FECD08] uppercase">
                MOTORCYCLE SMART SCREENS & NAVIGATION
              </span>
            </div>
            
            <h2 className="font-rajdhani font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              NEVER LOSE <span className="text-[#FECD08]">YOUR WAY</span>
            </h2>

            <p className="font-sora text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl">
              Official destination for <strong className="text-white font-semibold">LBC MOTO</strong>,{' '}
              <strong className="text-white font-semibold">CARPURIDE</strong>, and{' '}
              <strong className="text-white font-semibold">AOOCCI</strong> motorcycle cockpit displays.
            </p>
          </div>

          <button
            type="button"
            onClick={handleShopClick}
            className="self-start md:self-end px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FECD08]/50 text-white hover:text-[#FECD08] font-rajdhani font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>VIEW ALL NAVIGATION PRODUCTS</span>
            <ArrowRight className="w-4 h-4 text-[#FECD08]" />
          </button>
        </div>

        {/* =========================================================================
            THE 3 VISUAL BRAND CARDS (SIDE-BY-SIDE / MOBILE-RESPONSIVE)
            Visually distinct, high image contrast, clear brand association
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {NAV_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className={`group relative rounded-2xl overflow-hidden bg-[#10141D] border border-white/10 ${brand.accentBorder} ${brand.accentGlow} transition-all duration-300 flex flex-col`}
            >
              {/* Product Hardware Image Container: Bright & Prominent */}
              <div className="relative w-full aspect-[16/11] overflow-hidden bg-black/80">
                <img
                  src={brand.image}
                  alt={`${brand.name} Motorcycle Navigation Display`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle bottom shadow on image so text below has high contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10141D] via-transparent to-transparent pointer-events-none" />

                {/* Floating Brand Name Pill (Top Left) */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-[#FECD08]" />
                  <span className="font-rajdhani font-black text-sm tracking-wider text-white uppercase">
                    {brand.name}
                  </span>
                </div>

                {/* Floating Badge (Top Right) */}
                <div
                  className={`absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-md font-rajdhani text-[10px] tracking-widest uppercase shadow-xl ${brand.badgeStyle}`}
                >
                  {brand.badge}
                </div>
              </div>

              {/* Card Body: Clean, readable, low cognitive load */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                {/* Product Title */}
                <h3 className="font-rajdhani font-black text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-[#FECD08] transition-colors leading-tight mb-1">
                  {brand.title}
                </h3>

                {/* Highlight line */}
                <p className="font-sora text-xs sm:text-sm text-zinc-300 font-medium mb-3">
                  {brand.highlight}
                </p>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {brand.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-[11px] font-sora font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#FECD08] shrink-0" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>

                {/* Card CTA Button */}
                <button
                  type="button"
                  onClick={handleShopClick}
                  className="w-full mt-auto py-3 px-4 rounded-xl bg-white/5 group-hover:bg-[#FECD08] text-white group-hover:text-slate-950 font-rajdhani font-black text-sm tracking-wider uppercase transition-all duration-200 border border-white/15 group-hover:border-[#FECD08] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{brand.btnLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Strip: Trust & Specs (Compact padding) */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sora text-white/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white">Turn-by-Turn GPS</div>
                <div className="text-[10px] text-zinc-400">Offline & Online Maps</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white">CarPlay & Android Auto</div>
                <div className="text-[10px] text-zinc-400">Wireless Auto Connect</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white">IP67 Weatherproof</div>
                <div className="text-[10px] text-zinc-400">Vibration-Damped Mounts</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-white">Dual 4K & Radar Telemetry</div>
                <div className="text-[10px] text-zinc-400">Realtime Cockpit HUD</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
