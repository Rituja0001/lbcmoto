import { ArrowRight, Radio, Zap } from 'lucide-react'
import intercomsBg from '../assets/images/INTERCOMS.webp'
import auxLightsBg from '../assets/images/Auxiliary-Lights.webp'

export default function TechFeatureBentoSection() {
  return (
    <section className="w-full bg-[#121212] select-none border-t border-white/10">
      
      {/* =========================================================================
          COMMUNICATION & AUX LIGHTING (SPLIT 2-COLUMN FEATURE BLOCKS)
         ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        
        {/* BLOCK: COMMUNICATION & MESH INTERCOMS (INTERCOMS.webp) */}
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
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-[#FECD08]" />
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                COMMUNICATION & MESH INTERCOMS
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

        {/* BLOCK: AUX LIGHTS & ILLUMINATION (Auxiliary-Lights.webp) */}
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
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#FECD08]" />
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                AUXILIARY & FOG LIGHTS
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
