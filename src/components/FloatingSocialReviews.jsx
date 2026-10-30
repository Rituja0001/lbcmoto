import { useState } from 'react'
import { X, Star, ChevronRight } from 'lucide-react'

export default function FloatingSocialReviews({ followerCount = '10.6K' }) {
  const [isVisible, setIsVisible] = useState(true)

  const googleReviewLink =
    'https://www.google.com/search?hl=en-IN&gl=in&q=LBC+Moto,+Venkataswamy+Reddy+Building,+94/14,+Annasandrapalya+Main+Rd,+Annasandrapalya+Extension,+Vinayaka+Nagar,+HAL,+Bengaluru,+Karnataka+560017&ludocid=7579103371940783096&lsig=AB86z5Up_u-G7n9P3YTeqTTGehcB#lrd=0x3bae136b486aeec3:0x692e625c687ee3f8,1'

  const instagramLink = 'https://www.instagram.com/lbc.moto'

  // Minimized tab docked to left screen edge (hidden on mobile to prevent blocking content)
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        aria-label="Open reviews and social tab"
        className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-white text-slate-950 shadow-2xl border-y border-r border-slate-300 rounded-r-xl py-3.5 px-2 flex-col items-center gap-2 hover:bg-[#FECD08] transition-all cursor-pointer group select-none"
      >
        <Star className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05] group-hover:scale-110 transition-transform" />
        <span className="font-rajdhani font-black text-xs sm:text-[13px] tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
          Reviews
        </span>
        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-950 transition-colors" />
      </button>
    )
  }

  return (
    <aside
      aria-label="Customer Reviews and Social"
      className="hidden md:block fixed left-0 top-1/2 -translate-y-1/2 z-40 select-none animate-in fade-in slide-in-from-left duration-300"
    >
      <div className="relative flex flex-col bg-white text-slate-900 rounded-r-2xl shadow-[4px_16px_35px_rgba(0,0,0,0.35)] border-y border-r border-slate-200/90 overflow-visible w-[88px] sm:w-[94px]">
        
        {/* Floating Mini Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close review badge"
          title="Close badge"
          className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-slate-900 hover:bg-red-600 text-white flex items-center justify-center shadow-lg border border-white/50 transition-all cursor-pointer z-20 group"
        >
          <X className="w-3 h-3 group-hover:scale-110 transition-transform" />
        </button>

        {/* 1. Google Reviews Card (Pinned flush to left edge, exact match to reference) */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="p-3 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors group/card border-b border-slate-100 cursor-pointer"
        >
          {/* Authentic Google Multi-Color "G" */}
          <div className="w-7 h-7 flex items-center justify-center mb-1 group-hover/card:scale-110 transition-transform">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>

          <span className="font-sora text-[11px] font-bold text-slate-800 leading-tight block">
            Google Reviews
          </span>

          <div className="flex items-center justify-center gap-0.5 mt-1">
            <span className="font-rajdhani font-black text-2xl text-slate-900 leading-none">
              4.9
            </span>
          </div>

          <div className="flex items-center gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>
        </a>

        {/* 2. Instagram Followers Card (Displaying Follower Count) */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="p-3 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors group/card rounded-br-2xl cursor-pointer"
        >
          {/* Authentic Gradient Instagram Camera Icon */}
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white mb-1 shadow-sm group-hover/card:scale-110 transition-transform">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>

          <span className="font-sora text-[11px] font-bold text-slate-800 leading-tight block">
            Instagram
          </span>

          <div className="font-rajdhani font-black text-2xl text-slate-900 leading-none mt-1">
            {followerCount}
          </div>

          <span className="font-sora text-[10px] font-extrabold text-[#dc2743] uppercase tracking-wider mt-0.5 block">
            Followers
          </span>
        </a>

      </div>
    </aside>
  )
}
