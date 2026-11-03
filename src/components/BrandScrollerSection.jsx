import { useState } from 'react'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

const BRANDS = [
  {
    id: 'garmin',
    name: 'GARMIN',
    tagline: 'Motorcycle GPS & Navigation',
    category: 'Navigation',
    badge: 'AUTHORISED',
    logoText: 'GARMIN.'
  },
  {
    id: 'cardo',
    name: 'CARDO',
    tagline: 'Packtalk Mesh Intercoms',
    category: 'Communication',
    badge: 'OFFICIAL',
    logoText: 'cardo'
  },
  {
    id: 'bmw-bm6',
    name: 'BMW BM6',
    tagline: 'Smart Navigation Series',
    category: 'Navigation',
    badge: 'PARTNER',
    logoText: 'BMW BM6'
  },
  {
    id: 'asmax',
    name: 'ASMAX',
    tagline: 'Voice Mesh Audio Systems',
    category: 'Communication',
    badge: 'FEATURED',
    logoText: 'ASMAX'
  },
  {
    id: 'quad-lock',
    name: 'QUAD LOCK',
    tagline: 'Phone Mounts & Dampeners',
    category: 'Accessories',
    badge: 'AUTHORISED',
    logoText: 'QUAD LOCK'
  },
  {
    id: 'aoocci',
    name: 'AOOCCI',
    tagline: 'Wireless CarPlay Displays',
    category: 'Navigation',
    badge: 'OFFICIAL',
    logoText: 'AOOCCI'
  },
  {
    id: 'carpuride',
    name: 'CARPURIDE',
    tagline: 'Cockpit Screen Series',
    category: 'Navigation',
    badge: 'PARTNER',
    logoText: 'CARPURIDE'
  },
  {
    id: 'b3-elite',
    name: 'B3 ELITE',
    tagline: 'Radar & Dashcam Systems',
    category: 'Safety & Tech',
    badge: 'NEW TECH',
    logoText: 'B3 ELITE'
  },
  {
    id: 'lone-rider',
    name: 'LONE RIDER',
    tagline: 'Ballistic Touring Luggage',
    category: 'Accessories',
    badge: 'GLOBAL',
    logoText: 'LONE RIDER'
  },
  {
    id: 'lbc-moto',
    name: 'LBC MOTO',
    tagline: 'Signature Aux Lights & Spares',
    category: 'Lighting & Gear',
    badge: 'SIGNATURE',
    logoText: 'LBC MOTO'
  }
]

export default function BrandScrollerSection() {
  const [selectedBrand, setSelectedBrand] = useState(null)

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand)
    // Smooth scroll down to featured products or filter
    const el = document.getElementById('featured-products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Double the array for seamless infinite marquee loop
  const marqueeBrands = [...BRANDS, ...BRANDS]

  return (
    <section className="w-full bg-[#0C0E12] border-y border-white/10 py-10 sm:py-14 overflow-hidden select-none relative">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-[#FECD08]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-[#FECD08]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
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
          <span>Tap any brand to explore gear</span>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Track */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Gradient Mask for Smooth Fade Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0C0E12] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0C0E12] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 py-2">
          {marqueeBrands.map((brand, idx) => (
            <button
              key={`${brand.id}-${idx}`}
              type="button"
              onClick={() => handleBrandClick(brand)}
              className="group/card flex flex-col justify-between w-[180px] sm:w-[220px] p-4 sm:p-5 rounded-2xl bg-[#14171F] hover:bg-[#1B202A] border border-white/10 hover:border-[#FECD08]/70 transition-all duration-300 text-left shrink-0 cursor-pointer shadow-lg hover:shadow-[0_10px_25px_rgba(254,205,8,0.12)] hover:-translate-y-1"
            >
              {/* Top Row: Category & Mini Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-sora text-[10px] sm:text-[11px] text-zinc-400 font-medium truncate">
                  {brand.category}
                </span>
                <span className="font-rajdhani font-bold text-[9px] sm:text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#FECD08] shrink-0">
                  {brand.badge}
                </span>
              </div>

              {/* Middle: Brand Name with Bold Monogram Accent */}
              <div className="my-2">
                <div className="font-rajdhani font-black text-xl sm:text-2xl text-white group-hover/card:text-[#FECD08] transition-colors tracking-wider uppercase">
                  {brand.logoText}
                </div>
                <p className="font-sora text-[11px] sm:text-xs text-zinc-400 mt-1 line-clamp-1">
                  {brand.tagline}
                </p>
              </div>

              {/* Bottom: Explore Link Arrow */}
              <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-rajdhani font-bold text-zinc-400 group-hover/card:text-[#FECD08] transition-colors uppercase tracking-wider">
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Brand Toast (when tapped) */}
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
