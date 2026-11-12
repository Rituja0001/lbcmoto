import { useState } from 'react'
import {
  Compass,
  ChevronRight,
  ShieldCheck,
  Lock,
  FileText,
  RotateCcw,
  Scale,
  Copyright,
  AlertTriangle,
  Ban,
  CheckCircle2
} from 'lucide-react'
import Footer from '../components/Footer'
import heroBg from '../assets/images/hero-banner.webp'

export default function TermsConditionsPage({
  onNavigateHome,
  onNavigatePrivacy,
  onNavigateRefund
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
            <span className="text-[#FECD08]">TERMS & CONDITIONS</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight mb-3 font-rajdhani text-white">
              TERMS & <span className="text-[#FECD08]">CONDITIONS</span>
            </h1>

            <p className="font-sora text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Official store terms, intellectual property rules and usage agreements governing your experience at LBC Moto Store (<span className="text-white font-medium">www.lbcmotoshop.in</span>).
            </p>
          </div>

        </div>

        {/* Bottom Line Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FECD08] via-[#FECD08]/40 to-transparent z-20" />
      </section>

      {/* =========================================================================
          MAIN TERMS AND CONDITIONS CONTENT
         ========================================================================= */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">

          {/* Section 1: Agreement Overview */}
          <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                BINDING AGREEMENT
              </span>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase mt-1">
                Terms of Use and Agreement
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
              This Agreement governs your use of the website and the <strong className="text-white">www.lbcmotoshop.in</strong> (Henceforth referred to as <strong className="text-[#FECD08]">LBC Moto Store</strong>) service. The Service permits customers that have an appropriate relationship either with: (i) institutions of higher learning, fraternal organizations, honor societies and other collegiate groups (collectively, "Institutions"), (ii) corporations and small businesses; (iii) elementary and secondary schools; or (iv) other organizations, to design and purchase custom merchandise properly describing that relationship.
            </p>

            <div className="p-4 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FECD08] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-zinc-200 font-sora leading-relaxed">
                You understand that by using the Site and the Service, you have agreed to the terms and conditions of this Agreement and you agree to use the Site and the Service solely as provided in this Agreement.
              </p>
            </div>

          </div>

          {/* Section 2: Intellectual Property Rights */}
          <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                OWNERSHIP & TRADEMARKS
              </span>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase mt-1">
                Intellectual Property Rights of LBC Moto Store and Third Parties
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
              <p>
                LBC Moto Store is committed to the appropriate and legal use of the intellectual property of others, and we require our users to behave similarly. Unless otherwise noted, all materials, including images, illustrations, designs, icons, photographs along with written and other materials that appear on this website (collectively the <strong className="text-white">"Contents"</strong>) are copyrights, trademarks, trade dress and/or other intellectual properties owned, controlled or licensed by LBC Moto Store.
              </p>
              <p>
                LBC Moto Store is the owner of the Your Design trademark; other trademarks made available through this Site, including logos, slogans, color schemes and design trademarks, are not properties of Your Design. By using the LBC Moto Store Site, you agree to limit your use of Licensed Marks to uses that are directly related to such third parties and to comply with any restrictions or conditions imposed on the use and access of the Licensed Marks by the third parties. LBC Moto Store will notify you of such terms if your usage is in violation of such terms.
              </p>
            </div>

          </div>

          {/* Section 3: Commercial Resale & Design Ownership */}
          <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                RESALE RESTRICTIONS & RIGHTS
              </span>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase mt-1">
                Commercial Resale & Custom Designs
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
              <p>
                Generally, products created using images available on the site should not be resold commercially. In the event that you wish to resell such products, LBC Moto Store will not be liable for any consequences that result from it.
              </p>
              <p>
                Designs created using the text tools and images available through the site are in no way the exclusive property of the customers who assemble such designs. LBC Moto Store retains the right to display such designs or offer them (or variations of such designs) to other customers.
              </p>
            </div>

          </div>

          {/* Section 4: Order Discretion & Prohibited Material */}
          <div className="rounded-2xl bg-[#10141D] border border-red-500/30 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 text-red-400 font-rajdhani font-bold text-xs uppercase mb-1">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>CONTENT RESTRICTIONS</span>
              </div>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase">
                Order Discretion & Prohibited Conduct
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
              <p>
                Additionally, LBC Moto Store has the sole discretion to reject any order that it considers libelous, defamatory, obscene, profane, portraying irresponsible use of alcohol or other substances, advocating persecution based on gender, age, race, religion, disability or national origin, containing explicit sexual content or is otherwise inappropriate for production at our facility.
              </p>
              
              <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/20 text-zinc-200">
                <p>
                  You agree to not use LBC Moto Store Service to create any material that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable, or that infringes on any patent, trademark, trade secret, copyright or other proprietary rights of any third party.
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
