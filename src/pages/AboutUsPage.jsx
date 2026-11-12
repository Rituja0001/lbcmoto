import { useState } from 'react'
import {
  Compass,
  ChevronRight,
  ShieldCheck,
  Truck,
  Award,
  Users,
  Cpu,
  Navigation,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  MapPin,
  Sparkles,
  PhoneCall,
  Flame,
  Radio,
  Tv
} from 'lucide-react'
import Footer from '../components/Footer'
import BrandScrollerSection from '../components/BrandScrollerSection'
import heroBg from '../assets/images/hero-banner.webp'
import logoImg from '../assets/images/lbcmoto-logo.png'

export default function AboutUsPage({
  onNavigateHome,
  onNavigateCollection,
  onNavigateCategories,
  onNavigateContact
}) {
  const [openFaqs, setOpenFaqs] = useState({})

  const toggleFaq = (idx) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }))
  }

  const milestones = [
    { number: '50K+', label: 'Happy Riders Across India' },
    { number: '1,200+', label: 'Cockpit Units & Gear Shipped' },
    { number: '28+', label: 'States & UTs Delivered' },
    { number: '100%', label: 'Genuine Brand Equipment' }
  ]

  const pillars = [
    {
      icon: Cpu,
      title: 'PREMIUM PRECISION',
      desc: 'Military-grade IP67/IP68 waterproof screens, 1000-nit sunlight readability & high-temp vibration damping.'
    },
    {
      icon: ShieldCheck,
      title: 'TRUST & AUTHENTICITY',
      desc: '100% genuine authorized products with 1-Year official brand replacement warranty on all electronics.'
    },
    {
      icon: Users,
      title: 'RIDER COMMUNITY',
      desc: 'Founded and run by passionate riders. Direct technician video guidance and fitment advice from Bangalore.'
    },
    {
      icon: Navigation,
      title: 'ADVENTURE READY',
      desc: 'Plug-and-play bracket kits tested on tough Indian highways, Spiti gravel trails & monsoon downpours.'
    }
  ]

  const faqs = [
    {
      q: 'What is LBC Moto and what do you specialize in?',
      a: 'LBC Moto is an authorized motorcycle cockpit technology and rider equipment specialist based in Bangalore, India. We curate top-tier wireless CarPlay/Android Auto navigation screens, dual 4K dashcams, TPMS telemetry, and touring gear tailored for modern adventure and street motorcycles.'
    },
    {
      q: 'Are your smart screens compatible with all motorcycle models?',
      a: 'Yes! We carry universal plug-and-play kits with standard 1-inch RAM ball mounts and AMPS brackets compatible with 22mm (7/8"), 28mm (1-1/8"), and 32mm (1-1/4") handlebars. We also have dedicated BMW GS/RT cradle-locking kits that plug right into OEM factory mounts.'
    },
    {
      q: 'Do you offer warranty and after-sales service in India?',
      a: 'Every electronic unit purchased from LBC Moto includes a 1-Year Official Brand Replacement Warranty against manufacturing defects. If you ever need support, our Bangalore technician team handles claims and troubleshooting directly without overseas shipping delays.'
    },
    {
      q: 'Can I visit your office or test fit equipment on my motorcycle?',
      a: 'Yes, our Registered Office and Technical Experience Center is located at No 30, 3rd Main, 6th Cross, LBS Nagar, Bangalore, 560017. You are welcome to visit by prior WhatsApp appointment (+91-9113267548) for trial fittings and cockpit advice.'
    },
    {
      q: 'How fast do you ship across India?',
      a: 'All orders are dispatched within 24 business hours from our Bangalore warehouse using Bluedart Insured Air Express. Metro cities typically arrive in 2 to 3 days, while rest of India takes 3 to 5 business days with live tracking.'
    },
    {
      q: 'How do these screens connect to my smartphone and intercom?',
      a: 'Our smart displays feature dual Bluetooth 5.0 and 5GHz Wi-Fi. Your smartphone connects wirelessly to the screen for navigation and music, while your helmet intercom (Cardo, Sena, BluArmor) pairs directly for crystal-clear audio and voice commands.'
    },
    {
      q: 'Are LBC Moto navigation displays waterproof for monsoon & off-road riding?',
      a: 'Yes, all our motorcycle smart screens and dashcams are IP67 and IP68 certified waterproof and dustproof. They operate seamlessly in torrential monsoon rains, gravel dust, and extreme temperatures ranging from -20°C to +70°C with glove-friendly capacitive touch.'
    },
    {
      q: 'Will installing a navigation screen or dashcam void my motorcycle electrical warranty?',
      a: 'No. Our systems use ACC ignition-switched power wires or direct 12V harness leads with inline fuses, preventing any wire cutting or splicing. On bikes with 12V DIN sockets or USB ports, you can even power the screens using plug-and-play USB cables without touching bike wiring.'
    },
    {
      q: 'What camera resolution and storage do your motorcycle dashcam series support?',
      a: 'Our dashcam systems (like B3 Elite and M3 Pro series) feature dual front and rear Sony STARVIS sensors recording in 4K/2K resolution at 30/60fps with HDR night vision. They support micro-SD cards up to 256GB with continuous loop recording and G-sensor crash file locking.'
    },
    {
      q: 'How do TPMS (Tire Pressure Monitoring System) sensors work on these units?',
      a: 'Wireless external valve-cap sensors screw directly onto your front and rear tire valve stems. They broadcast live tire pressure (PSI/BAR) and temperature data in real-time to the screen display, alerting you instantly of sudden punctures or low pressure.'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* =========================================================================
          1. COMPACT HERO BANNER (REDUCED BY 40% FOR SLEEK COCKPIT LOOK)
         ========================================================================= */}
      <section className="relative w-full min-h-[380px] lg:min-h-[440px] flex items-center bg-[#050505] overflow-hidden border-b border-white/10">
        
        {/* Cinematic Background Mountain Road & Riders Overlay (Clearly Visible) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="LBC Moto Himalayan Riders"
            className="w-full h-full object-cover object-center scale-100 opacity-85 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/90 via-[#07090D]/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-black/25" />
        </div>

        {/* Ambient Golden Radial Glow */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#FECD08]/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10 lg:py-12">
          
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs font-rajdhani font-bold tracking-wider uppercase text-zinc-400 mb-3 sm:mb-4">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#FECD08] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5 text-[#FECD08]" />
              <span>HOME</span>
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-[#FECD08]">ABOUT US</span>
          </nav>

          <div className="max-w-3xl">
            {/* Giant MotoEarth-style Headline (Scaled ~40% cleaner) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-4 font-rajdhani">
              <span className="block text-white">ABOUT</span>
              <span className="block text-[#FECD08] drop-shadow-[0_10px_35px_rgba(254,205,8,0.35)]">
                LBC MOTO
              </span>
            </h1>

            {/* Left-Bordered Motto Callout */}
            <div className="border-l-3 sm:border-l-4 border-[#FECD08] pl-3.5 sm:pl-4 mb-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-rajdhani font-black text-white uppercase tracking-[0.16em] leading-snug">
                WE DON'T JUST SELL GEAR, <br className="hidden sm:block" />
                WE FUEL YOUR <span className="text-[#FECD08]">ADVENTURES.</span>
              </h3>
            </div>

            {/* Narrative Paragraph */}
            <p className="font-sora text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl mb-6 font-normal">
              LBC Moto is more than a store — it’s a dedicated fraternity of riders, explorers, and technical navigators. Born from an uncompromising love for motorcycles and uncharted roads, we engineer and curate cockpit navigation displays, telemetry radar systems, and rider gear built to protect, perform, and empower every kilometer you conquer.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onNavigateCollection}
                className="py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl bg-[#FECD08] hover:bg-white text-slate-950 font-rajdhani font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-lg shadow-[#FECD08]/20 hover:scale-[1.02]"
              >
                <span>EXPLORE COCKPIT SCREENS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateContact}
                className="py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#FECD08] font-rajdhani font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>CONNECT WITH SPECIALISTS</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Golden Line Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FECD08] via-[#FECD08]/40 to-transparent z-20" />
      </section>

      {/* =========================================================================
          2. OFFICIAL & AUTHORISED MOVING BRANDS MARQUEE (NO HEADER)
         ========================================================================= */}
      <BrandScrollerSection showHeader={false} py="py-6 sm:py-8" />

      {/* =========================================================================
          3. OUR STORY & 3-PHOTO SIGNATURE SKEW MONTAGE (MOTOEARTH ZR SECTION)
         ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#07090D] overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Skew 3-Column Photography Montage (MotoEarth Signature Design) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 h-[380px] sm:h-[480px] -skew-y-3 sm:-skew-y-6 origin-left transition-transform duration-500 hover:skew-y-0">
                
                {/* Photo 1: Spiti Mountain Trail */}
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#10141D]">
                  <img
                    src="/images/community/spiti-valley-hd.webp"
                    alt="Spiti Valley Expedition"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = heroBg
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] font-rajdhani font-bold text-white uppercase tracking-wider">
                    High Altitude Expedition
                  </div>
                </div>

                {/* Photo 2: Cockpit Setup (Shifted -mt-6 for staggering) */}
                <div className="group relative rounded-2xl overflow-hidden border border-[#FECD08]/30 shadow-2xl bg-[#10141D] -mt-6 sm:-mt-10">
                  <img
                    src="/images/community/hd-setup.webp"
                    alt="Cockpit Navigation Setup"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = heroBg
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-rajdhani font-black px-2 py-0.5 rounded bg-[#FECD08] text-black uppercase">
                      COCKPIT
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] font-rajdhani font-bold text-white uppercase tracking-wider">
                    Garmin & Dashcam Rig
                  </div>
                </div>

                {/* Photo 3: Highway Curves */}
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#10141D]">
                  <img
                    src="/images/community/hd-curves.webp"
                    alt="Highway Canyon Riding"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = heroBg
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-[10px] font-rajdhani font-bold text-white uppercase tracking-wider">
                    Endurance Tested
                  </div>
                </div>

              </div>
            </div>

            {/* Story Content & 4 Core Pillars */}
            <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-[0.3em] uppercase mb-2">
                OUR STORY & ROOTS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase mb-6 leading-[1.05] tracking-tight font-rajdhani text-white">
                BUILT BY RIDERS, <br />
                <span className="text-[#FECD08]">FOR RIDERS.</span>
              </h2>
              <p className="font-sora text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                It all started in Bangalore with a simple belief – that every Indian motorcyclist deserves authentic, high-precision navigation screens, telemetry, and riding gear without the headaches of grey imports or untrusted sellers. From everyday urban commutes to grueling trans-Himalayan journeys, we source, assemble, and test products that go the distance, just like you do.
              </p>

              {/* 4 Pillars Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pillars.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] flex items-center justify-center shrink-0 group-hover:bg-[#FECD08] group-hover:text-black transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-rajdhani font-black text-sm uppercase text-white tracking-wider group-hover:text-[#FECD08] transition-colors">
                          {item.title}
                        </h4>
                        <p className="font-sora text-xs text-zinc-400 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. MILESTONES / METRICS COUNTER BAR (MOTOEARTH COUNTERS)
         ========================================================================= */}
      <section className="w-full bg-[#10141D] border-y border-white/10 py-12 lg:py-16">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="text-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="font-rajdhani font-black text-4xl sm:text-5xl lg:text-6xl text-[#FECD08] mb-1 group-hover:scale-105 transition-transform duration-300 tracking-tight">
                  {m.number}
                </div>
                <div className="font-sora text-xs sm:text-sm text-zinc-300 uppercase tracking-widest font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR PHILOSOPHY & TECHNICAL STANDARDS (SPLIT CARDS)
         ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#07090D]">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
          
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
              STANDARDS WE NEVER COMPROMISE
            </span>
            <h2 className="font-rajdhani font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mt-1">
              THE LBC MOTO PHILOSOPHY
            </h2>
            <p className="font-sora text-xs sm:text-sm text-zinc-400 mt-2">
              Every bracket, circuit, and screen in our catalog undergoes rigorous road testing under real Indian riding conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Philosophy Card 1 */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#10141D] border border-white/10 relative overflow-hidden group hover:border-[#FECD08]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECD08]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FECD08]/10 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] flex items-center justify-center mb-6">
                <Tv className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                COCKPIT COMFORT & SAFETY
              </span>
              <h3 className="font-rajdhani font-black text-2xl uppercase text-white mt-1 mb-3">
                INTELLIGENT HEADS-UP NAVIGATION
              </h3>
              <p className="font-sora text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                Motorcycle cockpits require split-second clarity. Our smart screens bring turn-by-turn navigation directly into your natural line of sight, keeping your phone safe in your pocket from vibration sensor damage, overheating, or highway rain.
              </p>
              <ul className="space-y-2 text-xs font-sora text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FECD08] shrink-0" />
                  <span>1000-nit high-brightness IPS displays visible in direct midday sunlight</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FECD08] shrink-0" />
                  <span>Glove-friendly responsive capacitive touch with anti-condensation coating</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FECD08] shrink-0" />
                  <span>Ignition-sensing auto power on & off with battery drain protection</span>
                </li>
              </ul>
            </div>

            {/* Philosophy Card 2 */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#10141D] border border-white/10 relative overflow-hidden group hover:border-[#FECD08]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FECD08]/5 rounded-bl-full pointer-events-none group-hover:bg-[#FECD08]/10 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] flex items-center justify-center mb-6">
                <Radio className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                PAN-INDIA RIDER COMMITMENT
              </span>
              <h3 className="font-rajdhani font-black text-2xl uppercase text-white mt-1 mb-3">
                AFTER-SALES THAT TRULY CARES
              </h3>
              <p className="font-sora text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                We believe that buying gear is the beginning of a relationship, not the end. When you ride with LBC Moto, you have direct access to Bangalore-based technical support, wiring harnesses, spare mounts, and prompt warranty resolutions.
              </p>
              <ul className="space-y-2 text-xs font-sora text-zinc-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FECD08] shrink-0" />
                  <span>WhatsApp video technician assistance during handlebar wiring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FECD08] shrink-0" />
                  <span>1-Year replacement warranty on all electronics without overseas shipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FECD08] shrink-0" />
                  <span>Physical Experience Center in Bangalore for trials and fitment testing</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. FREQUENTLY ASKED QUESTIONS GRID (MOTOEARTH eM SUPPORT CENTER)
         ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-[#050505] border-t border-white/10">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
          
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-[0.3em] uppercase">
              SUPPORT CENTER
            </span>
            <h2 className="font-rajdhani font-black text-3xl sm:text-5xl uppercase tracking-tight text-white mt-1">
              FREQUENTLY ASKED <span className="text-[#FECD08]">QUESTIONS</span>
            </h2>
            <p className="font-sora text-xs sm:text-sm text-zinc-400 mt-2">
              Everything you need to know about LBC Moto, equipment warranties, and compatibility.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = !!openFaqs[idx]
              return (
                <div
                  key={idx}
                  className={`rounded-2xl bg-[#10141D] border transition-all duration-300 overflow-hidden shadow-lg ${
                    isOpen
                      ? 'border-[#FECD08]/60 bg-[#121622] shadow-[#FECD08]/5'
                      : 'border-white/10 hover:border-white/25 hover:bg-[#121722]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-xs font-rajdhani font-black text-[#FECD08] mt-0.5 px-2 py-0.5 rounded bg-[#FECD08]/10 border border-[#FECD08]/30 shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="font-rajdhani font-bold text-sm sm:text-base uppercase text-white hover:text-[#FECD08] transition-colors leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#FECD08] text-slate-950 rotate-180'
                          : 'bg-white/5 border border-white/10 text-[#FECD08]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-sora text-zinc-300 leading-relaxed border-t border-white/5 mt-1">
                      <p className="pt-2">{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. BOTTOM CALL TO ADVENTURE BANNER
         ========================================================================= */}
      <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#07090D] via-[#10141D] to-[#07090D] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 text-center relative z-10">
          <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
            JOIN THE SQUAD
          </span>
          <h2 className="font-rajdhani font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mt-2 mb-4">
            READY TO ELEVATE YOUR COCKPIT?
          </h2>
          <p className="font-sora text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mb-8 font-normal">
            Equip your motorcycle with state-of-the-art navigation, dual cameras, and road-tested touring gear. 
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onNavigateCollection}
              className="py-4 px-8 rounded-xl bg-[#FECD08] hover:bg-white text-slate-950 font-rajdhani font-black text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-xl shadow-[#FECD08]/20 hover:scale-105"
            >
              <span>EXPLORE NAVIGATION CATALOG</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateCategories}
              className="py-4 px-8 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#FECD08] font-rajdhani font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer"
            >
              <span>ALL PRODUCT CATEGORIES</span>
            </button>
          </div>
        </div>
      </section>

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
