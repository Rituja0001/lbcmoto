import { ArrowRight, Navigation, Map, ShieldCheck, Route, Volume2, SunMedium } from 'lucide-react'

export default function TechFeatureBentoSection() {
  return (
    <section className="w-full bg-[#121212] select-none border-t border-white/10">
      
      {/* =========================================================================
          BLOCK 02: NAVIGATION (FULL-WIDTH TOP HERO BANNER)
         ========================================================================= */}
      <div className="relative min-h-[480px] lg:min-h-[560px] w-full overflow-hidden flex flex-col justify-between border-b border-white/10 group">
        
        {/* Background Image: Motorcycle Cockpit & Mountain Road at Dusk */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=2000&q=85"
            alt="Motorcycle Navigation Cockpit"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000 ease-out"
          />
          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        </div>

        {/* Top & Middle Content Grid */}
        <div className="relative z-10 w-full px-4 sm:px-8 xl:px-12 2xl:px-16 pt-10 sm:pt-14 pb-8 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading, Subtitle & Button */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-4 text-left">
              
              {/* Badge: 02 / NAVIGATION */}
              <div className="flex items-center gap-2">
                <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                  02 / NAVIGATION
                </span>
              </div>

              {/* Title: NEVER LOSE YOUR WAY */}
              <h2 className="font-rajdhani font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.92] drop-shadow-md">
                <span className="block">NEVER LOSE</span>
                <span className="block">YOUR WAY</span>
              </h2>

              {/* Subtitle */}
              <p className="font-sora text-sm sm:text-base text-white/80 max-w-lg leading-relaxed pt-1 drop-shadow">
                Go further with advanced navigation systems designed for real-world riders.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="/category/navigation"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FECD08]/20 cursor-pointer group/btn"
                >
                  <span>SHOP NAVIGATION</span>
                  <ArrowRight className="w-4 h-4 text-[#212121] group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Column: Realistic Motorcycle GPS Display Unit Mockup */}
            <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-3xl p-3 bg-gradient-to-b from-[#2a2a2a] to-[#161616] border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-md">
                
                {/* Sun Hood / Bezel Header */}
                <div className="flex items-center justify-between px-3 py-1.5 text-[10px] font-mono text-white/50 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>GPS FIXED • LBC APEX v3</span>
                  </div>
                  <span>10:42 AM • 98%</span>
                </div>

                {/* Display Screen */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#181d24] border border-white/10 p-3 sm:p-4 flex flex-col justify-between">
                  
                  {/* Stylized SVG Mountain Map Contours & Route */}
                  <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 400 250">
                    <path d="M 0,180 Q 80,120 160,160 T 320,100 T 400,140" fill="none" stroke="#334155" strokeWidth="2" />
                    <path d="M 0,90 Q 120,40 240,80 T 400,60" fill="none" stroke="#334155" strokeWidth="1.5" />
                    <path d="M 40,240 C 90,190 120,130 180,140 S 260,80 320,40" fill="none" stroke="#06b6d4" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="180" cy="140" r="7" fill="#FECD08" stroke="#ffffff" strokeWidth="2" />
                  </svg>

                  {/* Top Turn Banner */}
                  <div className="relative z-10 bg-[#0f172a]/90 backdrop-blur-md border border-cyan-500/30 rounded-xl p-2.5 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                        ↑
                      </div>
                      <div>
                        <div className="text-xs font-rajdhani font-bold text-white tracking-wide">Continue on NH3</div>
                        <div className="text-[10px] font-mono text-cyan-400 font-semibold">In 12 km • Pass Turnoff</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded">12 km</span>
                  </div>

                  {/* Right Telemetry Column */}
                  <div className="relative z-10 self-end bg-[#0f172a]/90 backdrop-blur-md border border-white/10 rounded-xl p-2.5 space-y-1.5 text-right shadow-lg">
                    <div>
                      <div className="text-[9px] font-mono uppercase text-white/50">Travel Time</div>
                      <div className="font-rajdhani font-bold text-sm text-white">2 h 18 m</div>
                    </div>
                    <div className="border-t border-white/10 pt-1">
                      <div className="text-[9px] font-mono uppercase text-white/50">Trip Dist</div>
                      <div className="font-rajdhani font-bold text-sm text-[#FECD08]">146 km</div>
                    </div>
                    <div className="border-t border-white/10 pt-1">
                      <div className="text-[9px] font-mono uppercase text-white/50">Elevation</div>
                      <div className="font-rajdhani font-bold text-sm text-emerald-400">2,430 m</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="relative z-10 w-full px-4 sm:px-8 xl:px-12 2xl:px-16 pb-6 pt-4 border-t border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sora text-white/75">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <span className="font-medium text-white/90">Turn-by-Turn Navigation</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Map className="w-4 h-4" />
              </div>
              <span className="font-medium text-white/90">Offline Maps Ready</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-medium text-white/90">Rugged & Weatherproof</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FECD08] shrink-0">
                <Route className="w-4 h-4" />
              </div>
              <span className="font-medium text-white/90">Dynamic Route Planning</span>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================================
          BLOCK 03 & BLOCK 04 (BOTTOM 2-COLUMN SPLIT BANNERS)
         ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        
        {/* BLOCK 03: COMMUNICATION */}
        <div className="relative min-h-[380px] lg:min-h-[440px] overflow-hidden p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 group">
          
          {/* Background Image: Rider with Helmet Mesh Intercom Communicator */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"
              alt="Helmet Intercom Communication"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-3 text-left">
            {/* Badge: 03 / COMMUNICATION */}
            <div className="flex items-center gap-2">
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                03 / COMMUNICATION
              </span>
            </div>

            {/* Title: THE BEST RIDES ARE BETTER TOGETHER */}
            <h3 className="font-rajdhani font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
              <span className="block">THE BEST RIDES</span>
              <span className="block">ARE BETTER TOGETHER</span>
            </h3>

            {/* Subtitle */}
            <p className="font-sora text-xs sm:text-sm text-white/80 max-w-sm pt-1 drop-shadow">
              Stay connected. Ride as one.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 pt-6">
            <a
              href="/category/communication"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FECD08]/20 cursor-pointer group/btn"
            >
              <span>SHOP INTERCOMS</span>
              <ArrowRight className="w-4 h-4 text-[#212121] group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* BLOCK 04: AUXILIARY LIGHTS */}
        <div className="relative min-h-[380px] lg:min-h-[440px] overflow-hidden p-6 sm:p-10 lg:p-12 flex flex-col justify-between group">
          
          {/* Background Image: Motorcycle with Powerful Auxiliary Fog Lights Glowing at Night */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80"
              alt="Motorcycle Auxiliary Projector Lights"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-3 text-left">
            {/* Badge: 04 / AUXILIARY LIGHTS */}
            <div className="flex items-center gap-2">
              <span className="font-rajdhani font-black text-xs sm:text-sm tracking-widest text-[#FECD08] uppercase">
                04 / AUXILIARY LIGHTS
              </span>
            </div>

            {/* Title: OWN THE ROAD AFTER DARK */}
            <h3 className="font-rajdhani font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
              <span className="block">OWN THE ROAD</span>
              <span className="block">AFTER DARK</span>
            </h3>

            {/* Subtitle */}
            <p className="font-sora text-xs sm:text-sm text-white/80 max-w-sm pt-1 drop-shadow">
              Powerful auxiliary lights for clearer, safer night rides.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 pt-6">
            <a
              href="/category/auxiliary-lights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#FECD08]/20 cursor-pointer group/btn"
            >
              <span>SHOP LIGHTS</span>
              <ArrowRight className="w-4 h-4 text-[#212121] group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}
