import { useState, useEffect, useRef } from 'react'
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Compass
} from 'lucide-react'
import { navigationData } from '../data/navigationData'
import logoImg from '../assets/images/lbcmoto-logo.png'
import { useCart } from '../context/CartContext'

// Toggle to show/hide sub navigation (mega menu & dropdowns)
const SHOW_SUB_NAV = false

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartCount } = useCart()

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

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('home')
    } else {
      window.location.hash = ''
    }
  }

  const handleCategoriesClick = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('categories')
    } else {
      window.location.hash = '#categories'
    }
  }

  const activeCategoryData = navigationData.find((item) => item.id === activeDropdown)

  return (
    <>
      {/* Floating Transparent/Glass Navbar (Directly overlaid on Hero) */}
      <header
        ref={dropdownRef}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled ||
          currentPage === 'categories' ||
          currentPage === 'product' ||
          currentPage === 'collection' ||
          currentPage === 'cart' ||
          currentPage === 'checkout' ||
          currentPage === 'contact' ||
          currentPage === 'about' ||
          currentPage === 'privacy' ||
          currentPage === 'terms' ||
          currentPage === 'refund'
            ? 'bg-[#0A0C10]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
            : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: LBC MOTO Logo with Emblem */}
            <a
              href="#"
              onClick={handleLogoClick}
              className="flex items-center shrink-0 group cursor-pointer"
            >
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
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8">
              {/* Home Link */}
              <button
                type="button"
                onClick={handleLogoClick}
                className={`font-rajdhani font-bold text-sm xl:text-[15px] tracking-wider uppercase transition-colors cursor-pointer ${
                  currentPage === 'home'
                    ? 'text-[#FECD08]'
                    : 'text-white/80 hover:text-[#FECD08]'
                }`}
              >
                HOME
              </button>

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
                      href="#"
                      onClick={handleCategoriesClick}
                      className={`flex items-center gap-1 font-rajdhani font-medium text-sm xl:text-[15px] tracking-wide transition-colors duration-150 cursor-pointer ${
                        isActive
                          ? 'text-[#FECD08]'
                          : 'text-white/80 hover:text-[#FECD08]'
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
              
              {/* Capsule Search Bar */}
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
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                aria-label="Account"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/90 hover:text-[#FECD08] transition-colors cursor-pointer"
              >
                <User className="w-5 h-5 stroke-[2]" />
              </button>

              {/* Shopping Cart with Badge */}
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('cart')
                  else window.location.hash = '#cart'
                }}
                aria-label="Cart"
                className="relative w-9 h-9 rounded-full flex items-center justify-center text-white/90 hover:text-[#FECD08] transition-colors cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 stroke-[2]" />
                <span className="absolute top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#FECD08] text-[#212121] text-[10px] font-bold font-rajdhani flex items-center justify-center shadow">
                  {cartCount}
                </span>
              </button>

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

                <button
                  type="button"
                  onClick={handleCategoriesClick}
                  className="font-rajdhani font-bold text-sm tracking-wider uppercase text-[#FECD08] hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>VIEW ALL</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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
                    href="#"
                    onClick={handleCategoriesClick}
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
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-rajdhani text-[#FECD08] font-bold uppercase tracking-wider">
                          {sub.badge}
                        </div>
                      )}
                    </div>

                    {/* Text Details */}
                    <div>
                      <h4 className="font-rajdhani font-bold text-base text-white group-hover:text-[#FECD08] transition-colors line-clamp-1">
                        {sub.title}
                      </h4>
                      <p className="font-sora text-xs text-white/50 line-clamp-2 mt-1">
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

      {/* =========================================================================
          MOBILE SLIDE-OVER DRAWER MENU
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#181818] shadow-2xl flex flex-col z-10 border-l border-white/10">
            {/* Drawer Top */}
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <span className="font-rajdhani font-black text-xl text-white tracking-wider">
                MENU
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                <Search className="w-4 h-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent text-xs text-white placeholder-white/40 focus:outline-none w-full font-sora"
                />
              </div>

              {/* Direct Browse Categories Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onNavigate) onNavigate('categories')
                  else window.location.hash = '#categories'
                }}
                className="w-full mt-3 py-2.5 px-3 rounded-xl bg-[#FECD08] text-[#212121] font-rajdhani font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#212121]" />
                  <span>BROWSE ALL 15 CATEGORIES</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#212121]" />
              </button>

              {/* Fast Scroll Chips */}
              <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar pb-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    if (onNavigate) onNavigate('home')
                    else window.location.hash = ''
                  }}
                  className="shrink-0 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#FECD08] text-[10px] font-rajdhani font-bold uppercase text-white/90 hover:text-black border border-white/10 transition-colors"
                >
                  Home
                </button>
                {[
                  { label: 'Navigation', href: '#navigation-flyer' },
                  { label: 'Intercoms', href: '#categories-section' },
                  { label: 'Aux Lights', href: '#categories-section' },
                  { label: 'Brands', href: '#featured-products' }
                ].map((chip, cIdx) => (
                  <button
                    key={cIdx}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      if (currentPage !== 'home' && onNavigate) onNavigate('home')
                      setTimeout(() => {
                        const el = document.querySelector(chip.href)
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                    className="shrink-0 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#FECD08] text-[10px] font-rajdhani font-bold uppercase text-white/90 hover:text-black border border-white/10 transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (onNavigate) onNavigate('cart')
                  else window.location.hash = '#cart'
                }}
                className="w-full text-left py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#FECD08] hover:text-black font-rajdhani font-black text-sm uppercase tracking-wider text-white border border-white/10 flex items-center justify-between mb-2 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-[#FECD08]" />
                  <span>VIEW SHOPPING CART</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-[#FECD08] text-black font-black text-xs">
                  {cartCount}
                </span>
              </button>

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
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setMobileMenuOpen(false)
                                  if (onNavigate) onNavigate('categories')
                                }}
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
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false)
                          if (onNavigate) onNavigate('categories')
                        }}
                        className="w-full text-left block py-3 font-rajdhani font-bold text-lg uppercase tracking-wider text-white hover:text-[#FECD08] transition-colors"
                      >
                        {item.title}
                      </button>
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
