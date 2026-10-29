import { useState } from 'react'
import {
  Cpu,
  ShieldCheck,
  Activity,
  Wifi,
  ChevronRight,
  Gauge,
  SlidersHorizontal,
  Flame,
  Radio,
  ArrowUpRight,
  Navigation,
  Compass,
  Headphones,
  CheckCircle,
} from 'lucide-react'
import Navbar from './components/Navbar'

export default function App() {
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
      title: 'Navigation & Tech',
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
      
      {/* Dynamic LBC MOTO Navigation Bar */}
      <Navbar />

      {/* Background Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-30 top-32" />
      <div className="absolute top-28 right-10 w-[500px] h-[500px] bg-[#FECD08]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[600px] -left-32 w-[400px] h-[400px] bg-[#FECD08]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Hero */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#FECD08]/30 text-white text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FECD08] animate-ping" />
              <span className="text-[#FECD08] font-rajdhani font-bold text-sm">LBC MOTO 2026 LINEUP</span>
            </div>

            <h1 className="font-rajdhani font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tight uppercase text-white">
              The Leader In <br />
              <span className="text-[#FECD08]">Integrated</span> <br />
              Riding Tech
            </h1>

            <p className="font-sora text-base sm:text-lg text-white/75 max-w-xl leading-relaxed pt-1">
              Engineered for motorcycle enthusiasts and long-haul tourers. Experience ultra-wideband HUD navigation, radar blindspot detection, and high-frequency bike diagnostics.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/category/navigation-tech"
                className="px-7 py-4 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-bold text-lg uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#FECD08]/25 transition-all duration-200 cursor-pointer"
              >
                <span>Shop Navigation & Radar</span>
                <ChevronRight className="w-5 h-5 text-[#212121]" />
              </a>

              <a
                href="/category/accessories"
                className="px-7 py-4 rounded-xl border border-white/20 hover:border-[#FECD08] bg-[#181818]/80 hover:text-[#FECD08] text-white font-rajdhani font-bold text-lg uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>View Accessories</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
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

          {/* Right Column: Live Telemetry Instrument Cluster */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#181818]/90 border-2 border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-[#FECD08]/60 transition-all duration-500">
              
              {/* Corner Tech Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                <div className="absolute top-2 right-2 w-8 h-[2px] bg-[#FECD08]" />
                <div className="absolute top-2 right-2 w-[2px] h-8 bg-[#FECD08]" />
              </div>

              {/* Card Header */}
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

              {/* Riding Mode Selector */}
              <div className="mt-6 flex items-center justify-between bg-[#212121] p-1.5 rounded-xl border border-white/10">
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

              {/* Central Speedometer */}
              <div className="my-8 text-center bg-[#212121]/60 rounded-2xl p-6 border border-white/5 relative">
                <div className="text-xs uppercase tracking-widest text-white/40 font-rajdhani font-semibold">
                  Live Ground Velocity
                </div>
                <div className="font-rajdhani font-bold text-7xl sm:text-8xl tracking-tighter text-white my-1">
                  {telemetry.speed}
                  <span className="text-xl sm:text-2xl font-rajdhani text-[#FECD08] tracking-normal ml-1">
                    KM/H
                  </span>
                </div>
                
                {/* RPM Gradient Bar */}
                <div className="w-full bg-[#181818] h-2.5 rounded-full overflow-hidden mt-3 border border-white/10">
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

              {/* Lean & Temp Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#212121] border border-white/10">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-rajdhani uppercase tracking-wider mb-1">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#FECD08]" />
                    <span>Lean Angle</span>
                  </div>
                  <div className="font-rajdhani font-bold text-2xl text-white">
                    {telemetry.leanAngle}° <span className="text-xs text-[#FECD08] font-normal">PEAK</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#212121] border border-white/10">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-rajdhani uppercase tracking-wider mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#FECD08]" />
                    <span>Rotor Temp</span>
                  </div>
                  <div className="font-rajdhani font-bold text-2xl text-white">
                    480° <span className="text-xs text-white/50 font-normal">C</span>
                  </div>
                </div>
              </div>

              {/* Mode Toggle Button */}
              <button
                onClick={cycleMode}
                className="mt-6 w-full py-3 rounded-xl bg-[#212121] hover:bg-white/10 border border-white/15 text-white font-rajdhani font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-[#FECD08]" />
                <span>Simulate Throttle Shift</span>
              </button>
            </div>
          </div>

        </div>

        {/* Featured Product Categories Section */}
        <section className="mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-rajdhani font-bold tracking-widest text-[#FECD08]">
                Catalog Overview
              </span>
              <h2 className="font-rajdhani font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white mt-1">
                Explore LBC MOTO Categories
              </h2>
            </div>
            <p className="text-sm text-white/60 font-sora max-w-sm">
              Explore the mega menus above or browse top gear categories below.
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
        <section id="tech-highlights" className="mt-28">
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
                The Leader in Integrated Riding Tech. Pioneering motorcycle heads-up displays, collision radars, and rider telemetry systems.
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
                <li><a href="/category/asmax-intercoms-chin-mounts" className="hover:text-white">ASMAX Mesh Intercoms</a></li>
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
    </div>
  )
}
