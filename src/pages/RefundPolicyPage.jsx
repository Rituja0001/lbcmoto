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
              RETURN, REPAIR & <span className="text-[#FECD08]">WARRANTY POLICY</span>
            </h1>

            <p className="font-sora text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Official policies regarding returns, arrival manufacturing defect replacements, 1-year repair warranty, and additional paid repair services for LBC Moto Store.
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

          {/* Section 1: Return & Arrival Replacement Policy */}
          <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 text-[#FECD08] font-rajdhani font-bold text-xs uppercase mb-1">
                <Truck className="w-4 h-4 text-[#FECD08]" />
                <span>RETURN & REPLACEMENT CRITERIA</span>
              </div>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase">
                Return & Replacement Policy
              </h2>
            </div>

            {/* Crucial Notice Banner */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 flex items-start gap-3.5">
              <AlertTriangle className="w-5 h-5 text-[#FECD08] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-rajdhani font-black text-base sm:text-lg text-white uppercase tracking-wide">
                  Important Notice: No Return Policy
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 font-sora leading-relaxed mt-1">
                  <strong className="text-[#FECD08]">We do not have a return policy.</strong> Products will only be replaced if any manufacturing defects are found upon arrival.
                </p>
              </div>
            </div>

            {/* Core Guidelines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-rajdhani font-black text-xs flex items-center justify-center shrink-0">
                  NO
                </div>
                <div>
                  <h4 className="font-rajdhani font-bold text-base text-white uppercase mb-1">
                    No Return Policy
                  </h4>
                  <p className="text-xs text-zinc-400 font-sora leading-relaxed">
                    LBC Moto operates under a strict no-return policy once goods are dispatched and accepted. We do not accept returns or process monetary refunds for change of mind or personal preference.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-black/50 border border-white/10 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] font-rajdhani font-black text-xs flex items-center justify-center shrink-0">
                  DOA
                </div>
                <div>
                  <h4 className="font-rajdhani font-bold text-base text-white uppercase mb-1">
                    Defects Upon Arrival Replacement
                  </h4>
                  <p className="text-xs text-zinc-400 font-sora leading-relaxed">
                    Products will be replaced promptly if any genuine manufacturing defect is found upon initial arrival and unboxing inspection.
                  </p>
                </div>
              </div>

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

          {/* Section 2: 1-Year Warranty & Paid Repair Service */}
          <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 text-[#FECD08] font-rajdhani font-bold text-xs uppercase mb-1">
                <Wrench className="w-4 h-4 text-[#FECD08]" />
                <span>ELECTRONICS & HARDWARE SERVICE</span>
              </div>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase">
                Warranty & Repair Policy
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
              <p>
                LBC MOTO Standard repair and warranty policy is applicable to products that come under LBC MOTO warranty mentioned with the products sold, and <strong className="text-white">not the apparels</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                
                {/* 1st Year Free Repair */}
                <div className="p-5 rounded-xl bg-black/50 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-rajdhani font-bold text-base text-[#FECD08] uppercase">
                      1st Year Official Warranty
                    </span>
                    <span className="text-[10px] font-rajdhani font-black px-2 py-0.5 rounded bg-[#FECD08]/15 text-[#FECD08] uppercase">
                      MANUFACTURING DEFECTS
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    <strong className="text-white">During 1 year warranty</strong> — Products will be repaired for manufacturing defects. Any repair can take a minimum of 14 days to 45 days based on electronic components availability.
                  </p>
                </div>

                {/* Additional 1 Year Paid Repair */}
                <div className="p-5 rounded-xl bg-black/50 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-rajdhani font-bold text-base text-[#FECD08] uppercase">
                      Additional 1 Year
                    </span>
                    <span className="text-[10px] font-rajdhani font-black px-2 py-0.5 rounded bg-white/10 text-zinc-300 uppercase">
                      PAID EXTENDED REPAIR
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    <strong className="text-white">Additional one Year</strong> — Paid products repair service is available for extended rider support and component replacements.
                  </p>
                </div>

              </div>

              {/* Non-repairable clause */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <strong className="text-white font-semibold">Non-Repairable Replacement:</strong> Replacement of the product under covered terms is only applicable when the product is deemed non-repairable by our technical team. The replacement timeline can take a minimum of 14 days to a maximum of 60 days based on component and product procurement.
              </div>
            </div>

          </div>

          {/* Section 3: Warranty Terms & Physical Damage Exclusions */}
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

              {/* Official Office & Support Helpdesk Note */}
              <div className="border-t border-white/10 pt-5 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-[11px] font-rajdhani font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    OFFICIAL SUPPORT EMAIL
                  </div>
                  <a
                    href="mailto:support@lbcmoto.com"
                    className="font-sora text-sm text-[#FECD08] font-bold hover:underline"
                  >
                    support@lbcmoto.com
                  </a>
                  <p className="text-[11px] text-zinc-400 font-sora mt-1">
                    Send arrival unboxing videos, photos and defect descriptions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <div className="text-[11px] font-rajdhani font-bold text-zinc-400 uppercase tracking-wider mb-1">
                    OFFICIAL REGISTERED OFFICE
                  </div>
                  <p className="font-sora text-xs text-zinc-200 leading-relaxed font-medium">
                    Venkataswamy Reddy Building, 94/14, Annasandrapalya Main Rd, Annasandrapalya Extension, Vinayaka Nagar, HAL,, Bengaluru, Karnataka, 560017, India
                  </p>
                </div>
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
