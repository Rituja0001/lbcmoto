import { useState } from 'react'
import { X, MessageSquare, ChevronLeft } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)

  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=919113267548&text=Hi+Sender%2C+Please+send+me+the+query'

  // Minimized tab docked to right screen edge
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        aria-label="Open WhatsApp chat tab"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-white text-slate-950 shadow-2xl border-y border-l border-slate-300 rounded-l-xl py-3.5 px-2 flex flex-col items-center gap-2 hover:bg-[#25D366] hover:text-white transition-all cursor-pointer group select-none"
      >
        <ChevronLeft className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
        <span className="font-rajdhani font-black text-xs sm:text-[13px] tracking-widest uppercase [writing-mode:vertical-lr]">
          WhatsApp
        </span>
        <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-white">
          <MessageSquare className="w-2.5 h-2.5" />
        </div>
      </button>
    )
  }

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 select-none animate-in fade-in slide-in-from-right duration-300"
    >
      <div className="relative flex flex-col bg-white text-slate-900 rounded-l-2xl shadow-[-4px_16px_35px_rgba(0,0,0,0.35)] border-y border-l border-slate-200/90 overflow-visible w-[88px] sm:w-[94px]">
        {/* Floating Mini Close Button on top-left of the badge */}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close WhatsApp badge"
          title="Close badge"
          className="absolute -top-2.5 -left-2.5 w-5 h-5 rounded-full bg-slate-900 hover:bg-red-600 text-white flex items-center justify-center shadow-lg border border-white/50 transition-all cursor-pointer z-20 group"
        >
          <X className="w-3 h-3 group-hover:scale-110 transition-transform" />
        </button>

        {/* WhatsApp Card - Flush to Right Edge (Mirror match to left Google/Insta widget) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors group/card rounded-l-2xl cursor-pointer"
        >
          {/* Authentic WhatsApp Green Icon */}
          <div className="relative w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white mb-1 shadow-sm group-hover/card:scale-110 transition-transform">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full"></span>
          </div>

          <span className="font-sora text-[11px] font-bold text-slate-800 leading-tight block">
            WhatsApp
          </span>

          <div className="font-rajdhani font-black text-2xl text-slate-900 leading-none mt-1">
            Chat
          </div>

          <span className="font-sora text-[10px] font-extrabold text-[#25D366] uppercase tracking-wider mt-0.5 block">
            Online
          </span>
        </a>
      </div>
    </aside>
  )
}
