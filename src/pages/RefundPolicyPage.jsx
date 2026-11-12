import { useState } from 'react'
import {
  Compass,
  ChevronRight,
  ShieldCheck,
  Lock,
  FileText,
  RotateCcw,
  Truck,
  Wrench,
  Clock,
  AlertTriangle,
  CheckCircle2,
  PackageCheck,
  ShieldAlert
} from 'lucide-react'
import Footer from '../components/Footer'
import heroBg from '../assets/images/hero-banner.webp'

export default function RefundPolicyPage({
  onNavigateHome,
  onNavigatePrivacy,
  onNavigateTerms
}) {
  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* =========================================================================
          HERO BANNER (COMPACT CINEMATIC THEME)
         ========================================================================= */}
      <section className="relative w-full min-h-[260px] sm:min-h-[300px] flex items-center bg-[#050505] overflow-hidden border-b border-white/10">
        
        {/* Cinematic Background Mountain Road */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="LBC Moto Road"
            className="w-full h-full object-cover object-center scale-100 opacity-75 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/95 via-[#07090D]/65 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-black/30" />
        </div>

        {/* Golden Radial Glow */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FECD08]/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10">
          
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs font-rajdhani font-bold tracking-wider uppercase text-zinc-400 mb-3">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#FECD08] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5 text-[#FECD08]" />
              <span>HOME</span>
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-zinc-400">LEGAL COMPLIANCE</span>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-[#FECD08]">REFUND & SHIPPING POLICY</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight mb-3 font-rajdhani text-white">
              SHIPPING, RETURN & <span className="text-[#FECD08]">REPLACEMENT POLICY</span>
            </h1>

            <p className="font-sora text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Official fulfillment timelines, return conditions, warranty guidelines and repair service terms for LBC Moto Store.
            </p>
          </div>

        </div>

        {/* Bottom Line Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FECD08] via-[#FECD08]/40 to-transparent z-20" />
      </section>

      {/* =========================================================================
          MAIN REFUND & SHIPPING CONTENT
         ========================================================================= */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">

          {/* Section 1: Shipping and Return Policy */}
          <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 text-[#FECD08] font-rajdhani font-bold text-xs uppercase mb-1">
                <Truck className="w-4 h-4 text-[#FECD08]" />
                <span>DISPATCH & RETURNS CRITERIA</span>
              </div>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase">
                Shipping and Return Policy
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
              LBC Moto Store goes to great lengths to ensure that all orders are fulfilled accurately and on time and are of the highest quality. Accordingly, LBC Store accepts returns and will refund payment/initiate returns (Depending on the users preference) if and when customers are disappointed by LBC Store merchandise for one of the following reasons:
            </p>

            {/* Return Reasons Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FECD08]/10 text-[#FECD08] font-rajdhani font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  A
                </span>
                <div>
                  <h4 className="font-rajdhani font-bold text-sm text-white uppercase mb-1">
                    Merchandise Flaw
                  </h4>
                  <p className="text-xs text-zinc-400 font-sora leading-relaxed">
                    This includes incorrect sizing, damaged fabric or a product with any manufacturing defect.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FECD08]/10 text-[#FECD08] font-rajdhani font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  B
                </span>
                <div>
                  <h4 className="font-rajdhani font-bold text-sm text-white uppercase mb-1">
                    Delivery Delay
                  </h4>
                  <p className="text-xs text-zinc-400 font-sora leading-relaxed">
                    The product has been delivered after 7 (Normal order) or 5 (Rush order) working days without LBC Store informing the customer in advance.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FECD08]/10 text-[#FECD08] font-rajdhani font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  C
                </span>
                <div>
                  <h4 className="font-rajdhani font-bold text-sm text-white uppercase mb-1">
                    Design Discrepancy
                  </h4>
                  <p className="text-xs text-zinc-400 font-sora leading-relaxed">
                    The design of the final product is different from the final design ordered by the customer.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#FECD08]/10 text-[#FECD08] font-rajdhani font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  D
                </span>
                <div>
                  <h4 className="font-rajdhani font-bold text-sm text-white uppercase mb-1">
                    Dimension Variance &gt; 10%
                  </h4>
                  <p className="text-xs text-zinc-400 font-sora leading-relaxed">
                    The dimension of the design is different by more than 10% from that ordered in the order.
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-300 font-sora leading-relaxed">
              <strong className="text-[#FECD08]">Policy Note:</strong> As a rule, LBC Moto Store does not encourage returns/replacements for any reason apart from those stated above.
            </div>

            {/* Shipping Timelines */}
            <div className="border-t border-white/5 pt-5">
              <h3 className="font-rajdhani font-bold text-base text-white uppercase tracking-wide mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FECD08]" />
                <span>Shipping Timelines</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sora leading-relaxed">
                Our shipping timeline is <strong className="text-white">minimum 2 days</strong> with express delivery and <strong className="text-white">upto 10 days</strong> with Normal delivery depending on goods availability. Custom products and accessories ordered with us from outside India can vary depending on the shipping conditions by freight vendors.
              </p>
            </div>

          </div>

          {/* Section 2: Standard Repair / Replacement Policy */}
          <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 text-[#FECD08] font-rajdhani font-bold text-xs uppercase mb-1">
                <Wrench className="w-4 h-4 text-[#FECD08]" />
                <span>ELECTRONICS & HARDWARE SERVICE</span>
              </div>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase">
                Standard Repair / Replacement Policy
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
              <p>
                LBC MOTO Standard repair and replacement policy is applicable to products that come under LBC MOTO warranty mentioned with the products sold, and <strong className="text-white">not the apparels</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                  <div className="font-rajdhani font-bold text-sm text-[#FECD08] uppercase mb-1">
                    Repair Timeline (14 – 45 Days)
                  </div>
                  <p className="text-xs text-zinc-400">
                    Any Repair can take a minimum of 14 days to 45 days based on electronic components availability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                  <div className="font-rajdhani font-bold text-sm text-[#FECD08] uppercase mb-1">
                    Non-Repairable Replacement
                  </div>
                  <p className="text-xs text-zinc-400">
                    Replacement of the product is only applicable when the product is non-repairable. Replacement timeline takes minimum 14 days to maximum 60 days based on procurement.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Section 3: Warranty Terms */}
          <div className="rounded-2xl bg-[#10141D] border border-amber-500/30 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 text-amber-400 font-rajdhani font-bold text-xs uppercase mb-1">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>HARDWARE COVERAGE & CONDITIONS</span>
              </div>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase">
                Warranty Terms & Physical Damage Exclusions
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
              <p>
                Any product other than apparels purchased from LBC MOTO should be used carefully and <strong className="text-white">not physically damaged by any extent</strong>.
              </p>
              <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-500/20 text-zinc-200">
                <p>
                  If physical damage is found, LBC MOTO has the right to deny the warranty of the product. Warranty will be applicable strictly to the rating/standards of the product sold. <strong className="text-[#FECD08]">Any physical damages or accidental damages are not covered by LBC MOTO.</strong>
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
