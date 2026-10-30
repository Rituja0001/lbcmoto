import { useState, useEffect, useRef } from 'react'
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react'
import { navigationData } from '../data/navigationData'
import logoImg from '../assets/images/lbcmoto-logo.png'

// Toggle to show/hide sub navigation (mega menu & dropdowns)
const SHOW_SUB_NAV = false

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = (itemId) => {
    if (!SHOW_SUB_NAV) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(itemId)
  }

  const handleMouseLeave = () => {
    if (!SHOW_SUB_NAV) return
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  const activeCategoryData = navigationData.find((item) => item.id === activeDropdown)

  return (
    <>
      {/* Floating Transparent/Glass Navbar (Directly overlaid on Hero) */}
      <header
        ref={dropdownRef}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#181818]/95 backdrop-blur-md shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: LBC MOTO Logo with Emblem */}
            <a href="/" className="flex items-center shrink-0 group">
              <div className="flex items-center gap-2">
                <img
                  src={logoImg}
                  alt="LBC MOTO"
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    const fallback = e.target.nextElementSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="h-10 px-3 rounded-lg bg-[#FECD08] text-[#212121] items-center justify-center font-rajdhani font-black text-2xl tracking-tighter"
                >
                  LBC MOTO
                </div>
              </div>
            </a>

            {/* Center: Clean Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
              {navigationData.map((item) => {
                const hasSubs = SHOW_SUB_NAV && item.subcategories && item.subcategories.length > 0
                const isActive = activeDropdown === item.id

                return (
                  <div
                    key={item.id}
                    className="relative py-2"
                    onMouseEnter={() => (hasSubs ? handleMouseEnter(item.id) : handleMouseEnter(null))}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 font-rajdhani font-medium text-sm xl:text-[15px] tracking-wide transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'text-[#FECD08]'
                          : 'text-white/90 hover:text-[#FECD08]'
                      }`}
                    >
                      <span>{item.title}</span>
                      {hasSubs && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isActive ? 'rotate-180 text-[#FECD08]' : 'text-white/60'
                          }`}
                        />
                      )}
                    </a>
                  </div>
                )
              })}
            </nav>

            {/* Right: Capsule Search Bar + User + Cart Badge */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              
              {/* Capsule Search Bar (Exact match to reference) */}
              <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all">
                <Search className="w-4 h-4 text-white/70 shrink-0" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-white placeholder-white/50 focus:outline-none w-28 lg:w-36 font-sora"
                />
              </div>

              {/* User / Account Icon */}
              <a
                href="#account"
                aria-label="Account"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/90 hover:text-[#FECD08] transition-colors cursor-pointer"
              >
                <User className="w-5 h-5 stroke-[2]" />
              </a>

              {/* Shopping Cart with Orange/Yellow Badge (Count: 0) */}
              <a
                href="#cart"
                aria-label="Cart"
                className="relative w-9 h-9 rounded-full flex items-center justify-center text-white/90 hover:text-[#FECD08] transition-colors cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 stroke-[2]" />
                <span className="absolute top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#FECD08] text-[#212121] text-[10px] font-bold font-rajdhani flex items-center justify-center shadow">
                  {cartCount}
                </span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle Menu"
                className="lg:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#FECD08] transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            DESKTOP MEGA MENU DROPDOWN PANEL (HIDDEN WHEN SHOW_SUB_NAV IS FALSE)
           ========================================================================= */}
        {SHOW_SUB_NAV && activeDropdown && activeCategoryData && activeCategoryData.subcategories && (
          <div
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current)
            }}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 right-0 w-full bg-[#181818]/98 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] z-40 transition-all duration-200 animate-in fade-in slide-in-from-top-1"
          >
            <div className="w-full px-4 sm:px-8 xl:px-12 2xl:px-16 py-8">
              
              {/* Mega Menu Top Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FECD08]" />
                  <h3 className="font-rajdhani font-bold text-xl sm:text-2xl uppercase tracking-wider text-white">
                    {activeCategoryData.title}
                  </h3>
                  <span className="text-xs font-sora text-white/50 hidden sm:inline">
                    ({activeCategoryData.subcategories.length} Collections)
                  </span>
                </div>

                <a
                  href={activeCategoryData.viewAllHref || activeCategoryData.href}
                  className="font-rajdhani font-bold text-sm tracking-wider uppercase text-[#FECD08] hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>VIEW ALL</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mega Menu Grid of Cards */}
              <div
                className={`grid gap-5 ${
                  activeCategoryData.subcategories.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl'
                    : activeCategoryData.subcategories.length === 3
                    ? 'grid-cols-1 sm:grid-cols-3 max-w-6xl'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                }`}
              >
                {activeCategoryData.subcategories.map((sub, idx) => (
                  <a
                    key={idx}
                    href={sub.href}
                    className="group block rounded-2xl p-3.5 bg-[#222222] hover:bg-[#282828] transition-all duration-300 hover:shadow-xl hover:shadow-[#FECD08]/10 hover:-translate-y-1"
                  >
                    {/* Image Thumbnail Container */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-[#141414]">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                      {sub.badge && (
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#181818]/90 backdrop-blur-md text-[#FECD08] font-semibold shadow-sm">
                          {sub.badge}
                        </div>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h4 className="font-rajdhani font-bold text-base sm:text-lg text-white group-hover:text-[#FECD08] transition-colors leading-snug">
                        {sub.title}
                      </h4>
                      <p className="font-sora text-xs text-white/55 mt-1 line-clamp-2 leading-relaxed">
                        {sub.subtitle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-[#181818] flex flex-col z-10 overflow-hidden shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-5 flex items-center justify-between bg-[#141414]">
              <a href="/" className="flex items-center gap-2.5">
                <img
                  src={logoImg}
                  alt="LBC MOTO"
                  className="h-9 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <span className="font-rajdhani font-bold text-xl uppercase tracking-wider text-white">
                  LBC MOTO
                </span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navigationData.map((item) => {
                const hasSubs = SHOW_SUB_NAV && item.subcategories && item.subcategories.length > 0
                const isExpanded = mobileExpandedCat === item.id

                return (
                  <div key={item.id} className="py-1">
                    {hasSubs ? (
                      <div>
                        <button
                          onClick={() => setMobileExpandedCat(isExpanded ? null : item.id)}
                          className="w-full py-3 flex items-center justify-between text-left font-rajdhani font-bold text-lg uppercase tracking-wider text-white hover:text-[#FECD08] transition-colors"
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#FECD08] transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="pl-4 pb-3 space-y-2 border-l-2 border-[#FECD08] my-1">
                            {item.subcategories.map((sub, sIdx) => (
                              <a
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1.5 text-sm font-sora text-white/70 hover:text-[#FECD08] transition-colors"
                              >
                                <span className="font-medium text-white/90 block">
                                  {sub.title}
                                </span>
                                <span className="text-[11px] text-white/40 block">
                                  {sub.subtitle}
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 font-rajdhani font-bold text-lg uppercase tracking-wider text-white hover:text-[#FECD08] transition-colors"
                      >
                        {item.title}
                      </a>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="p-4 bg-[#141414] text-xs text-white/50 text-center font-sora">
              <span>LBC MOTO &copy; {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
