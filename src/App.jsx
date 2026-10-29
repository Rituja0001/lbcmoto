import { useState } from 'react'
import {
  Zap,
  Cpu,
  ShieldCheck,
  Activity,
  Wifi,
  ChevronRight,
  Gauge,
  SlidersHorizontal,
  Flame,
  Radio,
  ArrowUpRight
} from 'lucide-react'

export default function App() {
  const [activeSpeedMode, setActiveSpeedMode] = useState('TRACK')
  const [telemetry, setTelemetry] = useState({
    speed: 168,
    leanAngle: 42,
    rpm: 10400,
    hudConnected: true,
  })

  const cycleMode = () => {
    if (activeSpeedMode === 'TRACK') {
      setActiveSpeedMode('SPORT')
      setTelemetry({ speed: 124, leanAngle: 36, rpm: 8200, hudConnected: true })
    } else if (activeSpeedMode === 'SPORT') {
      setActiveSpeedMode('STREET')
      setTelemetry({ speed: 78, leanAngle: 22, rpm: 5600, hudConnected: true })
    } else {
      setActiveSpeedMode('TRACK')
      setTelemetry({ speed: 168, leanAngle: 42, rpm: 10400, hudConnected: true })
    }
  }

  const techFeatures = [
    {
      title: 'Smart Helmet HUD',
      subtitle: 'Zero-latency micro-OLED display',
      desc: 'Projects real-time telemetry, blindspot proximity warnings, and GPS directions directly into your visor peripheral vision.',
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

  return (
    <div className="min-h-screen bg-[#212121] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] relative overflow-hidden">
      {/* Background Tech Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#FECD08]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#FECD08]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Banner */}
      <div className="bg-[#181818] border-b border-white/5 py-1.5 px-4 text-center text-xs tracking-wider uppercase">
        <span className="text-[#FECD08] font-bold">New release</span> • The Apex Series 2 HUD Ecosystem is now available for pre-order
      </div>

      {/* Navigation */}
      <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-[#212121]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FECD08] flex items-center justify-center text-[#212121] shadow-lg shadow-[#FECD08]/20 font-rajdhani font-black text-2xl tracking-tighter">
              LBC
            </div>
            <div>
              <span className="font-rajdhani font-bold text-2xl tracking-wider text-white uppercase block leading-none">
                LBC MOTO
              </span>
              <span className="text-[10px] tracking-widest text-[#FECD08] uppercase font-semibold font-rajdhani">
                Riding Tech
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <a href="#ecosystem" className="hover:text-[#FECD08] transition-colors">Ecosystem</a>
            <a href="#telemetry" className="hover:text-[#FECD08] transition-colors">Telemetry Engine</a>
            <a href="#hardware" className="hover:text-[#FECD08] transition-colors">Hardware</a>
            <a href="#specs" className="hover:text-[#FECD08] transition-colors">Specs</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-lg bg-[#FECD08] hover:bg-[#FECD08]/90 text-[#212121] font-rajdhani font-bold text-base uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#FECD08]/20 active:scale-95 cursor-pointer">
              Configure Gear
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Info */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#FECD08]/30 text-white text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FECD08] animate-ping" />
              <span className="text-[#FECD08]">Next-Gen Telemetry & HUD</span>
            </div>

            <h1 className="font-rajdhani font-bold text-5xl sm:text-7xl leading-[0.95] tracking-tight uppercase text-white">
              The Leader In <br />
              <span className="text-[#FECD08]">Integrated</span> <br />
              Riding Tech
            </h1>

            <p className="font-sora text-base sm:text-lg text-white/75 max-w-xl leading-relaxed pt-2">
              LBC MOTO unites real-time biometrics, high-frequency bike sensor telemetry, and ultra-crisp augmented reality optics for riders who demand uncompromised performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="px-7 py-3.5 rounded-xl bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] font-rajdhani font-bold text-lg uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#FECD08]/25 transition-all duration-200 cursor-pointer">
                <span>Explore Ecosystem</span>
                <ChevronRight className="w-5 h-5 text-[#212121]" />
              </button>

              <button className="px-7 py-3.5 rounded-xl border border-white/20 hover:border-[#FECD08] bg-[#181818]/60 hover:text-[#FECD08] text-white font-rajdhani font-bold text-lg uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer">
                <span>Watch Launch Film</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="font-rajdhani font-bold text-3xl text-white block">0.8 ms</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">HUD Latency</span>
              </div>
              <div>
                <span className="font-rajdhani font-bold text-3xl text-[#FECD08] block">1000 Hz</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">IMU Sampling</span>
              </div>
              <div>
                <span className="font-rajdhani font-bold text-3xl text-white block">IP68</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Extreme Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live High-Tech Telemetry Cockpit Card */}
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
                    Live Telemetry Stream
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                    Online
                  </span>
                </div>
              </div>

              {/* Mode Selector */}
              <div className="mt-6 flex items-center justify-between bg-[#212121] p-1.5 rounded-xl border border-white/10">
                {['STREET', 'SPORT', 'TRACK'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      setActiveSpeedMode(mode)
                      if (mode === 'TRACK') setTelemetry({ speed: 168, leanAngle: 42, rpm: 10400, hudConnected: true })
                      if (mode === 'SPORT') setTelemetry({ speed: 124, leanAngle: 36, rpm: 8200, hudConnected: true })
                      if (mode === 'STREET') setTelemetry({ speed: 78, leanAngle: 22, rpm: 5600, hudConnected: true })
                    }}
                    className={`flex-1 py-1.5 text-xs font-rajdhani font-bold tracking-wider uppercase rounded-lg transition-all cursor-pointer ${
                      activeSpeedMode === mode
                        ? 'bg-[#FECD08] text-[#212121] shadow-md font-extrabold'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Big Gauges Display */}
              <div className="my-8 text-center bg-[#212121]/60 rounded-2xl p-6 border border-white/5 relative">
                <div className="text-xs uppercase tracking-widest text-white/40 font-rajdhani font-semibold">
                  Velocity
                </div>
                <div className="font-rajdhani font-bold text-7xl sm:text-8xl tracking-tighter text-white my-1">
                  {telemetry.speed}
                  <span className="text-xl sm:text-2xl font-rajdhani text-[#FECD08] tracking-normal ml-1">
                    KM/H
                  </span>
                </div>
                
                {/* RPM Bar Indicator */}
                <div className="w-full bg-[#181818] h-2.5 rounded-full overflow-hidden mt-3 border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 via-[#FECD08] to-red-500 transition-all duration-500 rounded-full"
                    style={{ width: `${(telemetry.rpm / 13000) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-white/40 mt-1">
                  <span>0 RPM</span>
                  <span className="text-[#FECD08] font-bold">{telemetry.rpm.toLocaleString()} RPM</span>
                  <span>13k REDLINE</span>
                </div>
              </div>

              {/* Secondary Telemetry Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#212121] border border-white/10">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-rajdhani uppercase tracking-wider mb-1">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#FECD08]" />
                    <span>Lean Angle</span>
                  </div>
                  <div className="font-rajdhani font-bold text-2xl text-white">
                    {telemetry.leanAngle}° <span className="text-xs text-[#FECD08] font-normal">MAX</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#212121] border border-white/10">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-rajdhani uppercase tracking-wider mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#FECD08]" />
                    <span>Brake Temp</span>
                  </div>
                  <div className="font-rajdhani font-bold text-2xl text-white">
                    480° <span className="text-xs text-white/50 font-normal">C</span>
                  </div>
                </div>
              </div>

              {/* Interactive test trigger */}
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

        {/* Feature Matrix Section */}
        <section id="ecosystem" className="mt-28">
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
      <footer className="border-t border-white/10 bg-[#181818] py-8 text-center text-xs text-white/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-rajdhani font-bold text-lg text-white">LBC MOTO</span>
            <span className="text-white/30">•</span>
            <span className="text-[#FECD08] font-medium">The Leader in Integrated Riding Tech</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} LBC MOTO Inc. All rights reserved. Built with Rajdhani & Sora.
          </div>
        </div>
      </footer>
    </div>
  )
}
