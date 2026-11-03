import { ArrowRight, Navigation, Map, ShieldCheck, Route, Radio, Zap } from 'lucide-react'
import aoocciNavBg from '../assets/images/AOOCCI-Navigation.webp'
import intercomsBg from '../assets/images/INTERCOMS.webp'
import auxLightsBg from '../assets/images/Auxiliary-Lights.webp'

export default function TechFeatureBentoSection() {
  return (
    <section className="w-full bg-[#121212] select-none border-t border-white/10">
      
      {/* =========================================================================
          BLOCK 02: NAVIGATION (PRIORITY 01 - FULL-WIDTH TOP HERO BANNER)
         ========================================================================= */}
      <div className="relative min-h-[420px] sm:min-h-[460px] lg:min-h-[520px] w-full overflow-hidden flex flex-col justify-between border-b border-white/10 group">
        
        {/* Background Image: AOOCCI-Navigation.webp */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={aoocciNavBg}
            alt="AOOCCI Motorcycle Navigation"
            className="w-full h-full object-cover object-center lg:object-right group-hover:scale-102 transition-transform duration-1000 ease-out"
          />
          {/* Subtle directional vignette gradient so left text is punchy and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
        </div>

        {/* Top & Middle Content Grid */}
        <div className="relative z-10 w-full px-4 sm:px-8 xl:px-12 2xl:px-16 pt-10 sm:pt-16 pb-6 sm:pb-8 flex-1 flex flex-col justify-center">
          <div className="max-w-2xl space-y-3 sm:space-y-4 text-left">
            
            {/* Badge: 02 / NAVIGATION */}
            <div className="flex items-center gap-2">
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                02 / NAVIGATION (PRIORITY 01)
              </span>
            </div>

            {/* Title: NEVER LOSE YOUR WAY */}
            <h2 className="font-rajdhani font-black text-3xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.92] drop-shadow-md">
              <span className="block">NEVER LOSE</span>
              <span className="block">YOUR WAY</span>
            </h2>

            {/* Subtitle */}
            <p className="font-sora text-xs sm:text-sm md:text-base text-white/85 max-w-lg leading-relaxed pt-1 drop-shadow">
              Go further with advanced motorcycle GPS and wireless CarPlay/Android Auto navigation built for real-world riders.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-xs sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FECD08]/20 cursor-pointer group/btn"
              >
                <span>SHOP NAVIGATION</span>
                <ArrowRight className="w-4 h-4 text-[#212121] group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="relative z-10 w-full px-4 sm:px-8 xl:px-12 2xl:px-16 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-[11px] sm:text-xs font-sora text-white/75">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="font-medium text-white/90">Turn-by-Turn GPS</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="font-medium text-white/90">Offline Maps Ready</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="font-medium text-white/90">IPX7 Weatherproof</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Route className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="font-medium text-white/90">Dynamic Route Planning</span>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          BLOCK 03: INTERCOMS & BLOCK 04: AUX LIGHTS (SPLIT 2-COLUMN)
         ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        
        {/* BLOCK 03: COMMUNICATION & MESH INTERCOMS (INTERCOMS.webp) */}
        <div className="relative min-h-[340px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden p-5 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 group">
          
          {/* Background Image: INTERCOMS.webp */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={intercomsBg}
              alt="LBC MOTO Mesh Intercoms & Audio"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-2 sm:space-y-3 text-left">
            {/* Badge: 03 / COMMUNICATION */}
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#FECD08]" />
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                03 / COMMUNICATION (PRIORITY 02)
              </span>
            </div>

            {/* Title */}
            <h3 className="font-rajdhani font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
              <span className="block">MESH INTERCOMS</span>
              <span className="block">& HELMET AUDIO</span>
            </h3>

            {/* Subtitle */}
            <p className="font-sora text-xs sm:text-sm text-white/80 max-w-sm pt-1 drop-shadow">
              Ultra-wideband mesh group link, ENC noise cancellation, and high-velocity rider voice clarity.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 pt-4 sm:pt-6">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FECD08]/20 cursor-pointer group/btn"
            >
              <span>SHOP INTERCOMS</span>
              <ArrowRight className="w-4 h-4 text-[#212121] group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* BLOCK 04: AUX LIGHTS & ILLUMINATION (Auxiliary-Lights.webp) */}
        <div className="relative min-h-[340px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden p-5 sm:p-10 lg:p-12 flex flex-col justify-between group">
          
          {/* Background Image: Auxiliary-Lights.webp */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={auxLightsBg}
              alt="LBC MOTO Auxiliary & Fog Lights"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-2 sm:space-y-3 text-left">
            {/* Badge: 04 / LIGHTING */}
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#FECD08]" />
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                04 / AUXILIARY LIGHTS (PRIORITY 03)
              </span>
            </div>

            {/* Title */}
            <h3 className="font-rajdhani font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
              <span className="block">AUXILIARY LIGHTS</span>
              <span className="block">& FOG CUTTERS</span>
            </h3>

            {/* Subtitle */}
            <p className="font-sora text-xs sm:text-sm text-white/80 max-w-sm pt-1 drop-shadow">
              Extreme-lumens Cree LED illumination, wide flood beam, strobe optics, and heavy mist penetration.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 pt-4 sm:pt-6">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FECD08]/20 cursor-pointer group/btn"
            >
              <span>SHOP AUX LIGHTS</span>
              <ArrowRight className="w-4 h-4 text-[#212121] group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}
