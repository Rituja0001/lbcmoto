import { useState, useMemo } from 'react'
import {
  ChevronRight,
  Compass,
  Heart,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Check,
  Star,
  ArrowRight,
  ShoppingCart,
  X,
  Filter,
  Eye
} from 'lucide-react'
import { COLLECTION_PRODUCTS, COLLECTION_FILTERS } from '../data/collectionData'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'
import heroBg from '../assets/images/hero-banner.webp'

export default function CollectionPage({
  onNavigateHome,
  onNavigateCategories,
  onSelectProduct
}) {
  const [sortBy, setSortBy] = useState('featured')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedModel, setSelectedModel] = useState('All Models')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [wishlist, setWishlist] = useState({})
  
  // Accordion toggle states
  const [sortOpen, setSortOpen] = useState(true)
  const [typeOpen, setTypeOpen] = useState(true)
  const [modelOpen, setModelOpen] = useState(true)

  // Track chosen variant per product
  const [selectedVariants, setSelectedVariants] = useState(() => {
    const initial = {}
    COLLECTION_PRODUCTS.forEach((p) => {
      if (p.variants && p.variants.length > 0) {
        initial[p.id] = p.variants[0]
      }
    })
    return initial
  })

  const [addedItems, setAddedItems] = useState({})

  const toggleWishlist = (id, e) => {
    e.stopPropagation()
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const { addToCart } = useCart()

  const handleAddToCart = (product, e) => {
    e.stopPropagation()
    const variant = selectedVariants[product.id] || product.variants?.[0] || 'Standard'
    addToCart(product, 1, variant)
    setAddedItems((prev) => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }))
    }, 2200)
  }

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = COLLECTION_PRODUCTS.filter((item) => {
      const matchType = selectedType === 'All Types' || item.type === selectedType
      const matchModel = selectedModel === 'All Models' || item.model === selectedModel
      const matchStock = !inStockOnly || item.inStock
      return matchType && matchModel && matchStock
    })

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [selectedType, selectedModel, inStockOnly, sortBy])

  const hasActiveFilters =
    selectedType !== 'All Types' ||
    selectedModel !== 'All Models' ||
    inStockOnly

  const resetFilters = () => {
    setSelectedType('All Types')
    setSelectedModel('All Models')
    setInStockOnly(false)
    setSortBy('featured')
  }

  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* =========================================================================
          HERO BANNER FOR COLLECTION (EXACTLY MATCHING CATEGORIES PAGE AESTHETICS)
         ========================================================================= */}
      <section className="relative w-full overflow-hidden border-b border-white/10 py-6 sm:py-8 lg:py-10 bg-black">
        {/* Cinematic Background Mountain Road Overlay (High Visibility) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="Motorcycle Navigation Background"
            className="w-full h-full object-cover object-center opacity-65"
          />
          {/* Balanced cinematic gradients so mountain curves and sunset glow are clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-black/45" />
        </div>

        {/* Ambient Golden Radial Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FECD08]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
          
          {/* Breadcrumbs (Compact Height matching Categories page) */}
          <nav className="flex items-center gap-2 text-xs font-rajdhani font-bold tracking-wider uppercase text-zinc-300 mb-2 sm:mb-3 overflow-x-auto no-scrollbar">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#FECD08] transition-colors cursor-pointer flex items-center gap-1 shrink-0"
            >
              <Compass className="w-3.5 h-3.5 text-[#FECD08]" />
              <span>HOME</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <button
              onClick={onNavigateCategories}
              className="hover:text-[#FECD08] transition-colors cursor-pointer shrink-0"
            >
              COLLECTIONS
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span className="text-[#FECD08] shrink-0">LBC MOTO NAVIGATION & RADAR</span>
          </nav>

          {/* Header Title & Tagline matching Categories Page */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div className="max-w-2xl">
              <h1 className="font-rajdhani font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
                LBC MOTO <br className="hidden sm:inline" />
                <span className="text-[#FECD08]">NAVIGATION & RADAR</span>
              </h1>

              <p className="font-sora text-xs sm:text-sm text-zinc-200 mt-2.5 leading-relaxed drop-shadow">
                Precision CarPlay / Android Auto motorcycle cockpit screens, dual 4K dashcams, TPMS tire telemetry and blind spot radar detection.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MAIN LAYOUT: SIDEBAR FILTERS (LEFT) + PRODUCTS GRID (RIGHT)
         ========================================================================= */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-6 sm:py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* -----------------------------------------------------------------------
              LEFT COLUMN: FILTERS & SORT BY ACCORDIONS (3 Cols on Desktop)
              Fixed space between Box 1 and Box 2 with mb-6 and space-y-6!
             ----------------------------------------------------------------------- */}
          <aside className="lg:col-span-3 w-full sticky lg:top-28 space-y-6">
            
            {/* Box 1: Sort By Accordion with explicit mb-6 to guarantee separation */}
            <div className="w-full rounded-2xl bg-[#10141D] border border-white/10 p-4 sm:p-5 shadow-xl mb-6">
              <button
                type="button"
                onClick={() => setSortOpen(!sortOpen)}
                className="w-full flex items-center justify-between text-xs sm:text-sm font-rajdhani font-black uppercase tracking-wider text-white cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#FECD08]" />
                  <span>SORT BY : {sortBy.replace('-', ' ')}</span>
                </div>
                {sortOpen ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <span className="text-[#FECD08] font-bold text-lg leading-none">+</span>
                )}
              </button>

              {sortOpen && (
                <div className="mt-3.5 pt-3.5 border-t border-white/10 flex flex-col gap-1.5 font-sora text-xs">
                  {[
                    { id: 'featured', label: 'Featured' },
                    { id: 'price-low', label: 'Price: Low to High' },
                    { id: 'price-high', label: 'Price: High to Low' },
                    { id: 'rating', label: 'Customer Rating' },
                    { id: 'name', label: 'Alphabetical A-Z' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSortBy(opt.id)}
                      className={`text-left px-3 py-2 rounded-xl transition-colors cursor-pointer flex items-center justify-between ${
                        sortBy === opt.id
                          ? 'bg-[#FECD08] text-slate-950 font-bold shadow-md'
                          : 'text-zinc-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {sortBy === opt.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Box 2: Filters Accordion (Cleanly separated from Box 1) */}
            <div className="w-full rounded-2xl bg-[#10141D] border border-white/10 p-4 sm:p-5 shadow-xl flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs sm:text-sm font-rajdhani font-black uppercase tracking-wider text-white">
                  FILTERS
                </span>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="text-[11px] font-sora text-[#FECD08] hover:underline cursor-pointer"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Sub-Filter: Type */}
              <div>
                <button
                  type="button"
                  onClick={() => setTypeOpen(!typeOpen)}
                  className="w-full flex items-center justify-between text-xs font-rajdhani font-bold uppercase tracking-wider text-zinc-300 hover:text-white cursor-pointer"
                >
                  <span>TYPE</span>
                  <span className="text-[#FECD08] text-lg leading-none">{typeOpen ? '−' : '+'}</span>
                </button>

                {typeOpen && (
                  <div className="mt-3 space-y-1.5 font-sora text-xs">
                    {COLLECTION_FILTERS.types.map((type) => {
                      const isSel = selectedType === type
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                            isSel
                              ? 'text-[#FECD08] font-semibold bg-white/5'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          <span>{type}</span>
                          {isSel && <div className="w-2 h-2 rounded-full bg-[#FECD08]" />}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Sub-Filter: Model */}
              <div className="pt-3 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setModelOpen(!modelOpen)}
                  className="w-full flex items-center justify-between text-xs font-rajdhani font-bold uppercase tracking-wider text-zinc-300 hover:text-white cursor-pointer"
                >
                  <span>MODEL</span>
                  <span className="text-[#FECD08] text-lg leading-none">{modelOpen ? '−' : '+'}</span>
                </button>

                {modelOpen && (
                  <div className="mt-3 space-y-1.5 font-sora text-xs">
                    {COLLECTION_FILTERS.models.map((mod) => {
                      const isSel = selectedModel === mod
                      return (
                        <button
                          key={mod}
                          type="button"
                          onClick={() => setSelectedModel(mod)}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                            isSel
                              ? 'text-[#FECD08] font-semibold bg-white/5'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          <span>{mod}</span>
                          {isSel && <div className="w-2 h-2 rounded-full bg-[#FECD08]" />}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Sub-Filter: In Stock Only Checkbox */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between cursor-pointer">
                <span className="text-xs font-rajdhani font-bold uppercase tracking-wider text-zinc-300">
                  IN STOCK ONLY
                </span>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 accent-[#FECD08] cursor-pointer rounded"
                />
              </div>

            </div>

          </aside>

          {/* -----------------------------------------------------------------------
              RIGHT COLUMN: PRODUCTS GRID (9 Cols on Desktop, 3 items per row)
              Fully responsive across all mobile screens (2 columns on mobile, 3 on desktop)
             ----------------------------------------------------------------------- */}
          <section className="lg:col-span-9 flex flex-col gap-6 w-full">
            
            {/* Top Stats & Active Filter Tags Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sora text-zinc-400 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span>Showing <strong className="text-white">{filteredProducts.length}</strong> of <strong>{COLLECTION_PRODUCTS.length}</strong> items</span>
                {hasActiveFilters && (
                  <span className="text-[#FECD08] font-semibold">• Filter Active</span>
                )}
              </div>

              {/* Active Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {selectedType !== 'All Types' && (
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] flex items-center gap-1.5">
                    {selectedType}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-[#FECD08]"
                      onClick={() => setSelectedType('All Types')}
                    />
                  </span>
                )}
                {selectedModel !== 'All Models' && (
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] flex items-center gap-1.5">
                    {selectedModel}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-[#FECD08]"
                      onClick={() => setSelectedModel('All Models')}
                    />
                  </span>
                )}
                {inStockOnly && (
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white text-[11px] flex items-center gap-1.5">
                    In Stock Only
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-[#FECD08]"
                      onClick={() => setInStockOnly(false)}
                    />
                  </span>
                )}
              </div>
            </div>

            {/* Main Product Grid: 2-Cols on Mobile, 3-Cols on Desktop */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center rounded-2xl bg-white/5 border border-white/10 p-8">
                <p className="font-rajdhani font-black text-2xl uppercase text-white">No products found</p>
                <p className="font-sora text-xs sm:text-sm text-zinc-400 mt-2">Try clearing your filters or search query to see all navigation units.</p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[#FECD08] text-slate-950 font-rajdhani font-black text-xs uppercase tracking-wider cursor-pointer"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
                {filteredProducts.map((product) => {
                  const isWishlisted = !!wishlist[product.id]
                  const isAdded = !!addedItems[product.id]
                  const currentVariant = selectedVariants[product.id] || product.variants?.[0]

                  return (
                    <div
                      key={product.id}
                      onClick={() => {
                        if (onSelectProduct) onSelectProduct(product.id)
                      }}
                      className="group relative rounded-2xl overflow-hidden bg-[#10141D] border border-white/10 hover:border-[#FECD08]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FECD08]/15 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
                    >
                      
                      {/* Upper Thumbnail Box */}
                      <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-black/60 flex items-center justify-center p-3 sm:p-5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Top-Right Wishlist Heart Button */}
                        <button
                          type="button"
                          onClick={(e) => toggleWishlist(product.id, e)}
                          aria-label="Add to Wishlist"
                          className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-black/90 transition-all cursor-pointer"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                              isWishlisted
                                ? 'fill-[#FECD08] text-[#FECD08]'
                                : 'text-zinc-300 hover:text-white'
                            }`}
                          />
                        </button>

                        {/* Diagonal NEW Badge (if present) */}
                        {product.badge === 'NEW' && (
                          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                            <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md bg-red-600 text-white font-rajdhani font-black text-[9px] sm:text-[11px] tracking-wider uppercase shadow-md">
                              NEW
                            </span>
                          </div>
                        )}

                        {/* OUT OF STOCK Badge (if out of stock) */}
                        {!product.inStock && (
                          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                            <span className="px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-rose-400 font-rajdhani font-bold text-[9px] sm:text-[10px] tracking-wider uppercase shadow-md">
                              OUT OF STOCK
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Lower Content Box */}
                      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                        
                        <div>
                          {/* Variant Selector Dropdown (matches 'BM6 Display Only ⌄' from screenshot) */}
                          {product.variants && product.variants.length > 0 && (
                            <div className="mb-2 sm:mb-3">
                              <select
                                value={currentVariant}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => {
                                  e.stopPropagation()
                                  setSelectedVariants((prev) => ({
                                    ...prev,
                                    [product.id]: e.target.value
                                  }))
                                }}
                                className="w-full text-[11px] sm:text-xs font-sora bg-black/60 border border-white/15 rounded-lg sm:rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 text-zinc-300 focus:text-white focus:border-[#FECD08] outline-none cursor-pointer truncate"
                              >
                                {product.variants.map((v, vIdx) => (
                                  <option key={vIdx} value={v} className="bg-[#10141D] text-white">
                                    {v}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {/* Product Title */}
                          <h3 className="font-rajdhani font-black text-xs sm:text-base text-white group-hover:text-[#FECD08] transition-colors line-clamp-2 leading-snug">
                            {product.name}
                          </h3>

                          {/* Price & Out of stock status */}
                          <div className="mt-2 sm:mt-3">
                            <div className="font-rajdhani font-black text-base sm:text-2xl text-white tracking-tight leading-none">
                              ₹ {product.price.toLocaleString('en-IN')}
                            </div>

                            {!product.inStock && (
                              <div className="text-[10px] sm:text-[11px] font-sora font-semibold text-rose-500 mt-1">
                                Out of stock
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Action Bar */}
                        <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/5 flex items-center justify-between gap-1.5 sm:gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              if (product.inStock) {
                                handleAddToCart(product, e)
                              } else {
                                e.stopPropagation()
                                alert(`We will notify you once ${product.name} is back in stock!`)
                              }
                            }}
                            className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg sm:rounded-xl font-rajdhani font-black text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 transition-all duration-200 cursor-pointer shadow-md ${
                              !product.inStock
                                ? 'bg-white/5 text-zinc-500 border border-white/10 hover:text-white'
                                : isAdded
                                ? 'bg-white text-slate-950 font-black shadow-white/20'
                                : 'bg-[#FECD08] hover:bg-white text-slate-950 shadow-[#FECD08]/15'
                            }`}
                          >
                            {!product.inStock ? (
                              <span>NOTIFY</span>
                            ) : isAdded ? (
                              <>
                                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                                <span>ADDED</span>
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                <span>ADD</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              if (onSelectProduct) onSelectProduct(product.id)
                            }}
                            aria-label="View product details"
                            className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0"
                          >
                            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                        </div>

                      </div>

                    </div>
                  )
                })}
              </div>
            )}

          </section>

        </div>

      </main>

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
