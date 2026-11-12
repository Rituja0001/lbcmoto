import { useState } from 'react'
import {
  Compass,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react'
import Footer from '../components/Footer'
import heroBg from '../assets/images/hero-banner.webp'

export default function ContactUsPage({ onNavigateHome, onNavigateCategories }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bikeModel: '',
    subject: 'GPS Navigation & Cockpit Fitment',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [openFaqs, setOpenFaqs] = useState({})

  const toggleFaq = (idx) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  const faqs = [
    {
      q: 'How do I check if an LBC Moto navigation screen fits my motorcycle handlebar?',
      a: 'All our smart screens (BMW Series, Carpuride, Aoocci, Garmin) include standard 1-inch RAM ball mounts and AMPS bracket hardware compatible with 22mm (7/8"), 28mm (1-1/8"), and 32mm (1-1/4") handlebars. For BMW GS/RT models with existing nav cradles, our BMW-specific plug-and-play kits latch directly without extra wiring.'
    },
    {
      q: 'Do you offer installation guidance or mechanic support?',
      a: 'Yes! We provide step-by-step video installation guides, color-coded wiring harnesses, and direct WhatsApp video-call technical support with our Bangalore technician team (+91-9113267548).'
    },
    {
      q: 'What is the official warranty and return policy on electronics?',
      a: 'All navigation units, intercoms, and dashcams carry a 1-Year Official Brand Replacement Warranty against manufacturing defects. We also provide a 7-day hassle-free replacement window upon delivery inspection.'
    },
    {
      q: 'How quickly are orders dispatched across India?',
      a: 'Orders are dispatched within 24 business hours from our Bangalore warehouse via Bluedart Insured Air Express. Metro deliveries take 2 to 3 days, while rest of India takes 3 to 5 business days.'
    },
    {
      q: 'Are these navigation units waterproof for monsoon and off-road riding?',
      a: 'Yes, all our motorcycle smart screens and dashcams are IP67 and IP68 certified waterproof and dustproof. They operate seamlessly in heavy monsoon rains, gravel dust, and extreme temperatures ranging from -20°C to +70°C with glove-friendly capacitive touchscreens.'
    },
    {
      q: 'Do the screens support wireless Apple CarPlay and Android Auto simultaneously?',
      a: 'Absolutely. Units feature dual 5GHz Wi-Fi and Bluetooth 5.0 chips. You connect your smartphone wirelessly once, and it automatically connects and mirrors Google Maps, Apple Maps, Spotify, and call telemetry whenever your bike ignition turns on.'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* =========================================================================
          HERO BANNER (MATCHING CATEGORIES & HOME CINEMATIC THEME)
         ========================================================================= */}
      <section className="relative w-full overflow-hidden border-b border-white/10 py-6 sm:py-8 lg:py-10 bg-black">
        {/* Cinematic Background Mountain Road Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="Motorcycle Road Background"
            className="w-full h-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-black/45" />
        </div>

        {/* Ambient Golden Radial Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FECD08]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
          
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs font-rajdhani font-bold tracking-wider uppercase text-zinc-300 mb-2 sm:mb-3">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#FECD08] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5 text-[#FECD08]" />
              <span>HOME</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-[#FECD08]">CONTACT US</span>
          </nav>

          {/* Header Title & Tagline */}
          <div className="max-w-2xl">
            <h1 className="font-rajdhani font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[0.95] drop-shadow-md">
              CONNECT WITH <br className="hidden sm:inline" />
              <span className="text-[#FECD08]">LBC MOTO SQUAD</span>
            </h1>

            <p className="font-sora text-xs sm:text-sm text-zinc-200 mt-2.5 leading-relaxed drop-shadow">
              Need fitment guidance on your bike, custom bracket mounting, order updates, or warranty service? Our Bangalore team of active riders is here to assist.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT CONTENT: DETAILS CARDS (LEFT) + INQUIRY FORM (RIGHT)
         ========================================================================= */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 lg:py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* -----------------------------------------------------------------------
              LEFT COLUMN: OFFICIAL CONTACT & REGISTERED OFFICE INFO (5 Cols)
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            <div className="mb-2">
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                DIRECT CHANNELS
              </span>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mt-1">
                GET IN TOUCH
              </h2>
            </div>

            {/* Card 1: Email Us! (Exact info from client image) */}
            <a
              href="mailto:support@lbcmotoshop.in"
              className="group p-5 rounded-2xl bg-[#10141D] border border-white/10 hover:border-[#FECD08] transition-all duration-300 shadow-xl flex items-start gap-4 cursor-pointer hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-rajdhani font-black text-base uppercase text-white tracking-wide group-hover:text-[#FECD08] transition-colors">
                    Email us!
                  </h3>
                  <span className="text-[10px] font-rajdhani font-bold px-2 py-0.5 rounded bg-white/5 text-[#FECD08] uppercase">
                    24/7 TICKET
                  </span>
                </div>
                <div className="font-sora text-sm sm:text-base font-semibold text-[#FECD08] mt-1 break-all">
                  support@lbcmotoshop.in
                </div>
                <p className="font-sora text-xs text-zinc-400 mt-1 leading-relaxed">
                  General inquiries, order status, warranty claims and corporate partnerships.
                </p>
              </div>
            </a>

            {/* Card 2: Contact / WhatsApp! (Exact info from client image) */}
            <a
              href="https://wa.me/919113267548"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#10141D] border border-white/10 hover:border-[#FECD08] transition-all duration-300 shadow-xl flex items-start gap-4 cursor-pointer hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-rajdhani font-black text-base uppercase text-white tracking-wide group-hover:text-[#FECD08] transition-colors">
                    Contact / WhatsApp!
                  </h3>
                  <span className="text-[10px] font-rajdhani font-bold px-2 py-0.5 rounded bg-white/5 text-[#FECD08] uppercase">
                    INSTANT CHAT
                  </span>
                </div>
                <div className="font-rajdhani font-black text-lg sm:text-xl text-white mt-1 group-hover:text-[#FECD08] transition-colors">
                  +91-9113267548
                </div>
                <p className="font-sora text-xs text-zinc-400 mt-1 leading-relaxed">
                  Fast WhatsApp consultation for motorcycle fitment, bracket selection & dispatch updates.
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-sora text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-[#FECD08]" />
                  <span>Mon – Sat: 10:00 AM – 7:00 PM IST</span>
                </div>
              </div>
            </a>

            {/* Card 3: Registered Office! (Exact info from client image) */}
            <div className="p-5 rounded-2xl bg-[#10141D] border border-white/10 shadow-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FECD08]/10 border border-[#FECD08]/30 text-[#FECD08] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-rajdhani font-black text-base uppercase text-white tracking-wide">
                    Registered Office!
                  </h3>
                  <span className="text-[10px] font-rajdhani font-bold px-2 py-0.5 rounded bg-white/5 text-zinc-400 uppercase">
                    BANGALORE HQ
                  </span>
                </div>
                <div className="font-sora text-xs sm:text-sm text-zinc-200 mt-1.5 leading-relaxed font-medium">
                  No 30, 3rd Main, 6th Cross, LBS Nagar, Bangalore, 560017, India
                </div>
                <p className="font-sora text-[11px] text-zinc-400 mt-2">
                  Technical Inspection & Experience Center. Prior appointment recommended for bike trial fittings.
                </p>
              </div>
            </div>

            {/* Highlights Strip */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <ShieldCheck className="w-4 h-4 text-[#FECD08] mx-auto mb-1" />
                <div className="font-rajdhani font-bold text-xs text-white uppercase">100% Genuine</div>
                <div className="text-[10px] text-zinc-400 font-sora">Authorized Store</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <Truck className="w-4 h-4 text-[#FECD08] mx-auto mb-1" />
                <div className="font-rajdhani font-bold text-xs text-white uppercase">Fast Shipping</div>
                <div className="text-[10px] text-zinc-400 font-sora">Pan-India Express</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <Headphones className="w-4 h-4 text-[#FECD08] mx-auto mb-1" />
                <div className="font-rajdhani font-bold text-xs text-white uppercase">Rider Support</div>
                <div className="text-[10px] text-zinc-400 font-sora">By Active Bikers</div>
              </div>
            </div>

          </div>

          {/* -----------------------------------------------------------------------
              RIGHT COLUMN: INTERACTIVE CONTACT FORM (7 Cols)
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7">
            
            <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 shadow-2xl">
              
              <div className="pb-5 border-b border-white/10 mb-6">
                <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                  DROP US A LINE
                </span>
                <h2 className="font-rajdhani font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mt-1">
                  SEND US A MESSAGE
                </h2>
                <p className="font-sora text-xs sm:text-sm text-zinc-400 mt-1">
                  Fill in your motorcycle details and inquiry. We will get back with tailored recommendations.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#FECD08]/15 border-2 border-[#FECD08] text-[#FECD08] flex items-center justify-center mb-4 shadow-xl">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="font-rajdhani font-black text-2xl uppercase text-white">
                    MESSAGE RECEIVED!
                  </h3>
                  <p className="font-sora text-xs sm:text-sm text-zinc-300 mt-2 max-w-md leading-relaxed">
                    Thank you <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <strong className="text-[#FECD08]">{formData.bikeModel || 'your motorcycle'}</strong> has been assigned to our cockpit specialist. We will respond within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        bikeModel: '',
                        subject: 'GPS Navigation & Cockpit Fitment',
                        message: ''
                      })
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-[#FECD08] text-white hover:text-black font-rajdhani font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Vikramaditya"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="rider@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        WhatsApp / Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                        Motorcycle Model & Year
                      </label>
                      <input
                        type="text"
                        name="bikeModel"
                        placeholder="e.g. BMW R 1250 GS (2023)"
                        value={formData.bikeModel}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                      Inquiry Topic / Category *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white focus:border-[#FECD08] outline-none font-sora cursor-pointer"
                    >
                      <option value="GPS Navigation & Cockpit Fitment" className="bg-[#10141D] text-white">
                        GPS Navigation & Cockpit Fitment (BMW, Garmin, Carpuride)
                      </option>
                      <option value="Audio & Mesh Intercoms" className="bg-[#10141D] text-white">
                        Audio & Helmet Mesh Intercoms (Cardo, ASMAX)
                      </option>
                      <option value="Auxiliary Lighting & Wiring" className="bg-[#10141D] text-white">
                        Auxiliary Fog Lights & Wiring Harness
                      </option>
                      <option value="Order Tracking & Dispatch" className="bg-[#10141D] text-white">
                        Order Tracking & Dispatch Updates
                      </option>
                      <option value="Warranty & Product Returns" className="bg-[#10141D] text-white">
                        Warranty Claims & Product Returns
                      </option>
                      <option value="Dealership & Bulk Tour Orders" className="bg-[#10141D] text-white">
                        Dealership, Workshop & Bulk Tour Orders
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-rajdhani font-bold text-zinc-300 uppercase tracking-wider block mb-1.5">
                      Your Message or Questions *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us what you are looking for or describe your motorcycle cockpit setup..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-zinc-500 focus:border-[#FECD08] outline-none font-sora transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#FECD08] hover:bg-white text-slate-950 font-rajdhani font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg shadow-[#FECD08]/20 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'SENDING INQUIRY...' : 'SEND INQUIRY TO SPECIALIST'}</span>
                  </button>

                  <p className="text-[11px] font-sora text-zinc-400 text-center pt-1">
                    We respect your privacy. No spam — only personalized technical support.
                  </p>

                </form>
              )}

            </div>

          </div>

        </div>

        {/* =========================================================================
            FREQUENTLY ASKED QUESTIONS (FAQ GRID - 6 ITEMS)
           ========================================================================= */}
        <section className="mt-16 sm:mt-24 border-t border-white/10 pt-10 sm:pt-14">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
              QUICK ANSWERS
            </span>
            <h2 className="font-rajdhani font-black text-2xl sm:text-4xl uppercase tracking-tight text-white mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-sora text-xs sm:text-sm text-zinc-400 mt-2">
              Common questions about fitment, shipping, wiring, warranties and device connectivity.
            </p>
          </div>

          {/* 2-Column Responsive Grid (Total 6 FAQs) */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = !!openFaqs[idx]
              return (
                <div
                  key={idx}
                  className={`rounded-2xl bg-[#10141D] border transition-all duration-300 overflow-hidden shadow-lg ${
                    isOpen
                      ? 'border-[#FECD08]/60 shadow-[#FECD08]/5 bg-[#121622]'
                      : 'border-white/10 hover:border-white/25 hover:bg-[#121722]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
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
                          : 'bg-white/5 border border-white/10 text-[#FECD08] hover:bg-white/10'
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
        </section>

      </main>

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
