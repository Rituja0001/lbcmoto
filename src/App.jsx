import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import ProductPage from './pages/ProductPage'
import CollectionPage from './pages/CollectionPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from './pages/AboutUsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsConditionsPage from './pages/TermsConditionsPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import { CartProvider } from './context/CartContext'

function AppContent() {
  const [selectedProductId, setSelectedProductId] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash.startsWith('#product/')) {
        return hash.replace('#product/', '')
      }
    }
    return 'garmin-zumo-xt2'
  })

  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      const path = window.location.pathname
      if (
        hash === '#categories' ||
        path.startsWith('/categories') ||
        path.startsWith('/category')
      ) {
        return 'categories'
      }
      if (
        hash.startsWith('#collection') ||
        path.startsWith('/collection')
      ) {
        return 'collection'
      }
      if (
        hash.startsWith('#product') ||
        path.startsWith('/product')
      ) {
        return 'product'
      }
      if (
        hash === '#cart' ||
        path.startsWith('/cart')
      ) {
        return 'cart'
      }
      if (
        hash === '#checkout' ||
        path.startsWith('/checkout')
      ) {
        return 'checkout'
      }
      if (
        hash === '#contact' ||
        path.startsWith('/contact')
      ) {
        return 'contact'
      }
      if (
        hash === '#about' ||
        path.startsWith('/about')
      ) {
        return 'about'
      }
      if (
        hash === '#privacy-policy' ||
        hash === '#privacy' ||
        path.startsWith('/privacy-policy')
      ) {
        return 'privacy'
      }
      if (
        hash === '#terms-and-conditions' ||
        hash === '#terms' ||
        path.startsWith('/terms-and-conditions')
      ) {
        return 'terms'
      }
      if (
        hash === '#refund-policy' ||
        hash === '#shipping-policy' ||
        hash === '#warranty' ||
        path.startsWith('/refund-policy')
      ) {
        return 'refund'
      }
    }
    return 'home'
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#categories') {
        setCurrentPage('categories')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash.startsWith('#collection')) {
        setCurrentPage('collection')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#cart') {
        setCurrentPage('cart')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#checkout') {
        setCurrentPage('checkout')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#contact') {
        setCurrentPage('contact')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#about') {
        setCurrentPage('about')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#privacy-policy' || hash === '#privacy') {
        setCurrentPage('privacy')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#terms-and-conditions' || hash === '#terms') {
        setCurrentPage('terms')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#refund-policy' || hash === '#shipping-policy' || hash === '#warranty') {
        setCurrentPage('refund')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash.startsWith('#product')) {
        if (hash.startsWith('#product/')) {
          const id = hash.replace('#product/', '')
          if (id) setSelectedProductId(id)
        }
        setCurrentPage('product')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#home' || !hash) {
        setCurrentPage('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page, param) => {
    setCurrentPage(page)
    if (page === 'categories') {
      window.location.hash = '#categories'
    } else if (page === 'collection') {
      window.location.hash = '#collection'
    } else if (page === 'cart') {
      window.location.hash = '#cart'
    } else if (page === 'checkout') {
      window.location.hash = '#checkout'
    } else if (page === 'contact') {
      window.location.hash = '#contact'
    } else if (page === 'about') {
      window.location.hash = '#about'
    } else if (page === 'privacy') {
      window.location.hash = '#privacy-policy'
    } else if (page === 'terms') {
      window.location.hash = '#terms-and-conditions'
    } else if (page === 'refund') {
      window.location.hash = '#refund-policy'
    } else if (page === 'product') {
      const pId = param || selectedProductId || 'garmin-zumo-xt2'
      setSelectedProductId(pId)
      window.location.hash = `#product/${pId}`
    } else {
      window.location.hash = ''
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectProduct = (productId) => {
    const pId = productId || 'garmin-zumo-xt2'
    setSelectedProductId(pId)
    setCurrentPage('product')
    window.location.hash = `#product/${pId}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen w-full bg-[#0A0C10] text-white flex flex-col font-sora selection:bg-[#FECD08] selection:text-[#212121] relative overflow-x-hidden">
      {/* Global Transparent Sticky Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Dynamic View: HomePage, CategoriesPage, CollectionPage, ProductPage, CartPage, CheckoutPage */}
      {currentPage === 'categories' ? (
        <CategoriesPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateCollection={() => handleNavigate('collection')}
          onSelectProduct={handleSelectProduct}
        />
      ) : currentPage === 'collection' ? (
        <CollectionPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateCategories={() => handleNavigate('categories')}
          onSelectProduct={handleSelectProduct}
        />
      ) : currentPage === 'product' ? (
        <ProductPage
          productId={selectedProductId}
          onNavigateHome={() => handleNavigate('home')}
          onNavigateCategories={() => handleNavigate('categories')}
          onNavigateCheckout={() => handleNavigate('checkout')}
          onSelectProduct={handleSelectProduct}
        />
      ) : currentPage === 'cart' ? (
        <CartPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateCategories={() => handleNavigate('categories')}
          onNavigateCheckout={() => handleNavigate('checkout')}
          onSelectProduct={handleSelectProduct}
        />
      ) : currentPage === 'checkout' ? (
        <CheckoutPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateCart={() => handleNavigate('cart')}
          onNavigateCategories={() => handleNavigate('categories')}
        />
      ) : currentPage === 'contact' ? (
        <ContactUsPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateCategories={() => handleNavigate('categories')}
        />
      ) : currentPage === 'about' ? (
        <AboutUsPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateCollection={() => handleNavigate('collection')}
          onNavigateCategories={() => handleNavigate('categories')}
          onNavigateContact={() => handleNavigate('contact')}
        />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicyPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigateTerms={() => handleNavigate('terms')}
          onNavigateRefund={() => handleNavigate('refund')}
        />
      ) : currentPage === 'terms' ? (
        <TermsConditionsPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigatePrivacy={() => handleNavigate('privacy')}
          onNavigateRefund={() => handleNavigate('refund')}
        />
      ) : currentPage === 'refund' ? (
        <RefundPolicyPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigatePrivacy={() => handleNavigate('privacy')}
          onNavigateTerms={() => handleNavigate('terms')}
        />
      ) : (
        <HomePage
          onNavigateCategories={() => handleNavigate('categories')}
          onNavigateCollection={() => handleNavigate('collection')}
          onSelectProduct={handleSelectProduct}
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}
