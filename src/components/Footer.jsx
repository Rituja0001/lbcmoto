import { PhoneCall, Mail, MapPin, ArrowRight } from 'lucide-react'
import logoImg from '../assets/images/lbcmoto-logo.png'

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] border-t border-white/10 text-white/70 font-sora text-xs select-none">
      <div className="w-full px-4 sm:px-8 xl:px-12 2xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2">
              <img src={logoImg} alt="LBC MOTO" className="h-9 w-auto object-contain" />
            </a>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              The Leader in Integrated Riding Tech. Pioneering augmented optics, all-weather motorcycle electronics, and telemetry built for extreme overland touring.
            </p>
            <div className="font-script text-2xl text-white/90">
              Live by Compass, Not by Time.
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-rajdhani font-bold text-sm tracking-wider uppercase text-[#FECD08] mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li><a href="/category/auxiliary-lights" className="hover:text-white transition-colors">Auxiliary Lights / Fog Lights</a></li>
              <li><a href="/category/bags-covers" className="hover:text-white transition-colors">Motorcycle Bags & Covers</a></li>
              <li><a href="/category/charging-accessories" className="hover:text-white transition-colors">Charging Accessories</a></li>
              <li><a href="/category/all-spares" className="hover:text-white transition-colors">Motorcycle Spares</a></li>
              <li><a href="/category/navigation" className="hover:text-white transition-colors">Navigation & Radar</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rajdhani font-bold text-sm tracking-wider uppercase text-[#FECD08] mb-4">
              Rider Support
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li><a href="/track-order" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="/warranty" className="hover:text-white transition-colors">2-Year Warranty</a></li>
              <li><a href="/shipping-returns" className="hover:text-white transition-colors">Express Shipping</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">Riding Tech FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Dispatch & Newsletter */}
          <div>
            <h4 className="font-rajdhani font-bold text-sm tracking-wider uppercase text-[#FECD08] mb-4">
              Rider Dispatch
            </h4>
            <p className="text-white/50 text-xs mb-3 leading-relaxed">
              Subscribe for firmware updates, expedition films, and priority access to limited batches.
            </p>
            <div className="flex items-center rounded-xl bg-white/5 border border-white/10 p-1 focus-within:border-[#FECD08] transition-colors">
              <input
                type="email"
                placeholder="Enter rider email"
                className="bg-transparent px-3 py-1.5 text-xs text-white placeholder-white/40 focus:outline-none w-full font-sora"
              />
              <button
                aria-label="Subscribe"
                className="px-3 py-1.5 rounded-lg bg-[#FECD08] hover:bg-[#e5b807] text-[#212121] transition-colors font-bold shrink-0 cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {new Date().getFullYear()} LBC MOTO Inc. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-[#FECD08] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#FECD08] transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#compliance" className="hover:text-[#FECD08] transition-colors">ECE 22.06 / IP68 Certified</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

