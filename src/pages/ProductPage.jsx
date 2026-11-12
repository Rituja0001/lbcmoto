import { useState } from 'react'
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
  CheckCircle2,
  Share2,
  Heart,
  ChevronRight,
  Compass,
  ArrowRight,
  ShoppingCart,
  Zap,
  MapPin,
  Maximize2,
  Clock,
  Sparkles,
  Award,
  Layers,
  MessageCircle,
  Box,
  Sliders,
  Check
} from 'lucide-react'
import { PRODUCTS_DATA, RELATED_PRODUCTS } from '../data/productsData'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'

export default function ProductPage({
  productId = 'garmin-zumo-xt2',
  onNavigateHome,
  onNavigateCategories,
  onNavigateCheckout,
  onSelectProduct
}) {
  const { addToCart } = useCart()
  const product = PRODUCTS_DATA[productId] || PRODUCTS_DATA['garmin-zumo-xt2']

  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [selectedBundleId, setSelectedBundleId] = useState(product.bundles?.[0]?.id || 'standard')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('features')
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  // Calculate pricing based on bundle
  const selectedBundle = product.bundles?.find((b) => b.id === selectedBundleId)
  const bundleOffset = selectedBundle?.priceOffset || 0
  const finalPrice = (product.price + bundleOffset) * quantity
  const finalOriginalPrice = (product.originalPrice + bundleOffset) * quantity
  const totalSavings = finalOriginalPrice - finalPrice

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        price: product.price + bundleOffset,
        originalPrice: product.originalPrice + bundleOffset
      },
      quantity,
      selectedBundle?.name || 'Standard'
    )
    setIsAddedToCart(true)
    setToastMessage(`Added ${quantity}x ${product.name} to Cart!`)
    setTimeout(() => {
      setIsAddedToCart(false)
    }, 2800)
  }

  const handleBuyNow = () => {
    addToCart(
      {
        ...product,
        price: product.price + bundleOffset,
        originalPrice: product.originalPrice + bundleOffset
      },
      quantity,
      selectedBundle?.name || 'Standard'
    )
    if (onNavigateCheckout) {
      onNavigateCheckout()
    } else {
      window.location.hash = '#checkout'
    }
  }

  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#141822] border-2 border-[#FECD08] text-white px-5 py-3.5 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-3 animate-fade-in backdrop-blur-md">
          <CheckCircle2 className="w-5 h-5 text-[#FECD08]" />
          <span className="font-rajdhani font-bold text-sm tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb Navigation Bar */}
      <section className="w-full border-b border-white/10 bg-[#0A0C10]/90 backdrop-blur-md py-3 sm:py-3.5">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 flex items-center justify-between">
          <nav className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-rajdhani font-bold tracking-wider uppercase text-zinc-400 overflow-x-auto no-scrollbar">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#FECD08] transition-colors cursor-pointer flex items-center gap-1 shrink-0"
            >
              <Compass className="w-3.5 h-3.5 text-[#FECD08]" />
              <span>HOME</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
            <button
              onClick={onNavigateCategories}
              className="hover:text-[#FECD08] transition-colors cursor-pointer shrink-0"
            >
              CATEGORIES
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
            <span className="text-zinc-400 shrink-0">{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
            <span className="text-[#FECD08] truncate max-w-[180px] sm:max-w-xs">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-6 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: Interactive Gallery & Visuals (5 or 6 cols)
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-4 sticky lg:top-24">
            
            {/* Primary Image Viewport */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] rounded-2xl overflow-hidden bg-[#10141D] border border-white/10 shadow-2xl flex items-center justify-center group">
              <img
                src={product.images[activeImageIdx]?.url || product.images[0]?.url}
                alt={product.images[activeImageIdx]?.alt || product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Top Bestseller Badge */}
              {product.badge && (
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className={`px-3 py-1 rounded-md text-xs font-rajdhani uppercase tracking-wider shadow-lg ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Watermark / Brand Logo Tag */}
              <div className="absolute top-3.5 right-3.5 z-10">
                <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                  {product.brand}
                </span>
              </div>

              {/* Subtle Bottom Ambient Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-sora text-zinc-300 pointer-events-none">
                <span className="bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                  Image {activeImageIdx + 1} of {product.images.length}
                </span>
                <span className="bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1 text-[#FECD08]">
                  <Maximize2 className="w-3 h-3" /> High-Res Cockpit View
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-black/50 border transition-all cursor-pointer ${
                    activeImageIdx === idx
                      ? 'border-[#FECD08] shadow-lg shadow-[#FECD08]/20 ring-2 ring-[#FECD08]/40 scale-[1.02]'
                      : 'border-white/10 hover:border-white/40 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  {activeImageIdx === idx && (
                    <div className="absolute inset-0 border-2 border-[#FECD08] rounded-xl pointer-events-none" />
                  )}
                </button>
              ))}
            </div>

            {/* Key Tech Chips below Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-[#FECD08] font-rajdhani font-black text-sm">6.0" HD</div>
                <div className="text-[10px] text-zinc-400 font-sora">Sunlight Screen</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-[#FECD08] font-rajdhani font-black text-sm">IPX7</div>
                <div className="text-[10px] text-zinc-400 font-sora">100% Waterproof</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-[#FECD08] font-rajdhani font-black text-sm">ROUTING™</div>
                <div className="text-[10px] text-zinc-400 font-sora">Curvy Roads</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-[#FECD08] font-rajdhani font-black text-sm">MIL-STD</div>
                <div className="text-[10px] text-zinc-400 font-sora">Vibration Proof</div>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Product Meta, Pricing, Bundles & CTAs (6 cols)
             ========================================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col gap-6">
            
            {/* Brand, Tagline & Title */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                  {product.brand} OFFICIAL STORE
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs font-rajdhani font-bold text-zinc-400 tracking-wider uppercase">
                  SKU: {product.sku}
                </span>
              </div>

              <h1 className="font-rajdhani font-black text-2xl sm:text-4xl lg:text-[42px] uppercase tracking-tight text-white leading-tight">
                {product.name}
              </h1>

              <p className="font-sora text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                {product.tagline}
              </p>

              {/* Rating, Reviews & Authenticity Badge */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-[#FECD08]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FECD08] text-[#FECD08]" />
                    ))}
                  </div>
                  <span className="font-rajdhani font-black text-sm text-white">5.0</span>
                  <a href="#reviews" className="font-sora text-xs text-zinc-400 hover:text-[#FECD08] underline ml-1">
                    ({product.reviewsCount} verified reviews)
                  </a>
                </div>

                <span className="text-zinc-700">|</span>

                <div className="flex items-center gap-1.5 text-xs font-rajdhani font-bold text-[#FECD08] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Genuine Authorized Warranty</span>
                </div>
              </div>
            </div>

            {/* Price Box with Big Figures & Savings Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#121620] to-[#0D1017] border border-white/10 shadow-xl">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-rajdhani font-black text-3xl sm:text-5xl text-white tracking-tight">
                  ₹ {finalPrice.toLocaleString('en-IN')}
                </span>
                <span className="font-rajdhani font-bold text-lg sm:text-2xl text-zinc-500 line-through">
                  ₹ {finalOriginalPrice.toLocaleString('en-IN')}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FECD08]/15 border border-[#FECD08]/30 text-[#FECD08] text-xs font-rajdhani font-black tracking-wider uppercase">
                  SAVE ₹ {totalSavings.toLocaleString('en-IN')} ({product.discountPercentage}% OFF)
                </span>
              </div>

              <div className="flex items-center gap-2 mt-2 text-xs font-sora text-zinc-400">
                <span>Inclusive of all GST & taxes</span>
                <span>•</span>
                <span className="text-[#FECD08] font-semibold">Free Insured Express Shipping</span>
              </div>
            </div>

            {/* Choose Bundle Package Selector */}
            {product.bundles && product.bundles.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-rajdhani font-black tracking-wider uppercase text-zinc-300 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#FECD08]" />
                    <span>SELECT MOUNT & ACCESSORY BUNDLE:</span>
                  </label>
                  <span className="text-[11px] font-sora text-zinc-400">Choose configuration</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.bundles.map((bundle) => {
                    const isSelected = selectedBundleId === bundle.id
                    return (
                      <button
                        key={bundle.id}
                        type="button"
                        onClick={() => setSelectedBundleId(bundle.id)}
                        className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#FECD08]/10 border-[#FECD08] shadow-lg shadow-[#FECD08]/15 ring-1 ring-[#FECD08]'
                            : 'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className={`font-rajdhani font-bold text-sm uppercase ${isSelected ? 'text-[#FECD08]' : 'text-white'}`}>
                            {bundle.name}
                          </span>
                          <span className={`text-xs font-rajdhani font-black ${isSelected ? 'text-[#FECD08]' : 'text-zinc-400'}`}>
                            {bundle.priceOffset === 0 ? 'INCLUDED' : `+ ₹ ${bundle.priceOffset.toLocaleString('en-IN')}`}
                          </span>
                        </div>
                        <p className="text-[11px] font-sora text-zinc-400 mt-1 leading-snug">
                          {bundle.desc}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action CTAs */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <span className="text-xs font-rajdhani font-black tracking-wider uppercase text-zinc-400">
                  QUANTITY:
                </span>
                <div className="flex items-center border border-white/20 rounded-xl bg-black/50 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 font-black text-lg transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-rajdhani font-black text-base text-white">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 font-black text-lg transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs font-sora text-zinc-400 hidden sm:inline">
                  (Stock available: 18 units in warehouse)
                </span>
              </div>

              {/* High-Impact CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 px-6 rounded-xl font-rajdhani font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg ${
                    isAddedToCart
                      ? 'bg-white text-slate-950 font-black scale-102 shadow-white/20'
                      : 'bg-[#FECD08] hover:bg-white text-slate-950 shadow-[#FECD08]/20 hover:shadow-white/20'
                  }`}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="w-5 h-5 stroke-[3]" />
                      <span>ADDED TO CART</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span>ADD TO CART</span>
                    </>
                  )}
                </button>

                {/* 2. Buy It Now Button */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-3.5 px-6 rounded-xl bg-transparent hover:bg-white/10 text-white border-2 border-[#FECD08] font-rajdhani font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#FECD08]/20"
                >
                  <Zap className="w-5 h-5 text-[#FECD08]" />
                  <span>BUY IT NOW</span>
                </button>
              </div>

              {/* Direct WhatsApp Specialist Contact */}
              <a
                href="https://wa.me/918888888888?text=Hi%20LBC%20Moto,%20I%20have%20questions%20about%20Garmin%20zumo%20XT2%20Motorcycle%20GPS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#FECD08]/10 hover:bg-[#FECD08]/20 border border-[#FECD08]/30 text-[#FECD08] font-rajdhani font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk with an LBC Moto Specialist on WhatsApp</span>
              </a>
            </div>

            {/* Trust Assurance Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <Truck className="w-5 h-5 text-[#FECD08] shrink-0" />
                <div>
                  <div className="font-rajdhani font-bold text-xs text-white uppercase">Free Pan-India Delivery</div>
                  <div className="text-[10px] text-zinc-400">Insured express via Bluedart</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#FECD08] shrink-0" />
                <div>
                  <div className="font-rajdhani font-bold text-xs text-white uppercase">1-Year Brand Warranty</div>
                  <div className="text-[10px] text-zinc-400">Garmin India Official Service</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <RotateCcw className="w-5 h-5 text-[#FECD08] shrink-0" />
                <div>
                  <div className="font-rajdhani font-bold text-xs text-white uppercase">7-Day Easy Returns</div>
                  <div className="text-[10px] text-zinc-400">Zero-hassle replacement</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <CreditCard className="w-5 h-5 text-[#FECD08] shrink-0" />
                <div>
                  <div className="font-rajdhani font-bold text-xs text-white uppercase">Flexible Payments</div>
                  <div className="text-[10px] text-zinc-400">UPI, Cards, No-Cost EMI & COD</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            DEEP-DIVE TABS: Features | Tech Specs | In The Box | Rider Reviews
           ========================================================================= */}
        <section id="reviews" className="mt-14 sm:mt-20 border-t border-white/10 pt-8 sm:pt-12">
          
          {/* Tab Selector Header */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-white/10 pb-3">
            {[
              { id: 'features', label: 'Key Features', icon: Sparkles },
              { id: 'specs', label: 'Tech Specifications', icon: Sliders },
              { id: 'inTheBox', label: "What's In The Box", icon: Box },
              { id: 'reviews', label: `Rider Reviews (${product.reviewsCount})`, icon: Star }
            ].map((tab) => {
              const Icon = tab.icon
              const isSelected = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl font-rajdhani font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FECD08] text-[#212121] shadow-lg shadow-[#FECD08]/20 font-black'
                      : 'bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Body Content */}
          <div className="mt-8">
            
            {/* Tab 1: Features */}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {product.features?.map((feat, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#10141D] border border-white/10 hover:border-[#FECD08]/50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 flex items-center justify-center text-[#FECD08] font-rajdhani font-black text-lg mb-3">
                      0{i + 1}
                    </div>
                    <h3 className="font-rajdhani font-black text-lg uppercase text-white tracking-wide">
                      {feat.title}
                    </h3>
                    <p className="font-sora text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Specs */}
            {activeTab === 'specs' && (
              <div className="max-w-4xl rounded-2xl bg-[#10141D] border border-white/10 overflow-hidden shadow-xl">
                <div className="p-4 sm:p-6 border-b border-white/10 bg-white/5 flex items-center justify-between">
                  <h3 className="font-rajdhani font-black text-lg uppercase text-white tracking-wide">
                    Full Technical Specifications
                  </h3>
                  <span className="text-xs font-rajdhani font-bold text-[#FECD08] uppercase">
                    Official Garmin Data
                  </span>
                </div>
                <div className="divide-y divide-white/5">
                  {product.specs?.map((spec, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 text-xs sm:text-sm font-sora hover:bg-white/5 transition-colors"
                    >
                      <span className="text-zinc-400 font-semibold">{spec.label}</span>
                      <span className="sm:col-span-2 text-white font-medium mt-1 sm:mt-0">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: In The Box */}
            {activeTab === 'inTheBox' && (
              <div className="max-w-3xl rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8">
                <h3 className="font-rajdhani font-black text-xl uppercase text-white tracking-wide mb-4">
                  Package Contents Included in Shipment
                </h3>
                <ul className="space-y-3 font-sora text-xs sm:text-sm text-zinc-300">
                  {product.inTheBox?.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FECD08]/20 text-[#FECD08] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 4: Reviews */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#10141D] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <div className="font-rajdhani font-black text-4xl text-white">5.0 / 5.0</div>
                    <div className="flex items-center text-[#FECD08] my-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FECD08] text-[#FECD08]" />
                      ))}
                    </div>
                    <p className="text-xs font-sora text-zinc-400">
                      Based on 124 verified rider reviews across India
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => alert('Review submission modal will open here for verified buyers!')}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-[#FECD08] text-white hover:text-[#212121] font-rajdhani font-black text-xs uppercase tracking-wider border border-white/20 transition-all cursor-pointer self-start sm:self-auto"
                  >
                    WRITE A REVIEW
                  </button>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {product.reviews?.map((rev, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-[#10141D] border border-white/10 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                          <span className="font-rajdhani font-bold text-zinc-400 uppercase">{rev.bike}</span>
                          <span>{rev.date}</span>
                        </div>
                        <div className="flex items-center text-[#FECD08] mb-2">
                          {[...Array(rev.rating)].map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-[#FECD08] text-[#FECD08]" />
                          ))}
                        </div>
                        <h4 className="font-rajdhani font-black text-sm uppercase text-white mb-2">
                          "{rev.title}"
                        </h4>
                        <p className="font-sora text-xs text-zinc-300 leading-relaxed">
                          {rev.comment}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-sora text-zinc-400">
                        <span className="font-semibold text-white">{rev.author}</span>
                        <span className="text-[#FECD08] flex items-center gap-1 font-rajdhani font-bold uppercase">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified Rider
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </section>

        {/* =========================================================================
            FREQUENTLY BOUGHT TOGETHER / RELATED GEAR
           ========================================================================= */}
        <section className="mt-16 sm:mt-24 border-t border-white/10 pt-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                COMPLETE YOUR COCKPIT
              </span>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mt-1">
                Frequently Bought Together
              </h2>
            </div>
            <button
              onClick={onNavigateCategories}
              className="text-xs font-rajdhani font-bold text-[#FECD08] hover:underline uppercase flex items-center gap-1 cursor-pointer"
            >
              <span>View All Gear</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {RELATED_PRODUCTS.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (onSelectProduct) onSelectProduct(item.id)
                }}
                className="group p-4 rounded-2xl bg-[#10141D] border border-white/10 hover:border-[#FECD08] transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 mb-3 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#FECD08] text-[#212121] text-[10px] font-rajdhani font-black uppercase">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-rajdhani font-bold text-sm text-white group-hover:text-[#FECD08] transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-white/5">
                    <span className="font-rajdhani font-black text-lg text-white">
                      ₹ {item.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs font-rajdhani font-bold text-[#FECD08] uppercase flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
