import { useState, useMemo } from 'react'
import {
  ArrowRight,
  Compass,
  ChevronRight
} from 'lucide-react'
import { CATEGORIES_DATA, CATEGORY_GROUPS } from '../data/categoriesData'
import Footer from '../components/Footer'
import heroBg from '../assets/images/hero-banner.webp'

export default function CategoriesPage({ onNavigateHome, onNavigateCollection, onSelectProduct }) {
  const [selectedGroup, setSelectedGroup] = useState('All Categories')

  // Filtered categories based on group
  const filteredCategories = useMemo(() => {
    return CATEGORIES_DATA.filter((cat) => {
      return selectedGroup === 'All Categories' || cat.group === selectedGroup
    })
  }, [selectedGroup])

  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* =========================================================================
          HERO BANNER FOR CATEGORIES (COMPACT HEIGHT + VISIBLE SCENIC BG)
         ========================================================================= */}
      <section className="relative w-full overflow-hidden border-b border-white/10 py-6 sm:py-8 lg:py-10 bg-black">
        {/* Cinematic Background Mountain Road Overlay (High Visibility) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="Motorcycle Adventure Background"
            className="w-full h-full object-cover object-center opacity-65"
          />
          {/* Balanced cinematic gradients so mountain curves and sunset glow are clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-black/45" />
        </div>

        {/* Ambient Golden Radial Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FECD08]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
          
          {/* Breadcrumbs (Compact Height) */}
          <nav className="flex items-center gap-2 text-xs font-rajdhani font-bold tracking-wider uppercase text-zinc-300 mb-2 sm:mb-3">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#FECD08] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5 text-[#FECD08]" />
              <span>HOME</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-[#FECD08]">ALL CATEGORIES</span>
          </nav>

          {/* Header Title & Tagline */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div className="max-w-2xl">
              <h1 className="font-rajdhani font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
                ENGINEERED FOR <br className="hidden sm:inline" />
                <span className="text-[#FECD08]">THE UNCHARTED</span>
              </h1>

              <p className="font-sora text-xs sm:text-sm text-zinc-200 mt-2.5 leading-relaxed drop-shadow">
                From motorcycle smart navigation screens and dual 4K cameras to voice mesh intercoms, high-lumens auxiliary fog lighting, and touring gear.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          CATEGORY FILTER TABS BAR
         ========================================================================= */}
      <section className="relative z-20 w-full border-b border-white/10 bg-[#0A0C10]/95 backdrop-blur-md sticky top-[60px] sm:top-[70px] transition-all">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-xs font-rajdhani font-bold text-zinc-500 uppercase tracking-wider hidden sm:inline mr-2 shrink-0">
              FILTER:
            </span>
            {CATEGORY_GROUPS.map((group) => {
              const isSelected = selectedGroup === group
              const count =
                group === 'All Categories'
                  ? CATEGORIES_DATA.length
                  : CATEGORIES_DATA.filter((c) => c.group === group).length

              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl font-rajdhani font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#FECD08] text-[#212121] border-[#FECD08] shadow-lg shadow-[#FECD08]/20 font-black scale-102'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border-white/10'
                  }`}
                >
                  <span>{group}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                      isSelected
                        ? 'bg-black text-[#FECD08] font-black'
                        : 'bg-white/10 text-zinc-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          15 CATEGORIES MAIN GRID: 4-COLUMN DESKTOP GRID (grid-cols-4)
         ========================================================================= */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-6 sm:py-10 lg:py-12">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs font-sora text-zinc-400">
          <div>
            Showing <strong className="text-white font-semibold">{filteredCategories.length}</strong> of{' '}
            <strong className="text-white font-semibold">{CATEGORIES_DATA.length}</strong> categories
            {selectedGroup !== 'All Categories' && (
              <span> in <span className="text-[#FECD08] font-semibold">{selectedGroup}</span></span>
            )}
          </div>
        </div>

        {/* The Grid: 4-4 Columns on Desktop (lg:grid-cols-4 xl:grid-cols-4), 2-Col on Mobile */}
        {filteredCategories.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-white/5 border border-white/10 p-8">
            <p className="font-rajdhani font-black text-2xl uppercase text-white">No categories found</p>
            <p className="font-sora text-sm text-zinc-400 mt-2">Try clearing your search query or choosing another group filter.</p>
            <button
              onClick={() => {
                setSelectedGroup('All Categories')
              }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#FECD08] text-[#212121] font-rajdhani font-black text-xs uppercase tracking-wider cursor-pointer"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredCategories.map((cat) => (
              <a
                key={cat.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  if (cat.id === 'lbc-moto-navigation-radar' && onNavigateCollection) {
                    onNavigateCollection()
                  } else {
                    onNavigateHome()
                    setTimeout(() => {
                      const el = document.getElementById('featured-products')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }
                }}
                className="group relative rounded-2xl overflow-hidden bg-[#10141D] border border-white/10 hover:border-[#FECD08] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FECD08]/15 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                {/* Upper Thumbnail Area */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-black/60">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle dark vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10141D] via-transparent to-black/40 pointer-events-none" />

                  {/* Top-Left Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md border border-white/15 text-[9px] sm:text-[10px] font-rajdhani font-black tracking-wider text-[#FECD08] uppercase shadow-md">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Top-Right Item Count */}
                  <div className="absolute top-2.5 right-2.5 z-10 hidden sm:block">
                    <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-[9px] sm:text-[10px] font-sora font-semibold text-zinc-300 shadow">
                      {cat.itemCount}
                    </span>
                  </div>
                </div>

                {/* Card Body: Title, Description, and CTA Button */}
                <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Title */}
                    <h2 className="font-rajdhani font-black text-sm sm:text-base lg:text-lg uppercase tracking-wide text-white group-hover:text-[#FECD08] transition-colors leading-tight line-clamp-2">
                      {cat.name}
                    </h2>

                    {/* Short Description */}
                    <p className="font-sora text-[11px] sm:text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed hidden sm:block">
                      {cat.desc}
                    </p>
                  </div>

                  {/* Bottom Action Pill matching signature yellow CTA */}
                  <div className="mt-3 sm:mt-4 w-full py-2 px-3 rounded-xl bg-white/5 group-hover:bg-[#FECD08] text-white group-hover:text-[#212121] font-rajdhani font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </main>

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
