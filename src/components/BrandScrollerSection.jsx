import { useState } from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'

// Exactly the 10 brands specified by client:
// 1. LBC MOTO, 2. CARPURIDE, 3. AOOCCI, 4. ASMAX, 5. KEYWIG, 
// 6. XPLORER PRO, 7. POWER X3, 8. HyperKool, 9. LDNIO, 10. TUYU
const BRANDS = [
  {
    id: 'lbc-moto',
    name: 'LBC MOTO',
    logo: (
      <div className="flex items-center gap-2 text-black">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-black shrink-0" viewBox="0 0 24 24">
          <path d="M12 2L3 17h5l4-7 4 7h5L12 2zm0 8.5L9.5 17h5L12 10.5z" />
        </svg>
        <span className="font-rajdhani font-black text-lg sm:text-xl tracking-wider text-black uppercase">
          LBC MOTO
        </span>
      </div>
    )
  },
  {
    id: 'carpuride',
    name: 'CARPURIDE',
    logo: (
      <div className="flex items-center gap-2 text-black">
        <svg className="w-5 h-5 fill-none stroke-black stroke-[2.2] shrink-0" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="14" rx="3" />
          <circle cx="12" cy="11" r="3" />
          <path d="M8 20h8" />
        </svg>
        <span className="font-rajdhani font-black text-base sm:text-lg tracking-[0.14em] text-black uppercase">
          CARPURIDE
        </span>
      </div>
    )
  },
  {
    id: 'aoocci',
    name: 'AOOCCI',
    logo: (
      <div className="flex items-center gap-2 text-black">
        <svg className="w-5 h-5 fill-black shrink-0" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        </svg>
        <span className="font-rajdhani font-black text-lg sm:text-xl tracking-widest text-black uppercase">
          AOOCCI
        </span>
      </div>
    )
  },
  {
    id: 'asmax',
    name: 'ASMAX',
    logo: (
      <div className="flex items-center gap-2 text-black">
        <svg className="w-5 h-5 fill-black shrink-0" viewBox="0 0 24 24">
          <path d="M12 2L1 21h6l5-9 5 9h6L12 2zm0 7l2.5 5h-5L12 9z" />
        </svg>
        <span className="font-rajdhani font-black text-lg sm:text-xl tracking-wider text-black uppercase">
          ASMAX
        </span>
      </div>
    )
  },
  {
    id: 'keywig',
    name: 'KEYWIG',
    logo: (
      <div className="flex items-center gap-2 text-black">
        <svg className="w-5 h-5 fill-none stroke-black stroke-[2.4] shrink-0" viewBox="0 0 24 24">
          <circle cx="7" cy="12" r="4" />
          <path d="M11 12h10M17 12v3M20 12v2" />
        </svg>
        <span className="font-rajdhani font-black text-base sm:text-lg tracking-widest text-black uppercase">
          KEYWIG
        </span>
      </div>
    )
  },
  {
    id: 'xplorer-pro',
    name: 'XPLORER PRO',
    logo: (
      <div className="flex items-center gap-1.5 sm:gap-2 text-black">
        <svg className="w-5 h-5 fill-black shrink-0" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.8L21 12l-6.6 3.2L12 22l-2.4-6.8L3 12l6.6-3.2L12 2z" />
        </svg>
        <div className="flex items-center gap-1 font-rajdhani font-black tracking-wider text-black">
          <span className="text-base sm:text-lg">XPLORER</span>
          <span className="text-[9px] sm:text-[10px] px-1 py-0.5 rounded bg-black text-white font-bold leading-none">
            PRO
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'power-x3',
    name: 'POWER X3',
    logo: (
      <div className="flex items-center gap-1.5 text-black">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-black shrink-0" viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        <span className="font-rajdhani font-black text-base sm:text-lg tracking-wider text-black uppercase">
          POWER X<span className="text-xs font-black align-super">3</span>
        </span>
      </div>
    )
  },
  {
    id: 'hyperkool',
    name: 'HyperKool',
    logo: (
      <div className="flex items-center gap-1.5 text-black">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-black stroke-[2.4] shrink-0" viewBox="0 0 24 24">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        </svg>
        <span className="font-sora font-extrabold text-sm sm:text-base tracking-tight text-black">
          Hyper<span className="text-zinc-700">Kool</span>
        </span>
      </div>
    )
  },
  {
    id: 'ldnio',
    name: 'LDNIO',
    logo: (
      <div className="flex items-center gap-2 text-black">
        <svg className="w-5 h-5 fill-none stroke-black stroke-[2.4] shrink-0" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="12" rx="4" />
          <path d="M8 12h2M14 12h2" />
        </svg>
        <span className="font-rajdhani font-black text-lg sm:text-xl tracking-[0.2em] text-black uppercase">
          LDNIO
        </span>
      </div>
    )
  },
  {
    id: 'tuyu',
    name: 'TUYU',
    logo: (
      <div className="flex items-center gap-2 text-black">
        <svg className="w-5 h-5 fill-black shrink-0" viewBox="0 0 24 24">
          <path d="M4 4h16v4H4zm2 6h12v4H6zm3 6h6v4H9z" />
        </svg>
        <span className="font-rajdhani font-black text-lg sm:text-xl tracking-[0.22em] text-black uppercase">
          TUYU
        </span>
      </div>
    )
  }
]

export default function BrandScrollerSection() {
  const [selectedBrand, setSelectedBrand] = useState(null)

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand)
    const el = document.getElementById('featured-products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Double the array for seamless infinite marquee loop (50% translation)
  const marqueeBrands = [...BRANDS, ...BRANDS]

  return (
    <section className="w-full bg-[#0C0E12] border-y border-white/10 py-10 sm:py-14 overflow-hidden select-none relative shadow-[inset_0_20px_40px_rgba(0,0,0,0.6),inset_0_-20px_40px_rgba(0,0,0,0.6)]">
      {/* Dynamic Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#FECD08]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#FECD08]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header (Clean & Minimalist) */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FECD08] shadow-[0_0_8px_#FECD08]" />
            <span className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.2em] text-[#FECD08] uppercase">
              OFFICIAL PARTNERS & AUTHORISED BRANDS
            </span>
          </div>
          <h2 className="font-rajdhani font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-tight">
            ENGINEERED WITH THE <span className="text-[#FECD08]">BEST IN MOTO</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-sora text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-[#FECD08]" />
          <span>Tap any brand to view gear</span>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Track with Rich Deep End Shadows */}
      <div className="relative w-full overflow-hidden py-3">
        
        {/* =========================================================================
            DEEP THEATRICAL END SHADOWS (Left & Right Vignette Masks)
           ========================================================================= */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 md:w-64 bg-gradient-to-r from-[#0C0E12] via-[#0C0E12]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 md:w-64 bg-gradient-to-l from-[#0C0E12] via-[#0C0E12]/90 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-3 sm:gap-5 py-2">
          {marqueeBrands.map((brand, idx) => (
            <button
              key={`${brand.id}-${idx}`}
              type="button"
              onClick={() => handleBrandClick(brand)}
              className="group/card relative flex items-center justify-center w-[170px] sm:w-[200px] lg:w-[220px] h-[72px] sm:h-[84px] px-4 sm:px-6 rounded-2xl bg-white/95 hover:bg-white backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.45),0_0_0_1.5px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300 shrink-0 cursor-pointer"
              title={brand.name}
            >
              {/* Crisp Black Brand Logo Wordmark */}
              <div className="transition-transform duration-300 group-hover/card:scale-105">
                {brand.logo}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Brand Notification (when tapped) */}
      {selectedBrand && (
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 mt-4 flex items-center justify-between animate-in fade-in slide-in-from-bottom-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1B202A] border border-[#FECD08]/40 text-xs font-sora text-white">
            <CheckCircle2 className="w-4 h-4 text-[#FECD08] shrink-0" />
            <span>
              Showing curated gear from <strong>{selectedBrand.name}</strong>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setSelectedBrand(null)}
            className="text-xs font-rajdhani font-bold uppercase text-zinc-400 hover:text-white"
          >
            Clear Filter
          </button>
        </div>
      )}
    </section>
  )
}
