import { ArrowRight, Moon, Compass, Zap, Wrench } from 'lucide-react'
import duskBg from '../assets/images/cinematic-mountain-road-dusk.webp'

export default function CategoryStorySection() {
  const categories = [
    {
      id: 'fog-lights',
      tag: 'AFTER DARK',
      title: 'Auxiliary Lights / Fog Lights',
      desc: 'Cut through mist, fog, and night trails with extreme-lumens LED illumination.',
      icon: Moon,
      href: '/category/auxiliary-lights',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'bags-covers',
      tag: 'THE LONG HAUL',
      title: 'Motorcycle Bags & Covers',
      desc: 'All-weather ballistic panniers, saddlebags, and heavy-duty protective covers.',
      icon: Compass,
      href: '/category/bags-covers',
      image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'charging-accessories',
      tag: 'ALWAYS POWERED',
      title: 'Charging Accessories',
      desc: 'Vibration-damped fast Type-C & wireless docks with realtime voltage telemetry.',
      icon: Zap,
      href: '/category/charging-accessories',
      image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'motorcycle-spares',
      tag: 'PEAK PRECISION',
      title: 'Motorcycle Spares',
      desc: 'OEM-grade mechanical cables, performance brake pads, and track spares.',
      icon: Wrench,
      href: '/category/all-spares',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=900&q=80',
    },
  ]

  return (
    <section id="categories-section" className="relative w-full py-20 lg:py-28 overflow-hidden select-none bg-[#121212]">
      
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12">
          
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
              href="/shop"
              className="px-6 py-2.5 rounded-xl border border-white/25 hover:border-[#FECD08] bg-black/50 hover:bg-[#FECD08] backdrop-blur-md text-white hover:text-[#212121] font-rajdhani font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer group shadow-lg"
            >
              <span>EXPLORE ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* =========================================================================
            4 CATEGORY CARDS GRID (MATCHING DESIGN REFERENCE IMAGE)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.id}
                href={cat.href}
                className="group relative rounded-2xl overflow-hidden aspect-[9/13] sm:aspect-[3/4] lg:aspect-[9/13] border border-white/15 hover:border-[#FECD08] transition-all duration-500 shadow-2xl hover:shadow-[#FECD08]/20 hover:-translate-y-1.5 flex flex-col justify-end bg-black"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />
                </div>

                {/* Card Top Category Tag */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#FECD08] font-bold tracking-wider uppercase">
                  {cat.tag}
                </div>

                {/* Card Bottom Content Area */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
                  
                  {/* Icon & Category Title */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 group-hover:border-[#FECD08] flex items-center justify-center text-[#FECD08] transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-rajdhani font-black text-xl lg:text-2xl uppercase tracking-wider text-white group-hover:text-[#FECD08] transition-colors leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle Description */}
                  <p className="font-sora text-xs text-white/75 leading-relaxed mb-5 line-clamp-2">
                    {cat.desc}
                  </p>

                  {/* Explore Action Button */}
                  <div className="w-full py-2.5 px-4 rounded-xl border border-white/30 group-hover:border-[#FECD08] bg-black/60 group-hover:bg-[#FECD08] backdrop-blur-md text-white group-hover:text-[#212121] font-rajdhani font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
