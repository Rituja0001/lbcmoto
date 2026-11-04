import { useState } from 'react'
import {
  ArrowRight,
  Navigation,
  Map,
  ShieldCheck,
  Route,
  Video,
  Radio,
  CheckCircle2,
  ExternalLink
} from 'lucide-react'
import aoocciNavBg from '../assets/images/AOOCCI-Navigation.webp'
import carpurideNavBg from '../assets/images/CARPURIDE-Navigation.webp'
import lbcNavBg from '../assets/images/LBC-MOTO-Navigation.webp'

// The 3 Flagship Navigation Brands requested by client
const NAV_BRANDS = [
  {
    id: 'lbc-moto',
    name: 'LBC MOTO',
    subtitle: 'Signature Cockpit Series',
    badge: 'FLAGSHIP',
    models: 'BM6 6" & S5 PRO Displays',
    features: ['Integrated TPMS', 'Dual Radar Blind Spot', '6" Sunlight-Readable IPS'],
    bg: lbcNavBg,
    tagline: 'High-velocity integrated cockpit telemetry with blind-spot radar.'
  },
  {
    id: 'carpuride',
    name: 'CARPURIDE',
    subtitle: 'Official Wireless CarPlay',
    badge: 'BESTSELLER',
    models: 'W502 & W702 Pro Series',
    features: ['Wireless Apple CarPlay', 'Android Auto Link', 'IP67 Waterproof & Shockproof'],
    bg: carpurideNavBg,
    tagline: 'Seamless smartphone screen mirroring designed for all-weather touring.'
  },
  {
    id: 'aoocci',
    name: 'AOOCCI',
    subtitle: 'Dual 4K Smart Dashcam',
    badge: '4K TECH',
    models: 'AOOCCI Smart Cockpit Series',
    features: ['Front & Rear 4K Video', 'Sony Starvis Sensor', 'Live GPS Tracking & HUD'],
    bg: aoocciNavBg,
    tagline: 'Dual ultra-HD camera recording combined with smart turn-by-turn routing.'
  }
]

export default function NavigationBannerSection() {
  const [activeBrandId, setActiveBrandId] = useState('lbc-moto')

  const activeBrand = NAV_BRANDS.find((b) => b.id === activeBrandId) || NAV_BRANDS[0]

  const handleShopClick = () => {
    const el = document.getElementById('featured-products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="navigation-flyer"
      className="relative w-full overflow-hidden select-none border-b border-white/10 group bg-[#0A0C10]"
    >
      {/* Dynamic Background Image with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={activeBrand.bg || aoocciNavBg}
          alt={`${activeBrand.name} Motorcycle Navigation`}
          className="w-full h-full object-cover object-center lg:object-right transition-all duration-700 ease-out scale-100 group-hover:scale-102"
        />
        {/* Layered directional vignette gradients so text & brand pills are razor sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/60" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FECD08] animate-pulse" />
          <span className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.2em] text-[#FECD08] uppercase">
            MOTORCYCLE SMART SCREENS & NAVIGATION
          </span>
          <span className="text-white/40 text-xs hidden sm:inline">|</span>
          <span className="text-white/80 text-xs font-sora font-medium hidden sm:inline">
            Official Destination for LBC MOTO • CARPURIDE • AOOCCI
          </span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="font-rajdhani font-black text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] uppercase tracking-tight text-white leading-[0.92] drop-shadow-lg max-w-4xl">
          <span className="block">NEVER LOSE</span>
          <span className="block text-white">YOUR WAY.</span>
        </h2>

        {/* Subtitle explicitly explaining that we sell LBC MOTO, CARPURIDE & AOOCCI */}
        <p className="font-sora text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mt-4 sm:mt-5 leading-relaxed drop-shadow">
          Upgrade your ride with next-gen motorcycle displays featuring wireless{' '}
          <strong className="text-white font-semibold">Apple CarPlay</strong>,{' '}
          <strong className="text-white font-semibold">Android Auto</strong>, and GPS navigation.
          We are authorised retailers for{' '}
          <span className="text-[#FECD08] font-bold">LBC MOTO</span>,{' '}
          <span className="text-[#FECD08] font-bold">CARPURIDE</span>, and{' '}
          <span className="text-[#FECD08] font-bold">AOOCCI</span> smart cockpit systems.
        </p>

        {/* =========================================================================
            THE 3 AUTHORISED BRANDS SHOWCASE (LBC MOTO • CARPURIDE • AOOCCI)
           ========================================================================= */}
        <div className="mt-7 sm:mt-9 max-w-4xl">
          <div className="text-xs font-rajdhani font-black uppercase tracking-widest text-[#FECD08] mb-3 flex items-center gap-2">
            <span>OFFICIAL AUTHORISED BRANDS RANGE</span>
            <div className="h-[1px] flex-1 bg-white/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {NAV_BRANDS.map((brand) => {
              const isSelected = activeBrandId === brand.id

              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => setActiveBrandId(brand.id)}
                  className={`group/card relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 cursor-pointer backdrop-blur-xl border ${
                    isSelected
                      ? 'bg-white/15 border-[#FECD08] shadow-[0_10px_30px_rgba(254,205,8,0.2)] -translate-y-1'
                      : 'bg-black/50 hover:bg-black/70 border-white/15 hover:border-white/40'
                  }`}
                >
                  {/* Top Bar: Brand Name & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-rajdhani font-black text-lg sm:text-xl uppercase tracking-wider text-white group-hover/card:text-[#FECD08] transition-colors">
                      {brand.name}
                    </span>
                    <span
                      className={`text-[9px] font-rajdhani font-black tracking-wider uppercase px-2 py-0.5 rounded shadow ${
                        isSelected
                          ? 'bg-[#FECD08] text-slate-950'
                          : 'bg-white/10 text-white/80'
                      }`}
                    >
                      {brand.badge}
                    </span>
                  </div>

                  {/* Subtitle / Model line */}
                  <div className="font-sora text-xs font-semibold text-zinc-300 mb-2 truncate">
                    {brand.models}
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1 pt-2 border-t border-white/10 text-[11px] font-sora text-zinc-400">
                    {brand.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5">
                        <CheckCircle2
                          className={`w-3 h-3 shrink-0 ${
                            isSelected ? 'text-[#FECD08]' : 'text-zinc-500'
                          }`}
                        />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 sm:mt-9">
          <button
            type="button"
            onClick={handleShopClick}
            className="px-7 py-3.5 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FECD08]/25 flex items-center gap-2 cursor-pointer group/btn"
          >
            <span>SHOP {activeBrand.name} NAVIGATION</span>
            <ArrowRight className="w-4 h-4 text-[#212121] group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={handleShopClick}
            className="px-6 py-3.5 rounded-xl bg-black/50 hover:bg-black/75 border border-white/30 hover:border-white text-white font-rajdhani font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW ALL 3 BRANDS</span>
          </button>
        </div>

      </div>

      {/* Bottom Feature Badges Bar */}
      <div className="relative z-10 w-full px-4 sm:px-8 xl:px-12 2xl:px-16 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-white/10 bg-black/75 backdrop-blur-md">
        <div className="max-w-[1536px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs font-sora text-white/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
              <Navigation className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white">Turn-by-Turn GPS</div>
              <div className="text-[10px] text-zinc-400">Offline & Online Routing</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
              <Map className="w-4 h-4" />
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
              <div className="font-semibold text-white">IP67 All-Weather Proof</div>
              <div className="text-[10px] text-zinc-400">Vibration-Damped Mounts</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white">Dual 4K & Blindspot Radar</div>
              <div className="text-[10px] text-zinc-400">Realtime Cockpit Safety</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
