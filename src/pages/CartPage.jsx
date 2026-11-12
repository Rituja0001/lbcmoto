import { useState } from 'react'
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Compass,
  ChevronRight,
  Lock,
  Tag,
  Check,
  ShoppingBag,
  Sparkles,
  CreditCard
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'

export default function CartPage({
  onNavigateHome,
  onNavigateCategories,
  onNavigateCheckout,
  onSelectProduct
}) {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartOriginalTotal,
    discountAmount,
    appliedCoupon,
    couponError,
    applyCoupon,
    removeCoupon,
    shippingFee,
    cartTotal,
    totalSavings,
    cartCount
  } = useCart()

  const [couponInput, setCouponInput] = useState('')

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (!couponInput) return
    applyCoupon(couponInput)
  }

  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* =========================================================================
          BREADCRUMB STRIP
         ========================================================================= */}
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
            <span className="text-[#FECD08] shrink-0">SHOPPING CART ({cartCount})</span>
          </nav>

          <button
            onClick={onNavigateCategories}
            className="text-xs font-rajdhani font-bold text-zinc-400 hover:text-[#FECD08] uppercase flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          MAIN CART VIEWPORT
         ========================================================================= */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-6 sm:py-10 lg:py-12">
        
        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                YOUR GEAR SUMMARY
              </span>
            </div>
            <h1 className="font-rajdhani font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
              SHOPPING <span className="text-[#FECD08]">CART</span>
            </h1>
          </div>

          {cartItems.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-xs font-rajdhani font-bold text-zinc-400 hover:text-rose-400 uppercase tracking-wider flex items-center gap-1.5 cursor-pointer self-start sm:self-auto transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>CLEAR ENTIRE CART</span>
            </button>
          )}
        </div>

        {/* Empty Cart State */}
        {cartItems.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-[#10141D] border border-white/10 p-8 sm:p-12 shadow-2xl max-w-xl mx-auto my-8">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] mx-auto mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-rajdhani font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
              YOUR CART IS CURRENTLY EMPTY
            </h2>
            <p className="font-sora text-xs sm:text-sm text-zinc-400 mt-2 max-w-md mx-auto leading-relaxed">
              Looks like you haven't added any adventure gear yet. Explore our navigation systems, communication mesh headsets, and touring equipment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <button
                type="button"
                onClick={onNavigateCategories}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FECD08] text-slate-950 font-rajdhani font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:bg-white transition-colors"
              >
                <span>EXPLORE ALL CATEGORIES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onNavigateHome}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-rajdhani font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
              >
                BACK TO HOME
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* -------------------------------------------------------------------
                LEFT COLUMN: CART ITEMS LIST (8 cols on desktop)
               ------------------------------------------------------------------- */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              
              {/* Free Express Shipping Banner */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] flex items-center gap-3 text-xs font-sora">
                <Truck className="w-5 h-5 shrink-0 text-[#FECD08]" />
                <div>
                  <strong className="font-semibold text-white">Free Insured Express Shipping unlocked!</strong> Your entire order qualifies for zero-cost pan-India dispatch.
                </div>
              </div>

              {/* Items List */}
              <div className="divide-y divide-white/10 rounded-2xl bg-[#10141D] border border-white/10 overflow-hidden shadow-2xl">
                {cartItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${item.variant}-${idx}`}
                    className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    
                    {/* Product Thumbnail & Meta */}
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        onClick={() => {
                          if (onSelectProduct) onSelectProduct(item.id)
                        }}
                        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-black/60 border border-white/10 shrink-0 cursor-pointer group"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          onClick={() => {
                            if (onSelectProduct) onSelectProduct(item.id)
                          }}
                          className="font-rajdhani font-black text-sm sm:text-base text-white hover:text-[#FECD08] transition-colors cursor-pointer line-clamp-2 leading-snug"
                        >
                          {item.name}
                        </h3>

                        {/* Variant Tag */}
                        {item.variant && (
                          <div className="mt-1">
                            <span className="inline-block px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-rajdhani font-bold text-zinc-300 uppercase">
                              {item.variant}
                            </span>
                          </div>
                        )}

                        {/* Mobile Price Display */}
                        <div className="flex items-baseline gap-2 mt-2 sm:hidden">
                          <span className="font-rajdhani font-black text-base text-white">
                            ₹ {item.price.toLocaleString('en-IN')}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="font-rajdhani text-xs text-zinc-500 line-through">
                              ₹ {item.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Price */}
                    <div className="hidden sm:block text-right shrink-0 min-w-[110px]">
                      <div className="font-rajdhani font-black text-lg text-white">
                        ₹ {item.price.toLocaleString('en-IN')}
                      </div>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <div className="font-rajdhani text-xs text-zinc-500 line-through">
                          ₹ {item.originalPrice.toLocaleString('en-IN')}
                        </div>
                      )}
                    </div>

                    {/* Quantity Selector & Item Subtotal */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t border-white/5 sm:border-t-0">
                      
                      {/* Counter */}
                      <div className="flex items-center border border-white/15 rounded-xl bg-black/60 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-9 text-center font-rajdhani font-black text-sm text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total for this line item */}
                      <div className="font-rajdhani font-black text-base sm:text-lg text-white min-w-[90px] text-right">
                        ₹ {(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>

                      {/* Delete button */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id, item.variant)}
                        aria-label="Remove item"
                        className="w-8 h-8 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>

                  </div>
                ))}
              </div>

              {/* Trust Value Badges Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3 rounded-xl bg-[#10141D] border border-white/10 text-center flex flex-col items-center justify-center">
                  <Truck className="w-5 h-5 text-[#FECD08] mb-1.5" />
                  <span className="font-rajdhani font-bold text-xs text-white uppercase">Express Delivery</span>
                  <span className="text-[10px] text-zinc-400 font-sora">Free pan-India shipping</span>
                </div>
                <div className="p-3 rounded-xl bg-[#10141D] border border-white/10 text-center flex flex-col items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#FECD08] mb-1.5" />
                  <span className="font-rajdhani font-bold text-xs text-white uppercase">100% Genuine</span>
                  <span className="text-[10px] text-zinc-400 font-sora">Official brand warranty</span>
                </div>
                <div className="p-3 rounded-xl bg-[#10141D] border border-white/10 text-center flex flex-col items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-[#FECD08] mb-1.5" />
                  <span className="font-rajdhani font-bold text-xs text-white uppercase">7-Day Returns</span>
                  <span className="text-[10px] text-zinc-400 font-sora">Hassle-free replacement</span>
                </div>
                <div className="p-3 rounded-xl bg-[#10141D] border border-white/10 text-center flex flex-col items-center justify-center">
                  <Lock className="w-5 h-5 text-[#FECD08] mb-1.5" />
                  <span className="font-rajdhani font-bold text-xs text-white uppercase">Secure Checkout</span>
                  <span className="text-[10px] text-zinc-400 font-sora">256-bit SSL encrypted</span>
                </div>
              </div>

            </div>

            {/* -------------------------------------------------------------------
                RIGHT COLUMN: ORDER SUMMARY & CHECKOUT CTA (4 cols on desktop)
               ------------------------------------------------------------------- */}
            <div className="lg:col-span-4 flex flex-col gap-5 sticky lg:top-24">
              
              {/* Order Summary Box */}
              <div className="rounded-2xl bg-[#10141D] border border-white/10 p-5 sm:p-6 shadow-2xl flex flex-col gap-5">
                
                <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                  <h2 className="font-rajdhani font-black text-lg uppercase tracking-wider text-white">
                    ORDER SUMMARY
                  </h2>
                  <span className="text-xs font-sora text-zinc-400">
                    {cartCount} {cartCount === 1 ? 'Item' : 'Items'}
                  </span>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 font-sora text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Subtotal</span>
                    <span className="font-rajdhani font-black text-base text-white">
                      ₹ {cartSubtotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {totalSavings > 0 && (
                    <div className="flex items-center justify-between text-[#FECD08]">
                      <span>Total Savings</span>
                      <span className="font-rajdhani font-black text-base">
                        − ₹ {totalSavings.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-[#FECD08]">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" />
                        Coupon ({appliedCoupon.code})
                      </span>
                      <span className="font-rajdhani font-black text-base">
                        − ₹ {discountAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-zinc-300">
                    <span>Shipping</span>
                    <span className="font-rajdhani font-bold text-[#FECD08] uppercase">
                      {shippingFee === 0 ? 'FREE' : `₹ ${shippingFee}`}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="font-rajdhani font-black text-base uppercase text-white">
                        ESTIMATED TOTAL
                      </span>
                      <div className="text-[10px] text-zinc-400 font-sora">
                        Includes GST & all applicable taxes
                      </div>
                    </div>
                    <span className="font-rajdhani font-black text-2xl sm:text-3xl text-[#FECD08] tracking-tight">
                      ₹ {cartTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Coupon Code Input */}
                <div className="pt-3 border-t border-white/10">
                  <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider mb-2 block">
                    Have a promo coupon?
                  </label>

                  {appliedCoupon ? (
                    <div className="p-3 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span><strong>{appliedCoupon.code}</strong> applied ({appliedCoupon.label})</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeCoupon}
                        className="text-xs font-bold text-rose-400 hover:underline cursor-pointer ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. MOTO10 or RIDER500"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora uppercase"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#FECD08] text-white hover:text-slate-950 font-rajdhani font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        APPLY
                      </button>
                    </form>
                  )}

                  {couponError && (
                    <p className="text-[11px] font-sora text-rose-400 mt-1.5">{couponError}</p>
                  )}

                  {/* Suggested Coupon Chips */}
                  {!appliedCoupon && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] text-zinc-500 font-sora">Try:</span>
                      <button
                        type="button"
                        onClick={() => {
                          setCouponInput('MOTO10')
                          applyCoupon('MOTO10')
                        }}
                        className="text-[10px] font-rajdhani font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#FECD08] hover:bg-[#FECD08] hover:text-black transition-colors cursor-pointer"
                      >
                        MOTO10 (10% OFF)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCouponInput('RIDER500')
                          applyCoupon('RIDER500')
                        }}
                        className="text-[10px] font-rajdhani font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#FECD08] hover:bg-[#FECD08] hover:text-black transition-colors cursor-pointer"
                      >
                        RIDER500 (₹500 OFF)
                      </button>
                    </div>
                  )}
                </div>

                {/* Primary Proceed to Checkout CTA */}
                <button
                  type="button"
                  onClick={onNavigateCheckout}
                  className="w-full py-4 px-6 rounded-xl bg-[#FECD08] hover:bg-white text-slate-950 font-rajdhani font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg shadow-[#FECD08]/20 hover:shadow-white/20 scale-[1.01]"
                >
                  <Lock className="w-4 h-4" />
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Accepted Payment Modes Pill Bar */}
                <div className="pt-2 text-center">
                  <div className="text-[10px] font-sora text-zinc-400 uppercase tracking-wider mb-2">
                    WE ACCEPT ALL MAJOR SECURE PAYMENTS
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-rajdhani font-bold text-zinc-300">
                    <span className="px-2 py-1 rounded bg-black/60 border border-white/10">UPI / QR</span>
                    <span className="px-2 py-1 rounded bg-black/60 border border-white/10">GPay & PhonePe</span>
                    <span className="px-2 py-1 rounded bg-black/60 border border-white/10">Cards</span>
                    <span className="px-2 py-1 rounded bg-black/60 border border-white/10">NetBanking</span>
                    <span className="px-2 py-1 rounded bg-black/60 border border-white/10">COD</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
