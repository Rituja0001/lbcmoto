import { useState, useRef } from 'react'
import {
  Star,
  ShoppingCart,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal
} from 'lucide-react'

const FEATURED_PRODUCTS = [
  {
    id: 'garmin-zumo-xt2',
    name: 'Garmin zūmo XT2 Motorcycle GPS Navigator',
    price: 53999,
    rating: 5,
    reviewsCount: 124,
    badge: 'BESTSELLER',
    badgeBg: 'bg-[#FECD08] text-slate-950 font-black',
    image: '/images/products/garmin-zumo-xt2.webp'
  },
  {
    id: 'cardo-packtalk-edge',
    name: 'Cardo Packtalk Edge Intercom',
    price: 49999,
    rating: 5,
    reviewsCount: 98,
    badge: null,
    image: '/images/products/cardo-packtalk-edge.webp'
  },
  {
    id: 'lbc-aux-light-pro',
    name: 'LBC Aux Light Pro (Driving + Fog Lights)',
    price: 14999,
    rating: 5,
    reviewsCount: 76,
    badge: 'NEW',
    badgeBg: 'bg-red-600 text-white font-black',
    image: '/images/products/lbc-aux-light-pro.webp'
  },
  {
    id: 'quad-lock-mount',
    name: 'Quad Lock Phone Mount with Vibration Dampener',
    price: 8499,
    rating: 5,
    reviewsCount: 112,
    badge: null,
    image: '/images/products/quad-lock-mount.webp'
  },
  {
    id: 'lbc-touring-panniers',
    name: 'LBC Touring Panniers (Aluminium, 45L)',
    price: 39999,
    rating: 5,
    reviewsCount: 64,
    badge: null,
    image: '/images/products/lbc-touring-panniers.webp'
  },
  {
    id: 'bmw-bm6-navigation',
    name: 'BMW – BM6 6" Smart Navigation & Dashcam Series',
    price: 28999,
    rating: 5,
    reviewsCount: 89,
    badge: 'NEW',
    badgeBg: 'bg-red-600 text-white font-black',
    image: '/images/products/bmw-bm6-navigation.webp'
  },
  {
    id: 'lbc-s5-pro-display',
    name: 'LBC S5 PRO 5.5" Cockpit Display with TPMS',
    price: 32999,
    rating: 5,
    reviewsCount: 145,
    badge: 'BESTSELLER',
    badgeBg: 'bg-[#FECD08] text-slate-950 font-black',
    image: '/images/products/lbc-s5-pro-display.webp'
  },
  {
    id: 'asmax-intercom',
    name: 'ASMAX F1 Voice-Controlled Mesh Intercom',
    price: 24999,
    rating: 5,
    reviewsCount: 52,
    badge: null,
    image: '/images/products/asmax-intercom.webp'
  },
  {
    id: 'b3-elite-dashcam',
    name: 'B3 Elite Dual Radar Dashcam & Blind Spot System',
    price: 25999,
    rating: 5,
    reviewsCount: 91,
    badge: 'RADAR TECH',
    badgeBg: 'bg-emerald-500 text-slate-950 font-black',
    image: '/images/products/b3-elite-dashcam.webp'
  },
  {
    id: 'lbc-spares-track-kit',
    name: 'LBC Performance Spares & Track Master Kit',
    price: 12499,
    rating: 5,
    reviewsCount: 43,
    badge: null,
    image: '/images/products/lbc-spares-track-kit.webp'
  }
]

export default function FeaturedProductsSection() {
  const [viewMode, setViewMode] = useState('grid') // 'grid' (2 rows) or 'slider'
  const [addedItems, setAddedItems] = useState({})
  const sliderRef = useRef(null)

  const handleAddToCart = (productId) => {
    setAddedItems((prev) => ({ ...prev, [productId]: true }))
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [productId]: false }))
    }, 2000)
  }

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="featured-products"
      className="w-full bg-[#121212] text-white py-20 px-4 sm:px-6 lg:px-12 border-t border-white/10 select-none relative overflow-hidden"
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FECD08]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FECD08]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header: 05 / FEATURED PRODUCTS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-rajdhani font-black text-sm sm:text-base tracking-[0.25em] text-[#FECD08] uppercase">
                05 / FEATURED PRODUCTS
              </span>
            </div>

            <h2 className="font-rajdhani font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              GEAR UP FOR WHAT&apos;S{' '}
              <span className="text-[#FECD08]">
                NEXT
              </span>
            </h2>

            <p className="font-sora text-base sm:text-lg text-zinc-400 mt-3 font-medium">
              – Handpicked essentials for your next adventure. (10 Premium Picks)
            </p>
          </div>

          {/* Action Area: Mode Switcher & Navigation Controls */}
          <div className="flex items-center flex-wrap gap-3">
            {/* 2-Row Grid vs Slider Switcher */}
            <div className="flex items-center bg-[#1E1E1E] p-1 rounded-xl border border-zinc-800 shadow-inner">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-rajdhani font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#FECD08] text-slate-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="View in 2 Rows Grid (10 Products)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>2 Rows Grid</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-rajdhani font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-[#FECD08] text-slate-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="View in Carousel Slider"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>
            </div>

            {/* Slider Navigation Arrows (Enabled in Slider mode or mobile) */}
            {viewMode === 'slider' && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollSlider('left')}
                  aria-label="Scroll left"
                  className="w-10 h-10 rounded-xl bg-[#1E1E1E] hover:bg-[#FECD08] hover:text-slate-950 text-white border border-zinc-800 flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlider('right')}
                  aria-label="Scroll right"
                  className="w-10 h-10 rounded-xl bg-[#1E1E1E] hover:bg-[#FECD08] hover:text-slate-950 text-white border border-zinc-800 flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* View All Products CTA */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-[#FECD08] bg-[#FECD08] hover:bg-transparent text-slate-950 hover:text-[#FECD08] font-rajdhani font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 shadow-md group cursor-pointer"
            >
              <span>VIEW ALL</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Cards Container: 2-Row Grid OR Interactive Slider */}
        {viewMode === 'grid' ? (
          /* 1. 2-Row Grid of 10 Products (5 columns x 2 rows on desktop) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdded={!!addedItems[product.id]}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          /* 2. Interactive Horizontal Slider Carousel */
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {FEATURED_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="w-[280px] sm:w-[300px] shrink-0 snap-start"
                >
                  <ProductCard
                    product={product}
                    isAdded={!!addedItems[product.id]}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ProductCard({ product, isAdded, onAddToCart }) {
  return (
    <div className="group relative flex flex-col justify-between bg-[#1C1C1C] rounded-2xl p-4 border border-zinc-800/90 shadow-xl hover:border-[#FECD08]/60 hover:shadow-[0_16px_36px_rgba(254,205,8,0.12)] hover:-translate-y-1.5 transition-all duration-300 h-full">
      {/* Product Image Box */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/60 mb-4 border border-zinc-800/80">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
        />

        {/* Top Product Badge */}
        {product.badge && (
          <span
            className={`absolute top-2.5 left-2.5 font-rajdhani text-xs tracking-wider px-2.5 py-1 rounded shadow-lg uppercase ${product.badgeBg}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-rajdhani font-bold text-base sm:text-lg text-white group-hover:text-[#FECD08] transition-colors line-clamp-2 leading-snug min-h-[3rem]">
            {product.name}
          </h3>

          {/* Star Rating & Review Count */}
          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex items-center text-[#FECD08]">
              {[...Array(product.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#FECD08] text-[#FECD08]"
                />
              ))}
            </div>
            <span className="font-sora text-xs sm:text-sm font-semibold text-zinc-400">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-zinc-800">
          <div className="font-rajdhani font-black text-2xl sm:text-[26px] text-[#FECD08] leading-none">
            ₹ {product.price.toLocaleString('en-IN')}
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product.id)}
            aria-label={`Add ${product.name} to cart`}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
              isAdded
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'bg-[#FECD08] hover:bg-white text-slate-950'
            }`}
            title={isAdded ? 'Added to Cart' : 'Add to Cart'}
          >
            {isAdded ? (
              <Check className="w-5 h-5 stroke-[3]" />
            ) : (
              <ShoppingCart className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
