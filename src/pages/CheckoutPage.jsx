import { useState } from 'react'
import {
  ShieldCheck,
  Truck,
  Lock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  CreditCard,
  QrCode,
  Banknote,
  Sparkles,
  ShoppingBag,
  HelpCircle,
  Clock,
  PhoneCall
} from 'lucide-react'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'

export default function CheckoutPage({
  onNavigateHome,
  onNavigateCart,
  onNavigateCategories
}) {
  const {
    cartItems,
    cartSubtotal,
    discountAmount,
    appliedCoupon,
    shippingFee,
    cartTotal,
    clearCart,
    cartCount
  } = useCart()

  // Form States
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    bikeModel: '',
    deliverySpeed: 'standard', // 'standard' or 'priority'
    paymentMethod: 'upi', // 'upi', 'card', 'emi', 'cod'
    orderNotes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [orderId, setOrderId] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const finalDeliveryFee =
    formData.deliverySpeed === 'priority' ? shippingFee + 199 : shippingFee
  const finalPayableTotal = cartTotal + (formData.deliverySpeed === 'priority' ? 199 : 0)

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment gateway & order confirmation
    setTimeout(() => {
      const generatedId = `LBC-${Math.floor(100000 + Math.random() * 900000)}`
      setOrderId(generatedId)
      setIsSubmitting(false)
      setOrderSuccess(true)
      clearCart()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1200)
  }

  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* =========================================================================
          ORDER SUCCESS MODAL / SCREEN
         ========================================================================= */}
      {orderSuccess ? (
        <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-[#FECD08]/15 border-2 border-[#FECD08] text-[#FECD08] flex items-center justify-center mb-6 shadow-2xl shadow-[#FECD08]/25">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-[#FECD08]/15 border border-[#FECD08]/30 text-[#FECD08] text-xs font-rajdhani font-black tracking-widest uppercase mb-3">
            ORDER CONFIRMED & DISPATCH READY
          </div>

          <h1 className="font-rajdhani font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            THANK YOU FOR RIDING WITH US!
          </h1>

          <p className="font-sora text-xs sm:text-sm text-zinc-300 mt-3 max-w-md leading-relaxed">
            Your adventure gear order <strong className="text-[#FECD08] font-bold">#{orderId}</strong> has been received and verified. Our dispatch team is packing your kit for insured transit.
          </p>

          {/* Order Details Card */}
          <div className="w-full rounded-2xl bg-[#10141D] border border-white/10 p-5 sm:p-6 text-left my-8 shadow-2xl space-y-3 font-sora text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-zinc-400">Order Reference:</span>
              <span className="font-rajdhani font-black text-base text-[#FECD08]">#{orderId}</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-zinc-400">Recipient:</span>
              <span className="font-medium text-white">{formData.firstName || 'Rider'} {formData.lastName}</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-zinc-400">Delivery Address:</span>
              <span className="font-medium text-white text-right max-w-xs truncate">
                {formData.address1 || 'Delivery Address'}, {formData.city || 'City'}
              </span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-zinc-400">Payment Mode:</span>
              <span className="font-rajdhani font-bold text-white uppercase">{formData.paymentMethod}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="font-rajdhani font-bold text-white uppercase">Amount Paid:</span>
              <span className="font-rajdhani font-black text-xl text-[#FECD08]">
                ₹ {finalPayableTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onNavigateHome}
              className="px-8 py-3.5 rounded-xl bg-[#FECD08] hover:bg-white text-slate-950 font-rajdhani font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FECD08]/20 transition-colors"
            >
              <span>RETURN TO HOME</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onNavigateCategories}
              className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-rajdhani font-bold text-xs uppercase tracking-wider hover:bg-white/10 cursor-pointer transition-colors"
            >
              EXPLORE MORE GEAR
            </button>
          </div>
        </main>
      ) : (
        <>
          {/* Breadcrumb Navigation Strip */}
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
                  onClick={onNavigateCart}
                  className="hover:text-[#FECD08] transition-colors cursor-pointer shrink-0"
                >
                  CART ({cartCount})
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                <span className="text-[#FECD08] shrink-0">SECURE CHECKOUT</span>
              </nav>

              <div className="flex items-center gap-1.5 text-xs font-rajdhani font-bold text-[#FECD08] uppercase">
                <Lock className="w-3.5 h-3.5" />
                <span>256-Bit SSL Encrypted</span>
              </div>
            </div>
          </section>

          {/* Main Checkout Viewport */}
          <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-6 sm:py-10 lg:py-12">
            
            <div className="mb-8">
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                STEP 2 OF 2 • FINAL DISPATCH
              </span>
              <h1 className="font-rajdhani font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight mt-1">
                EXPRESS <span className="text-[#FECD08]">CHECKOUT</span>
              </h1>
            </div>

            <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* -------------------------------------------------------------------
                  LEFT COLUMN: CHECKOUT FORM FIELDS (8 cols on desktop)
                 ------------------------------------------------------------------- */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                
                {/* 1. Contact Info Card */}
                <div className="rounded-2xl bg-[#10141D] border border-white/10 p-5 sm:p-6 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <h2 className="font-rajdhani font-black text-base sm:text-lg uppercase tracking-wide text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FECD08] text-slate-950 font-black text-xs flex items-center justify-center">1</span>
                      <span>CONTACT DETAILS</span>
                    </h2>
                    <span className="text-[11px] font-sora text-zinc-400">For tracking & OTP</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="rider@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        WhatsApp / Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Shipping Address Card */}
                <div className="rounded-2xl bg-[#10141D] border border-white/10 p-5 sm:p-6 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <h2 className="font-rajdhani font-black text-base sm:text-lg uppercase tracking-wide text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#FECD08] text-slate-950 font-black text-xs flex items-center justify-center">2</span>
                      <span>SHIPPING ADDRESS</span>
                    </h2>
                    <span className="text-[11px] font-sora text-[#FECD08] flex items-center gap-1 font-semibold">
                      <Truck className="w-3.5 h-3.5" /> Insured Delivery
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="e.g. Vikram"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="e.g. Sharma"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        Flat, House no., Building, Apartment *
                      </label>
                      <input
                        type="text"
                        name="address1"
                        required
                        placeholder="House / Flat / Studio No., Building Name"
                        value={formData.address1}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        Street Address / Area / Landmark
                      </label>
                      <input
                        type="text"
                        name="address2"
                        placeholder="Road, Sector, Landmark (Optional)"
                        value={formData.address2}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g. Pune / Bengaluru"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        placeholder="411001"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora"
                      />
                    </div>

                    {/* Motorcycle Model Input for Hardware Fitment Check */}
                    <div className="sm:col-span-2 pt-2">
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5 flex items-center justify-between">
                        <span>Your Motorcycle Model & Year (Optional)</span>
                        <span className="text-[#FECD08] text-[10px] font-sora">Free mount compatibility check</span>
                      </label>
                      <input
                        type="text"
                        name="bikeModel"
                        placeholder="e.g. BMW R1250 GS (2023), Himalayan 450, Triumph Tiger"
                        value={formData.bikeModel}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Delivery Method */}
                <div className="rounded-2xl bg-[#10141D] border border-white/10 p-5 sm:p-6 shadow-xl">
                  <h2 className="font-rajdhani font-black text-base sm:text-lg uppercase tracking-wide text-white flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                    <span className="w-6 h-6 rounded-full bg-[#FECD08] text-slate-950 font-black text-xs flex items-center justify-center">3</span>
                    <span>DELIVERY SPEED</span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        formData.deliverySpeed === 'standard'
                          ? 'bg-[#FECD08]/10 border-[#FECD08] ring-1 ring-[#FECD08]'
                          : 'bg-white/5 border-white/10 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliverySpeed"
                          value="standard"
                          checked={formData.deliverySpeed === 'standard'}
                          onChange={handleInputChange}
                          className="accent-[#FECD08]"
                        />
                        <div>
                          <div className="font-rajdhani font-bold text-sm text-white uppercase">Standard Express</div>
                          <div className="text-[11px] text-zinc-400 font-sora">3-5 Days via Bluedart</div>
                        </div>
                      </div>
                      <span className="font-rajdhani font-black text-xs text-[#FECD08] uppercase">FREE</span>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        formData.deliverySpeed === 'priority'
                          ? 'bg-[#FECD08]/10 border-[#FECD08] ring-1 ring-[#FECD08]'
                          : 'bg-white/5 border-white/10 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="deliverySpeed"
                          value="priority"
                          checked={formData.deliverySpeed === 'priority'}
                          onChange={handleInputChange}
                          className="accent-[#FECD08]"
                        />
                        <div>
                          <div className="font-rajdhani font-bold text-sm text-white uppercase">Next-Day Priority</div>
                          <div className="text-[11px] text-zinc-400 font-sora">Fastest dispatch pipeline</div>
                        </div>
                      </div>
                      <span className="font-rajdhani font-black text-xs text-[#FECD08]">+ ₹ 199</span>
                    </label>
                  </div>
                </div>

                {/* 4. Payment Method Card */}
                <div className="rounded-2xl bg-[#10141D] border border-white/10 p-5 sm:p-6 shadow-xl">
                  <h2 className="font-rajdhani font-black text-base sm:text-lg uppercase tracking-wide text-white flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                    <span className="w-6 h-6 rounded-full bg-[#FECD08] text-slate-950 font-black text-xs flex items-center justify-center">4</span>
                    <span>PAYMENT METHOD</span>
                  </h2>

                  <div className="space-y-3">
                    {[
                      {
                        id: 'upi',
                        title: 'UPI / QR Code / NetBanking (Recommended)',
                        desc: 'Instant 0% fee payment via Google Pay, PhonePe, Paytm, CRED & UPI Apps',
                        icon: QrCode
                      },
                      {
                        id: 'card',
                        title: 'Credit / Debit Cards',
                        desc: 'Visa, MasterCard, RuPay, American Express with 3D Secure OTP',
                        icon: CreditCard
                      },
                      {
                        id: 'emi',
                        title: 'No-Cost EMI / PayLater',
                        desc: 'Split in 3, 6 or 9 monthly installments with select bank credit cards',
                        icon: Sparkles
                      },
                      {
                        id: 'cod',
                        title: 'Cash on Delivery (COD)',
                        desc: 'Pay cash or UPI at the doorstep upon parcel inspection',
                        icon: Banknote
                      }
                    ].map((method) => {
                      const Icon = method.icon
                      const isSel = formData.paymentMethod === method.id
                      return (
                        <label
                          key={method.id}
                          className={`p-4 rounded-xl border flex items-start gap-3.5 cursor-pointer transition-all ${
                            isSel
                              ? 'bg-[#FECD08]/10 border-[#FECD08] ring-1 ring-[#FECD08]'
                              : 'bg-white/5 border-white/10 hover:border-white/25'
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={isSel}
                            onChange={handleInputChange}
                            className="mt-1 accent-[#FECD08]"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-rajdhani font-bold text-sm text-white uppercase flex items-center gap-2">
                                <Icon className="w-4 h-4 text-[#FECD08]" />
                                {method.title}
                              </span>
                            </div>
                            <p className="text-[11px] font-sora text-zinc-400 mt-1 leading-snug">
                              {method.desc}
                            </p>
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* Submit Action Button on Mobile/Tablet */}
                <button
                  type="submit"
                  disabled={isSubmitting || cartItems.length === 0}
                  className="w-full py-4 px-6 rounded-xl bg-[#FECD08] hover:bg-white text-slate-950 font-rajdhani font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-xl shadow-[#FECD08]/20 disabled:opacity-50"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {isSubmitting ? 'PROCESSING PAYMENT...' : `PLACE ORDER NOW • ₹ ${finalPayableTotal.toLocaleString('en-IN')}`}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>

              {/* -------------------------------------------------------------------
                  RIGHT COLUMN: ORDER REVIEW SIDEBAR (4 cols on desktop)
                 ------------------------------------------------------------------- */}
              <div className="lg:col-span-4 flex flex-col gap-5 sticky lg:top-24">
                
                {/* Order Items Review */}
                <div className="rounded-2xl bg-[#10141D] border border-white/10 p-5 sm:p-6 shadow-2xl flex flex-col gap-4">
                  <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                    <h2 className="font-rajdhani font-black text-base uppercase tracking-wider text-white">
                      ITEMS IN ORDER ({cartCount})
                    </h2>
                    <button
                      type="button"
                      onClick={onNavigateCart}
                      className="text-xs font-rajdhani font-bold text-[#FECD08] hover:underline uppercase"
                    >
                      Edit
                    </button>
                  </div>

                  {/* Scrollable list of items */}
                  <div className="space-y-3 max-h-72 overflow-y-auto no-scrollbar divide-y divide-white/5">
                    {cartItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 pt-2">
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-black/60 border border-white/10 shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-0 right-0 px-1 rounded-tl bg-black/80 text-[10px] font-rajdhani font-bold text-[#FECD08]">
                            x{item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-rajdhani font-bold text-xs text-white truncate">
                            {item.name}
                          </h4>
                          {item.variant && (
                            <span className="text-[10px] text-zinc-400 font-sora block truncate">
                              {item.variant}
                            </span>
                          )}
                          <span className="font-rajdhani font-black text-xs text-[#FECD08]">
                            ₹ {(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="pt-3 border-t border-white/10 space-y-2.5 font-sora text-xs">
                    <div className="flex justify-between text-zinc-400">
                      <span>Subtotal</span>
                      <span className="text-white font-rajdhani font-bold">
                        ₹ {cartSubtotal.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#FECD08] font-medium">
                        <span>Coupon ({appliedCoupon?.code})</span>
                        <span className="font-rajdhani font-bold">
                          − ₹ {discountAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between text-zinc-400">
                      <span>Shipping</span>
                      <span className="text-[#FECD08] font-rajdhani font-bold uppercase">
                        {finalDeliveryFee === 0 ? 'FREE' : `₹ ${finalDeliveryFee}`}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                      <span className="font-rajdhani font-black text-sm uppercase text-white">
                        TOTAL PAYABLE
                      </span>
                      <span className="font-rajdhani font-black text-2xl text-[#FECD08]">
                        ₹ {finalPayableTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Reassurance notes */}
                  <div className="pt-3 border-t border-white/10 space-y-2 text-[11px] font-sora text-zinc-400">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#FECD08] shrink-0" />
                      <span>1-Year Official Brand Warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#FECD08] shrink-0" />
                      <span>Free Pan-India Delivery via Bluedart</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#FECD08] shrink-0" />
                      <span>Bank-Grade 256-Bit SSL Protection</span>
                    </div>
                  </div>

                </div>

              </div>

            </form>

          </main>
        </>
      )}

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
