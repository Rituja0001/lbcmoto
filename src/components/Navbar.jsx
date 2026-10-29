import { useState, useEffect, useRef } from 'react'
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  PhoneCall,
  Truck,
} from 'lucide-react'
import { navigationData } from '../data/navigationData'
import logoImg from '../assets/images/lbcmoto-logo.png'

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(2)
  const [wishlistCount, setWishlistCount] = useState(3)

  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  // Handle sticky scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(itemId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  const activeCategoryData = navigationData.find((item) => item.id === activeDropdown)

  return (
    <>
      {/* Top Utility / Announcement Bar (No harsh divider line) */}
      <div className="bg-[#121212] text-white/80 text-[11px] sm:text-xs py-2 px-4 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FECD08] animate-pulse" />
            <span className="font-sora font-medium text-white/90">
              The Leader in Integrated Riding Tech
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:inline text-[#FECD08] font-medium flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" /> Free Express Shipping Over ₹2,999
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-5 text-white/60 font-sora">
            <a
              href="#support"
              className="hover:text-[#FECD08] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3 h-3 text-[#FECD08]" />
              <span>Rider Support</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/80 font-mono text-[11px]">INR (₹)</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Lines removed for seamless dark aesthetic) */}
      <nav
        ref={dropdownRef}
        onMouseLeave={handleMouseLeave}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#181818]/98 backdrop-blur-md shadow-2xl'
            : 'bg-[#181818]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Logo */}
            <a href="/" className="flex items-center shrink-0 group mr-2 2xl:mr-4">
              <div className="relative h-12 flex items-center justify-center">
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

            {/* Desktop Navigation Links (Proper single-line whitespace-nowrap) */}
            <div className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 2xl:space-x-3 shrink-0">
              {navigationData.map((item) => {
                const hasSubs = item.subcategories && item.subcategories.length > 0
                const isActive = activeDropdown === item.id

                return (
                  <div
                    key={item.id}
                    className="relative py-7 shrink-0"
                    onMouseEnter={() => (hasSubs ? handleMouseEnter(item.id) : handleMouseEnter(null))}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 px-2 2xl:px-3 py-1.5 font-rajdhani font-bold text-[13px] 2xl:text-sm tracking-wider uppercase whitespace-nowrap transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'text-[#FECD08]'
                          : 'text-white/90 hover:text-[#FECD08]'
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.title}</span>
                      {hasSubs && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                            isActive ? 'rotate-180 text-[#FECD08]' : 'text-white/40'
                          }`}
                        />
                      )}
                    </a>
                  </div>
                )
              })}
            </div>

            {/* Right Action Icons (Search, Wishlist, Cart, Login) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/80 hover:text-[#FECD08] hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                aria-label="Wishlist"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/80 hover:text-[#FECD08] hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#FECD08] text-[#212121] text-[10px] font-bold font-rajdhani flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Cart Button */}
              <button
                aria-label="Shopping Cart"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/80 hover:text-[#FECD08] hover:bg-white/5 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#FECD08] text-[#212121] text-[10px] font-bold font-rajdhani flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login Button (Pill shaped, matching reference screenshot) */}
              <button className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#212121] hover:bg-[#282828] text-white hover:text-[#FECD08] font-rajdhani font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer group">
                <User className="w-4 h-4 text-[#FECD08] group-hover:scale-110 transition-transform" />
                <span>Login</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle Menu"
                className="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white hover:text-[#FECD08] hover:bg-white/5 transition-colors ml-1 cursor-pointer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {/* =========================================================================
            DESKTOP MEGA MENU DROPDOWN PANEL (WITHOUT DIVIDING LINES)
           ========================================================================= */}
        {activeDropdown && activeCategoryData && activeCategoryData.subcategories && (
          <div
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current)
            }}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 right-0 w-full bg-[#181818]/98 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] z-40 transition-all duration-200 animate-in fade-in slide-in-from-top-1"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7">
              
              {/* Mega Menu Top Header (Line removed as requested!) */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FECD08]" />
                  <h3 className="font-rajdhani font-bold text-xl uppercase tracking-wider text-white">
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

              {/* Mega Menu Grid of Cards (Visual Card Layout without dividing borders) */}
              {activeCategoryData.isMegaMenu ? (
                <div
                  className={`grid gap-5 ${
                    activeCategoryData.subcategories.length === 2
                      ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl'
                      : activeCategoryData.subcategories.length === 3
                      ? 'grid-cols-1 sm:grid-cols-3 max-w-5xl'
                      : activeCategoryData.subcategories.length === 4
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
                  }`}
                >
                  {activeCategoryData.subcategories.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.href}
                      className="group block rounded-2xl p-3 bg-[#222222] hover:bg-[#282828] transition-all duration-300 hover:shadow-xl hover:shadow-[#FECD08]/10 hover:-translate-y-1"
                    >
                      {/* Image Thumbnail Container */}
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-[#141414]">
                        <img
                          src={sub.image}
                          alt={sub.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                        {/* Top Badge */}
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
              ) : (
                /* Simple Standard Dropdown for items like Motorcycle Spares */
                <div className="max-w-md">
                  {activeCategoryData.subcategories.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.href}
                      className="flex items-center justify-between p-4 rounded-xl bg-[#222222] hover:bg-[#282828] group transition-all"
                    >
                      <div>
                        <div className="font-rajdhani font-bold text-lg text-white group-hover:text-[#FECD08] transition-colors">
                          {sub.title}
                        </div>
                        <div className="font-sora text-xs text-white/50 mt-0.5">
                          {sub.subtitle}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#FECD08] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              )}

            </div>
          </div>
        )}
      </nav>

      {/* =========================================================================
          MOBILE DRAWER MENU (RESPONSIVE NAVIGATION)
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-[#181818] flex flex-col z-10 overflow-hidden shadow-2xl animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
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

            {/* User Quick Login bar */}
            <div className="p-4 bg-[#212121] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FECD08]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-rajdhani font-bold text-base text-white">Welcome, Rider</div>
                  <div className="text-xs text-white/50 font-sora">Login to access your orders</div>
                </div>
              </div>
              <button className="px-4 py-1.5 rounded-full bg-[#FECD08] text-[#212121] font-rajdhani font-bold text-xs uppercase tracking-wider">
                Login
              </button>
            </div>

            {/* Scrollable Navigation List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {navigationData.map((item) => {
                const hasSubs = item.subcategories && item.subcategories.length > 0
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

                        {/* Subcategories Accordion */}
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
                            {item.viewAllHref && (
                              <a
                                href={item.viewAllHref}
                                className="inline-flex items-center gap-1.5 pt-2 text-xs font-rajdhani font-bold uppercase tracking-wider text-[#FECD08]"
                              >
                                <span>View All {item.title}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            )}
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

            {/* Drawer Footer */}
            <div className="p-4 bg-[#141414] text-xs text-white/50 text-center font-sora">
              <span>LBC MOTO &copy; {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE SEARCH MODAL OVERLAY
         ========================================================================= */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          <div className="relative w-full max-w-2xl bg-[#1e1e1e] rounded-2xl shadow-2xl p-6 z-10 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-3 flex-1 mr-4">
                <Search className="w-5 h-5 text-[#FECD08]" />
                <input
                  type="text"
                  placeholder="Search LBC MOTO Navigation, Fog Lights, Intercoms, Apparel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-white placeholder-white/40 text-base font-sora focus:outline-none"
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Popular Quick Searches */}
            <div className="mt-5">
              <div className="text-xs font-rajdhani font-bold uppercase tracking-wider text-white/50 mb-3">
                Trending Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'LBC MOTO Radar HUD',
                  'Carpuride Navigation',
                  'Auxiliary Fog Lights',
                  'ASMAX Intercom',
                  'Riding Jerseys',
                  'Balaclavas',
                  'Type-C Charger Mount',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 rounded-lg bg-[#282828] hover:bg-[#FECD08] text-white hover:text-[#212121] text-xs font-sora transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
