import {
  ShieldCheck,
  Truck,
  Headphones,
  RotateCcw,
  CreditCard,
  ArrowRight,
  Globe
} from 'lucide-react'
import logoImg from '../assets/images/lbcmoto-logo.png'

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: '100% Genuine Products',
    subtitle: 'Authorised Brands'
  },
  {
    icon: Truck,
    title: 'Worldwide Shipping',
    subtitle: 'Ride Anywhere'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    subtitle: 'By Riders, For Riders'
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    subtitle: 'Hassle-Free'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    subtitle: 'Multiple Options'
  }
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0F12] border-t border-white/10 text-white select-none">
      
      {/* 1. Top Trust Badges Bar (Exact match to reference) */}
      <div className="w-full border-b border-white/10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 py-7">
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {TRUST_BADGES.map((badge, idx) => {
              const IconComp = badge.icon
              return (
                <div key={idx} className="flex items-center gap-3.5 group">
                  <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/90 group-hover:text-[#F59E0B] group-hover:border-[#F59E0B]/50 transition-colors shrink-0">
                    <IconComp className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sora font-semibold text-xs sm:text-[13px] text-white leading-tight">
                      {badge.title}
                    </span>
                    <span className="font-sora text-[11px] text-zinc-400 mt-0.5 leading-tight">
                      {badge.subtitle}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 2. Main Footer Navigation Grid (5 Columns exact match) */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info & Socials (span 3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start pr-0 lg:pr-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="inline-block mb-5">
              <img
                src={logoImg}
                alt="LBC MOTO"
                className="h-9 w-auto object-contain"
              />
            </a>
            
            <p className="font-sora text-xs sm:text-[13px] text-zinc-400 leading-relaxed max-w-xs mb-6 font-normal">
              Premium motorcycle gear, navigation systems and accessories for those who live by compass, not by time.
            </p>

            {/* Social Icons Row (Instagram, Facebook, YouTube, Web) */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#F59E0B] bg-white/5 hover:bg-[#F59E0B] hover:text-black text-zinc-300 flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#F59E0B] bg-white/5 hover:bg-[#F59E0B] hover:text-black text-zinc-300 flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.595 0 9 1.582 9 4.415V8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#F59E0B] bg-white/5 hover:bg-[#F59E0B] hover:text-black text-zinc-300 flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Globe / Website */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Website"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#F59E0B] bg-white/5 hover:bg-[#F59E0B] hover:text-black text-zinc-300 flex items-center justify-center transition-all cursor-pointer"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: SHOP (span 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.18em] text-white uppercase mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 font-sora text-xs text-zinc-400">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Navigation
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Communication
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Lighting
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Apparel
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: SUPPORT (span 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.18em] text-white uppercase mb-4">
              SUPPORT
            </h4>
            <ul className="space-y-2.5 font-sora text-xs text-zinc-400">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: OUR STORY (span 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.18em] text-white uppercase mb-4">
              OUR STORY
            </h4>
            <ul className="space-y-2.5 font-sora text-xs text-zinc-400">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  About LBC Moto
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Rider Stories
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Community
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Dealers
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: JOIN THE JOURNEY (Newsletter, span 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-rajdhani font-black text-xs sm:text-sm tracking-[0.18em] text-white uppercase mb-2">
              JOIN THE JOURNEY
            </h4>
            <p className="font-sora text-xs text-zinc-400 mb-4 leading-relaxed">
              Get the latest updates, new products and ride stories.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center w-full"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border border-zinc-700 focus:border-[#F59E0B] rounded-l-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none w-full font-sora"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-[#F59E0B] hover:bg-white text-black font-bold px-3.5 py-2.5 rounded-r-lg transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-sm group"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar (Exact match: Copyright + Brand Tagline) */}
      <div className="w-full border-t border-white/10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-sora">
          <div>
            &copy; 2026 LBC Moto. All rights reserved.
          </div>
          <div className="text-zinc-400 font-medium">
            Live by Compass. Not by Time.
          </div>
        </div>
      </div>

    </footer>
  )
}
