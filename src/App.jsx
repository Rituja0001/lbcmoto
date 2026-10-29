import { useState } from 'react'
import {
  ArrowRight,
  Play,
  Crosshair,
  Gauge,
  ShieldCheck,
  Wifi,
  ChevronRight,
  Cpu,
  Radio,
  SlidersHorizontal,
  Flame,
  Activity,
  X,
} from 'lucide-react'
import Navbar from './components/Navbar'
import heroBg from './assets/images/hero-banner.jpg'

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [activeSpeedMode, setActiveSpeedMode] = useState('TRACK')
  const [telemetry, setTelemetry] = useState({
    speed: 168,
    leanAngle: 42,
    rpm: 10400,
  })

  const cycleMode = () => {
    if (activeSpeedMode === 'TRACK') {
      setActiveSpeedMode('SPORT')
      setTelemetry({ speed: 124, leanAngle: 36, rpm: 8200 })
    } else if (activeSpeedMode === 'SPORT') {
      setActiveSpeedMode('STREET')
      setTelemetry({ speed: 78, leanAngle: 22, rpm: 5600 })
    } else {
      setActiveSpeedMode('TRACK')
      setTelemetry({ speed: 168, leanAngle: 42, rpm: 10400 })
    }
  }

  const techFeatures = [
    {
      title: 'Smart Helmet HUD',
      subtitle: 'Zero-latency micro-OLED display',
      desc: 'Projects real-time telemetry, blindspot proximity radar warnings, and turn-by-turn navigation directly into visor peripheral vision.',
      icon: Gauge,
      badge: 'v3.2 Sync',
    },
    {
      title: 'Predictive Crash AI',
      subtitle: '6-Axis IMU Sensor Matrix',
      desc: 'Autonomous emergency dispatch with millisecond crash angle detection and real-time impact G-force telemetry transmission.',
      icon: ShieldCheck,
      badge: 'ECE 22.06',
    },
    {
      title: 'Integrated Mesh Comm',
      subtitle: 'Ultra-wideband Rider Link',
      desc: 'Multi-rider dynamic encrypted mesh network with noise-cancelling voice isolation tuned for high-velocity wind buffeting.',
      icon: Wifi,
      badge: '1.8 km Range',
    },
  ]

  const featuredCollections = [
    {
      title: 'Navigation & Radar',
      tag: 'FLAGSHIP ECOSYSTEM',
      desc: 'HUD displays, wireless Carplay units, and integrated radar systems.',
      count: '4 Devices',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Motorcycle Accessories',
      tag: 'EXTREME TOURING',
      desc: 'Heavy-duty auxiliary lighting, quick chargers, and ballistic gear bags.',
      count: '3 Categories',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Riding Apparel & Merch',
      tag: 'PREMIUM PERFORMANCE',
      desc: 'Aerodynamic jerseys, cooling balaclavas, and streetwear tees.',
      count: '7 Styles',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="min-h-screen bg-[#212121] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] relative overflow-x-hidden">
      
      {/* 1. Transparent Floating Header Navigation */}
      <Navbar />

      {/* =========================================================================
          2. EPIC CINEMATIC HERO SECTION (EXACT MATCH TO REFERENCE IMAGE)
         ========================================================================= */}
      <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden">
        
        {/* Background Image Container with Cinematic Overlays */}
        <div className="absolute inset-0 -z-10 bg-black">
          <img
            src={heroBg}
            alt="LBC MOTO Adventure Touring"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle directional vignette gradient so text on left is super crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-black/60" />
        </div>

        {/* Hero Main Content Grid */}
        <div className="w-full px-4 sm:px-8 xl:px-12 2xl:px-16 flex-1 flex flex-col justify-center my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area: Typography & Call To Actions */}
            <div className="lg:col-span-7 xl:col-span-8 text-left pt-8 sm:pt-14">
              
              {/* Badge: LBC MOTO */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#FECD08] rotate-45 shadow-sm shadow-[#FECD08]/50" />
                <span className="font-rajdhani font-black text-sm tracking-widest text-[#FECD08] uppercase">
                  LBC MOTO
                </span>
              </div>

              {/* Massive Bold Headline: YOUR RIDE. YOUR RULES. YOUR ROAD. */}
              <h1 className="font-rajdhani font-black text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.2rem] tracking-tight leading-[0.9] uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                <span className="block">YOUR RIDE.</span>
                <span className="block">YOUR RULES.</span>
                <span className="block text-[#FECD08]">YOUR ROAD.</span>
              </h1>

              {/* Subheading */}
              <p className="font-sora text-sm sm:text-base lg:text-lg text-white/85 max-w-xl mt-6 leading-relaxed drop-shadow-md">
                Gear up for every adventure with technology built for the way you ride.
              </p>

              {/* CTAs: EXPLORE THE GEAR & DISCOVER THE JOURNEY */}
              <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
                <a
                  href="/shop"
                  className="px-8 py-4 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-black text-base uppercase tracking-wider flex items-center gap-2.5 shadow-xl shadow-[#FECD08]/25 transition-all duration-200 cursor-pointer group"
                >
                  <span>EXPLORE THE GEAR</span>
                  <ArrowRight className="w-4 h-4 text-[#212121] group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="px-7 py-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/30 hover:border-white backdrop-blur-md text-white font-rajdhani font-bold text-base uppercase tracking-wider flex items-center gap-3 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#212121] group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-[#212121] text-[#212121] ml-0.5" />
                  </div>
                  <span>DISCOVER THE JOURNEY</span>
                </button>
              </div>

            </div>

            {/* Right Sky Area: Script Tagline Quote */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between items-start lg:items-end text-left lg:text-right pt-6 lg:pt-0">
              <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-white/95 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] -rotate-3 select-none">
                <div>Live by Compass</div>
                <div className="lg:mr-6">Not by Time.</div>
              </div>
            </div>

          </div>
        </div>

        {/* Hero Bottom Bar: Scroll to Ride & GPS Reticle */}
        <div className="w-full px-4 sm:px-8 xl:px-12 2xl:px-16 pt-12 sm:pt-16 flex items-end justify-between">
          
          {/* Bottom Left: Mouse Scroll to Ride */}
          <div className="flex items-center gap-3.5 text-white/80 select-none group cursor-pointer">
            <div className="w-5 h-8.5 rounded-full border-2 border-white/40 group-hover:border-[#FECD08] transition-colors flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-[#FECD08] rounded-full animate-bounce" />
            </div>
            <span className="font-rajdhani font-bold text-xs tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
              SCROLL TO RIDE
            </span>
          </div>

          {/* Bottom Right: GPS Coordinates HUD Reticle */}
          <div className="flex items-center gap-3.5 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 hover:border-[#FECD08]/40 transition-colors">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Crosshair className="w-7 h-7 text-[#FECD08] animate-spin-slow stroke-[1.8]" />
            </div>
            <div className="font-mono text-xs sm:text-sm text-white/90 leading-tight">
              <div className="font-bold tracking-wider">27.9881° N</div>
              <div className="text-white/60 tracking-wider">86.9250° E</div>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          3. FEATURED CATALOG OVERVIEW & COCKPIT TELEMETRY
         ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
        
        {/* Cockpit Telemetry Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-rajdhani font-bold tracking-widest text-[#FECD08]">
              REAL-TIME ADVENTURE TELEMETRY
            </span>
            <h2 className="font-rajdhani font-bold text-4xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              Connected Telemetry <br />
              <span className="text-[#FECD08]">For Long-Haul Tourers</span>
            </h2>
            <p className="font-sora text-sm sm:text-base text-white/70 leading-relaxed">
              Every turn, lean angle, and engine pulse transmitted directly to your helmet HUD and cloud dashboard with 0.8ms zero-latency transmission.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div>
                <span className="font-rajdhani font-bold text-3xl sm:text-4xl text-white block">0.8 ms</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-rajdhani">HUD Ultra Latency</span>
              </div>
              <div>
                <span className="font-rajdhani font-bold text-3xl sm:text-4xl text-[#FECD08] block">1000 Hz</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-rajdhani">Sensor Telemetry</span>
              </div>
              <div>
                <span className="font-rajdhani font-bold text-3xl sm:text-4xl text-white block">IP68</span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-rajdhani">Extreme Rating</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#181818] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-[#FECD08]/60 transition-all duration-500">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-[#FECD08] animate-pulse" />
                  <span className="font-rajdhani font-bold uppercase tracking-wider text-sm text-white">
                    Live Telemetry Cockpit
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                    Connected
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between bg-[#212121] p-1.5 rounded-xl">
                {['STREET', 'SPORT', 'TRACK'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      setActiveSpeedMode(mode)
                      if (mode === 'TRACK') setTelemetry({ speed: 168, leanAngle: 42, rpm: 10400 })
                      if (mode === 'SPORT') setTelemetry({ speed: 124, leanAngle: 36, rpm: 8200 })
                      if (mode === 'STREET') setTelemetry({ speed: 78, leanAngle: 22, rpm: 5600 })
                    }}
                    className={`flex-1 py-2 text-xs font-rajdhani font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer ${
                      activeSpeedMode === mode
                        ? 'bg-[#FECD08] text-[#212121] shadow-md font-extrabold'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              <div className="my-8 text-center bg-[#212121]/60 rounded-2xl p-6 border border-white/5">
                <div className="text-xs uppercase tracking-widest text-white/40 font-rajdhani font-semibold">
                  Live Ground Velocity
                </div>
                <div className="font-rajdhani font-bold text-7xl sm:text-8xl tracking-tighter text-white my-1">
                  {telemetry.speed}
                  <span className="text-xl sm:text-2xl font-rajdhani text-[#FECD08] tracking-normal ml-1">
                    KM/H
                  </span>
                </div>
                
                <div className="w-full bg-[#181818] h-2.5 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 via-[#FECD08] to-red-500 transition-all duration-500 rounded-full"
                    style={{ width: `${(telemetry.rpm / 13000) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-white/40 mt-1">
                  <span>0 RPM</span>
                  <span className="text-[#FECD08] font-bold">{telemetry.rpm.toLocaleString()} RPM</span>
                  <span>13k LIMIT</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#212121]">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-rajdhani uppercase tracking-wider mb-1">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#FECD08]" />
                    <span>Lean Angle</span>
                  </div>
                  <div className="font-rajdhani font-bold text-2xl text-white">
                    {telemetry.leanAngle}° <span className="text-xs text-[#FECD08] font-normal">PEAK</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#212121]">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-rajdhani uppercase tracking-wider mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#FECD08]" />
                    <span>Rotor Temp</span>
                  </div>
                  <div className="font-rajdhani font-bold text-2xl text-white">
                    480° <span className="text-xs text-white/50 font-normal">C</span>
                  </div>
                </div>
              </div>

              <button
                onClick={cycleMode}
                className="mt-6 w-full py-3 rounded-xl bg-[#212121] hover:bg-white/10 text-white font-rajdhani font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-[#FECD08]" />
                <span>Simulate Throttle Shift</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <section className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-rajdhani font-bold tracking-widest text-[#FECD08]">
                Catalog Overview
              </span>
              <h2 className="font-rajdhani font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white mt-1">
                Explore LBC MOTO Gear
              </h2>
            </div>
            <p className="text-sm text-white/60 font-sora max-w-sm">
              From head-up radar displays to ballistic luggage, browse top categories below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {featuredCollections.map((col, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-[#181818] border border-white/10 hover:border-[#FECD08] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FECD08]/10"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#212121]/90 backdrop-blur-md text-[11px] font-mono text-[#FECD08] border border-[#FECD08]/30 uppercase font-semibold">
                    {col.tag}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-rajdhani font-bold text-2xl uppercase text-white group-hover:text-[#FECD08] transition-colors">
                      {col.title}
                    </h3>
                    <span className="text-xs font-mono text-white/40">{col.count}</span>
                  </div>
                  <p className="font-sora text-sm text-white/65 mt-2 leading-relaxed">
                    {col.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-rajdhani font-bold uppercase tracking-wider text-[#FECD08] group-hover:text-white transition-colors">
                    <span>Explore Products</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section id="tech-highlights">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-rajdhani font-bold tracking-widest text-[#FECD08]">
              Engineered For Extremes
            </span>
            <h2 className="font-rajdhani font-bold text-4xl sm:text-5xl uppercase tracking-tight text-white">
              Integrated Rider Architecture
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-sora">
              Every sensor, optic, and algorithm is synchronized directly with your machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {techFeatures.map((feat) => {
              const Icon = feat.icon
              return (
                <div
                  key={feat.title}
                  className="p-8 rounded-2xl bg-[#181818]/60 border border-white/10 hover:border-[#FECD08]/80 transition-all duration-300 relative group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#212121] border border-white/10 group-hover:border-[#FECD08] flex items-center justify-center text-[#FECD08] transition-colors shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-[#212121] text-[#FECD08] border border-[#FECD08]/30 font-semibold">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="font-rajdhani font-bold text-2xl uppercase text-white group-hover:text-[#FECD08] transition-colors">
                    {feat.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#FECD08] font-rajdhani uppercase tracking-wider mt-1 mb-3">
                    {feat.subtitle}
                  </div>
                  <p className="font-sora text-sm text-white/70 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#181818] py-12 text-xs text-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
            <div>
              <div className="font-rajdhani font-bold text-2xl text-white mb-2">LBC MOTO</div>
              <p className="font-sora text-white/50 text-xs leading-relaxed">
                The Leader in Integrated Riding Tech. Live by Compass, Not by Time.
              </p>
            </div>
            <div>
              <div className="font-rajdhani font-bold text-sm uppercase tracking-wider text-[#FECD08] mb-3">
                Navigation & Tech
              </div>
              <ul className="space-y-2 text-white/60 font-sora">
                <li><a href="/category/lbc-moto-navigation-radar" className="hover:text-white">LBC MOTO Radar</a></li>
                <li><a href="/category/carpuride-navigation" className="hover:text-white">Carpuride Displays</a></li>
                <li><a href="/category/aoocci-navigation" className="hover:text-white">Aoocci Smart HUDs</a></li>
                <li><a href="/category/asmax-intercoms" className="hover:text-white">ASMAX Mesh Intercoms</a></li>
              </ul>
            </div>
            <div>
              <div className="font-rajdhani font-bold text-sm uppercase tracking-wider text-[#FECD08] mb-3">
                Accessories & Gear
              </div>
              <ul className="space-y-2 text-white/60 font-sora">
                <li><a href="/category/auxiliary-lights" className="hover:text-white">Auxiliary Fog Lights</a></li>
                <li><a href="/category/charging-accessories" className="hover:text-white">Charging Accessories</a></li>
                <li><a href="/category/riding-jerseys" className="hover:text-white">Riding Jerseys</a></li>
                <li><a href="/category/balaclavas" className="hover:text-white">Balaclavas</a></li>
              </ul>
            </div>
            <div>
              <div className="font-rajdhani font-bold text-sm uppercase tracking-wider text-[#FECD08] mb-3">
                Rider Support
              </div>
              <p className="text-white/50 font-sora mb-2">Need assistance with firmware or compatibility?</p>
              <div className="text-white font-rajdhani font-bold text-base">support@lbcmoto.com</div>
              <div className="text-[#FECD08] font-rajdhani font-bold text-lg mt-1">+91 (800) 420-MOTO</div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              &copy; {new Date().getFullYear()} LBC MOTO Inc. All rights reserved.
            </div>
            <div className="flex gap-4 text-white/40">
              <a href="#privacy" className="hover:text-[#FECD08]">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-[#FECD08]">Terms of Service</a>
              <span>•</span>
              <a href="#warranty" className="hover:text-[#FECD08]">Warranty & Returns</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal (Optional preview) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#181818] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <span className="font-rajdhani font-bold text-lg text-[#FECD08] uppercase">
                LBC MOTO | The Mountain Pass Expedition
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#FECD08]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center text-white/60">
              <div className="text-center">
                <Play className="w-16 h-16 text-[#FECD08] mx-auto mb-3 animate-pulse" />
                <p className="font-rajdhani font-bold text-xl text-white">Live by Compass, Not by Time.</p>
                <p className="font-sora text-xs text-white/50 mt-1">Expedition Video Ready for Embedding</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
