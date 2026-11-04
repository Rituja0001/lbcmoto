import { ArrowRight, Navigation, Radio, Zap, Compass } from 'lucide-react'
import duskBg from '../assets/images/cinematic-mountain-road-dusk.webp'

export default function CategoryStorySection() {
  // Ordered strictly by client priority: 1. Navigation, 2. Intercoms, 3. Aux Lights, 4. Accessories
  const categories = [
    {
      id: 'navigation',
      title: 'Smart Navigation & HUDs',
      desc: 'GPS navigators, wireless CarPlay, Android Auto & blind-spot radar systems.',
      icon: Navigation,
      href: '/category/navigation',
      image: '/images/CARPURIDE-Navigation.webp',
      badge: 'PRIORITY 01'
    },
    {
      id: 'intercoms',
      title: 'Mesh Intercoms & Audio',
      desc: 'Ultra-wideband rider group chat, ENC noise cancellation & high-velocity voice link.',
      icon: Radio,
      href: '/category/intercoms',
      image: '/images/INTERCOMS.webp',
      badge: 'PRIORITY 02'
    },
    {
      id: 'fog-lights',
      title: 'Auxiliary & Fog Lights',
      desc: 'Cut through mist, fog, and night trails with extreme-lumens LED illumination.',
      icon: Zap,
      href: '/category/auxiliary-lights',
      image: '/images/Auxiliary-Lights.webp',
      badge: 'PRIORITY 03'
    },
    {
      id: 'bags-accessories',
      title: 'Touring Bags & Accessories',
      desc: 'All-weather ballistic panniers, vibration-damped docks & touring essentials.',
      icon: Compass,
      href: '/category/bags-accessories',
      image: '/images/Motorcycle-Bags.webp',
      badge: 'PRIORITY 04'
    },
  ]

  return (
    <section id="categories-section" className="relative w-full pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pt-8 lg:pb-12 overflow-hidden select-none bg-[#121212]">
      
      {/* Background Image: Cinematic Mountain Road at Dusk (z-0, perfectly layered) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={duskBg}
          alt="Cinematic Mountain Road at Dusk"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Cinematic dark gradients to keep text readable while mountains and road glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#181818]/90 via-black/75 to-[#121212]/95" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Subtle Yellow Ambient Glow Accent */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#FECD08]/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FECD08]/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* Section Content Area (relative z-10) */}
      <div className="relative z-10 w-full px-4 sm:px-8 xl:px-12 2xl:px-16">
        
        {/* =========================================================================
            TOP SECTION HEADER (MATCHING REFERENCE IMAGE)
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10">
          
          {/* Left Title Area */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-rajdhani font-black text-sm tracking-widest text-[#FECD08] uppercase">
                01 / CHOOSE YOUR RIDE
              </span>
            </div>
            <h2 className="font-rajdhani font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none drop-shadow-md">
              EVERY ROAD LEADS <br className="hidden sm:inline" />
              TO A NEW STORY
            </h2>
          </div>

          {/* Right Text & Explore All Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 max-w-md">
            <p className="font-sora text-sm text-white/80 leading-relaxed lg:text-right drop-shadow">
              Different roads. Different challenges. Find the gear that fits your journey.
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="px-6 py-2.5 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer group shadow-xl shadow-[#FECD08]/20"
            >
              <span>EXPLORE ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-[#212121] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* =========================================================================
            4 CATEGORY CARDS GRID (MOBILE 2x2, DESKTOP 4-COLUMNS)
           ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.id}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-[9/13] border border-white/15 hover:border-[#FECD08] transition-all duration-500 shadow-2xl hover:shadow-[#FECD08]/20 hover:-translate-y-1.5 flex flex-col justify-end bg-black"
              >
                {/* Full Card Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dark Vignette Overlay for Crisp Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                {/* Card Top Category Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[9px] sm:text-[10px] font-rajdhani text-[#FECD08] font-bold tracking-wider uppercase">
                  {cat.badge}
                </div>

                {/* Card Bottom Content Area */}
                <div className="relative z-10 p-3 sm:p-5 flex flex-col justify-end">
                  
                  {/* Icon & Category Title */}
                  <div className="flex items-start gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-black/70 backdrop-blur-md border border-white/15 group-hover:border-[#FECD08] flex items-center justify-center text-[#FECD08] transition-colors shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h3 className="font-rajdhani font-black text-sm sm:text-lg lg:text-xl uppercase tracking-wider text-white group-hover:text-[#FECD08] transition-colors leading-tight line-clamp-2">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle Description */}
                  <p className="font-sora text-[10px] sm:text-xs text-white/75 leading-relaxed mb-2.5 sm:mb-4 line-clamp-2 hidden min-[400px]:-webkit-box">
                    {cat.desc}
                  </p>

                  {/* Explore Action Button (Solid Yellow matching all other buttons) */}
                  <div className="w-full py-2 sm:py-2.5 px-2.5 sm:px-4 rounded-lg sm:rounded-xl bg-[#FECD08] group-hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 shadow-xl shadow-[#FECD08]/20">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#212121] group-hover:translate-x-1 transition-transform" />
                  </div>

                </div>

              </a>
            )
          })}
        </div>

      </div>

    </section>
  )
}
