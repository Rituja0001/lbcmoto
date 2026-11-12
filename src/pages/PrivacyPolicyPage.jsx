import { useState } from 'react'
import {
  Compass,
  ChevronRight,
  ShieldCheck,
  Lock,
  Smartphone,
  MapPin,
  MessageSquare,
  Activity,
  Bell,
  Trash2,
  Mail,
  FileText,
  RotateCcw,
  AlertCircle,
  CheckCircle2
} from 'lucide-react'
import Footer from '../components/Footer'
import heroBg from '../assets/images/hero-banner.webp'

export default function PrivacyPolicyPage({
  onNavigateHome,
  onNavigateTerms,
  onNavigateRefund
}) {
  return (
    <div className="w-full min-h-screen bg-[#07090D] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] pt-16 sm:pt-20">
      
      {/* =========================================================================
          HERO BANNER (COMPACT CINEMATIC THEME)
         ========================================================================= */}
      <section className="relative w-full min-h-[260px] sm:min-h-[300px] flex items-center bg-[#050505] overflow-hidden border-b border-white/10">
        
        {/* Cinematic Background Mountain Road */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt="LBC Moto Road"
            className="w-full h-full object-cover object-center scale-100 opacity-75 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/95 via-[#07090D]/65 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-black/30" />
        </div>

        {/* Golden Radial Glow */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FECD08]/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10">
          
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs font-rajdhani font-bold tracking-wider uppercase text-zinc-400 mb-3">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#FECD08] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5 text-[#FECD08]" />
              <span>HOME</span>
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-zinc-400">LEGAL COMPLIANCE</span>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-[#FECD08]">PRIVACY POLICY</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight mb-3 font-rajdhani text-white">
              PRIVACY <span className="text-[#FECD08]">POLICY</span>
            </h1>

            <p className="font-sora text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Official data privacy statement for LBC MOTO (<span className="text-white font-medium">www.lbcmoto.com</span>) and our dedicated motorcycle companion technologies.
            </p>
          </div>

        </div>

        {/* Bottom Line Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FECD08] via-[#FECD08]/40 to-transparent z-20" />
      </section>

      {/* =========================================================================
          MAIN PRIVACY POLICY CONTENT
         ========================================================================= */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">

          {/* Section 1: Website Privacy Policy */}
          <div className="rounded-2xl bg-[#10141D] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
            
            <div className="border-b border-white/10 pb-5">
              <span className="text-xs font-rajdhani font-black text-[#FECD08] tracking-widest uppercase">
                PART 1: WEBSITE DATA HANDLING
              </span>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase mt-1">
                LBC MOTO (www.lbcmoto.com) Privacy Policy
              </h2>
            </div>

            {/* Information We Collect */}
            <div>
              <h3 className="font-rajdhani font-bold text-lg text-[#FECD08] uppercase tracking-wide mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FECD08]" />
                <span>Information We Collect</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
                We may collect information directly from you, automatically through your use of our Site, and from third parties. We may combine all of information we collect about you from these various sources.
              </p>
            </div>

            {/* Information We Collect Directly From You */}
            <div className="border-t border-white/5 pt-5">
              <h3 className="font-rajdhani font-bold text-lg text-white uppercase tracking-wide mb-2">
                Information We Collect Directly From You
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
                Depending on how you use our Site, you may provide us with certain information that can identify you as an individual, such as your name, email address, phone number, credit or debit card information and shipping or billing address (collectively, <strong className="text-white">"Personal information"</strong>). We will also collect any other information that you choose to provide to us through our Site (e.g. contents of messages you send to us through our site).
              </p>
            </div>

            {/* Content That You Provide */}
            <div className="border-t border-white/5 pt-5">
              <h3 className="font-rajdhani font-bold text-lg text-white uppercase tracking-wide mb-2">
                Content That You Provide
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
                You may upload comments, reviews, graphics, photos or other materials to the Site (<strong className="text-white">"Content"</strong>). If you post Content on our Site, the Content (e.g., t-shirt designs or photos submitted as part of a contest), as well as other information (e.g. user name or profile picture), may be available to all visitors to our Site, and we cannot prevent such Content or information from being used in a manner that may violate this Policy, our User Agreement, the law, or your personal privacy.
              </p>
            </div>

            {/* Information Automatically Collected */}
            <div className="border-t border-white/5 pt-5">
              <h3 className="font-rajdhani font-bold text-lg text-white uppercase tracking-wide mb-2">
                Information We Collect Automatically Through Your Use of Our Site
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora">
                We may automatically collect information about your use of our Site and your orders, including but not limited to your Internet protocol (<strong className="text-white">"IP"</strong>) address; the type of web browser you are using; the website that led you to our Site; the website you go after leaving our Site; the pages you view on our Site; the dates and times you access our Site; and information about any orders you place, such as your order identification number, items ordered and the cost of your order.
              </p>
            </div>

          </div>

          {/* Section 2: SOS Button & Rider Safety Application */}
          <div className="rounded-2xl bg-[#10141D] border border-[#FECD08]/30 p-6 sm:p-8 lg:p-10 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FECD08]/5 rounded-bl-full pointer-events-none" />

            <div className="border-b border-white/10 pb-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FECD08]/10 text-[#FECD08] text-[10px] font-rajdhani font-black uppercase tracking-wider mb-2">
                <Smartphone className="w-3.5 h-3.5" />
                <span>LAST UPDATED: AUG 2026</span>
              </div>
              <h2 className="font-rajdhani font-black text-2xl sm:text-3xl text-white uppercase mt-1">
                Privacy Policy for SOS Button App
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-sora">
                LBC MOTO ("we," "us," or "our") built the SOS Button app as a Commercial app. This SERVICE is provided by LBC MOTO and is intended for use as is. This page informs visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service.
              </p>
            </div>

            {/* 1. Information Collection and Use */}
            <div>
              <h3 className="font-rajdhani font-bold text-lg text-[#FECD08] uppercase tracking-wide mb-2">
                1. Information Collection and Use
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sora mb-4">
                We do not collect, log, store, or share any personal information. All processes and data generated by your use of this app remain strictly on your local device. To provide emergency features, the app requires specific permissions:
              </p>

              {/* Permissions Breakdown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* GPS */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                  <div className="flex items-center gap-2 text-white font-rajdhani font-bold text-sm uppercase mb-2">
                    <MapPin className="w-4 h-4 text-[#FECD08]" />
                    <span>Location Data (GPS)</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#FECD08] mb-2 break-all">
                    ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION, ACCESS_BACKGROUND_LOCATION
                  </div>
                  <p className="text-xs text-zinc-300 font-sora leading-relaxed mb-2">
                    <strong className="text-white">Purpose:</strong> To determine your coordinates when an SOS is triggered so they can be included in the emergency SMS sent to your chosen contacts.
                  </p>
                  <p className="text-xs text-zinc-400 font-sora leading-relaxed">
                    <strong className="text-zinc-200">Data Handling:</strong> Your location is never uploaded to our servers. It is only sent via SMS to contacts you have selected.
                  </p>
                </div>

                {/* SMS & Contacts */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                  <div className="flex items-center gap-2 text-white font-rajdhani font-bold text-sm uppercase mb-2">
                    <MessageSquare className="w-4 h-4 text-[#FECD08]" />
                    <span>SMS & Contacts</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#FECD08] mb-2 break-all">
                    SEND_SMS, RECEIVE_SMS, READ_SMS, READ_CONTACTS
                  </div>
                  <p className="text-xs text-zinc-300 font-sora leading-relaxed mb-2">
                    <strong className="text-white">Purpose:</strong> To send emergency alerts to contacts and allow quick phonebook selection. Incoming SMS alert detects SOS triggers for high-priority popups.
                  </p>
                  <p className="text-xs text-zinc-400 font-sora leading-relaxed">
                    <strong className="text-zinc-200">Data Handling:</strong> We do not read private messages or contact lists for any other purpose.
                  </p>
                </div>

                {/* Accelerometer */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                  <div className="flex items-center gap-2 text-white font-rajdhani font-bold text-sm uppercase mb-2">
                    <Activity className="w-4 h-4 text-[#FECD08]" />
                    <span>Sensors (Accelerometer)</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#FECD08] mb-2">
                    HIGH_SAMPLING_RATE_SENSORS
                  </div>
                  <p className="text-xs text-zinc-300 font-sora leading-relaxed">
                    <strong className="text-white">Purpose:</strong> Used for the "AI Crash Detection" feature to detect sudden G-force changes indicating a potential accident. Sensor data is processed in real-time on-device and is never stored or transmitted.
                  </p>
                </div>

                {/* System & Alerts */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                  <div className="flex items-center gap-2 text-white font-rajdhani font-bold text-sm uppercase mb-2">
                    <Bell className="w-4 h-4 text-[#FECD08]" />
                    <span>System & Alerts</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#FECD08] mb-2">
                    SYSTEM_ALERT_WINDOW, USE_FULL_SCREEN_INTENT
                  </div>
                  <p className="text-xs text-zinc-300 font-sora leading-relaxed">
                    <strong className="text-white">Purpose:</strong> To ensure the SOS alert and countdown screens can appear immediately, even over the lock screen, during a riding emergency.
                  </p>
                </div>

              </div>
            </div>

            {/* Third-Party Services */}
            <div className="border-t border-white/5 pt-5">
              <h3 className="font-rajdhani font-bold text-base text-white uppercase tracking-wide mb-1.5">
                Third-Party Services
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sora leading-relaxed">
                The app uses third-party services that may collect information used to identify you:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-zinc-400 font-sora list-disc list-inside">
                <li>Google Play Services</li>
                <li>Google Play Billing (for Pro features)</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="border-t border-white/5 pt-5">
              <h3 className="font-rajdhani font-bold text-base text-white uppercase tracking-wide mb-1.5">
                Data Security
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sora leading-relaxed">
                We value your trust in providing us your information. Since we do not collect any personal data on our servers, there is no personal data at risk of a breach from our side. Your emergency contacts and settings are stored locally on your device's private storage.
              </p>
            </div>

            {/* Changes To This Privacy Policy */}
            <div className="border-t border-white/5 pt-5">
              <h3 className="font-rajdhani font-bold text-base text-white uppercase tracking-wide mb-1.5">
                Changes to This Privacy Policy
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sora leading-relaxed">
                We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </div>

            {/* Data Delete & Contact */}
            <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row gap-4 items-start justify-between bg-black/40 p-4 rounded-xl border border-white/10">
              <div>
                <div className="flex items-center gap-2 text-[#FECD08] font-rajdhani font-bold text-sm uppercase">
                  <Trash2 className="w-4 h-4" />
                  <span>DATA DELETE REQUESTS</span>
                </div>
                <p className="text-xs text-zinc-300 font-sora mt-1">
                  <strong className="text-white">Do you provide a way for users to request data deletion?</strong><br />
                  <span className="text-zinc-400">Yes. Since all data is local, deleting the app or clearing app storage instantly deletes all data.</span>
                </p>
              </div>

              <div className="shrink-0">
                <span className="text-[11px] font-rajdhani font-bold text-zinc-400 uppercase block">App Inquiries</span>
                <a
                  href="mailto:sosbutton@lbcmoto.com"
                  className="text-xs font-sora font-semibold text-[#FECD08] hover:underline"
                >
                  sosbutton@lbcmoto.com
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Global Brand Footer */}
      <Footer />

    </div>
  )
}
