import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

const INITIAL_CART = [
  {
    id: 'garmin-zumo-xt2',
    name: 'Garmin zūmo XT2 Motorcycle GPS Navigator',
    price: 53999,
    originalPrice: 62999,
    image: '/images/products/garmin-zumo-xt2.webp',
    variant: 'Standard Motorcycle Kit',
    quantity: 1,
    inStock: true
  }
]

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('lbc_cart')
        if (saved) return JSON.parse(saved)
      } catch (err) {
        console.error('Error loading cart from localStorage', err)
      }
    }
    return INITIAL_CART
  })

  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [couponError, setCouponError] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem('lbc_cart', JSON.stringify(cartItems))
    } catch (err) {
      console.error('Error saving cart to localStorage', err)
    }
  }, [cartItems])

  const addToCart = (product, quantity = 1, variant = '') => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.id === product.id && item.variant === (variant || item.variant || 'Standard')
      )

      if (existingIdx > -1) {
        const updated = [...prev]
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity
        }
        return updated
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice || Math.round(product.price * 1.15),
          image: product.image || (product.images && product.images[0]?.url) || '/images/products/garmin-zumo-xt2.webp',
          variant: variant || (product.bundles && product.bundles[0]?.name) || (product.variants && product.variants[0]) || 'Standard Kit',
          quantity: quantity,
          inStock: product.inStock !== false
        }
      ]
    })
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, variant)
      return
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id && item.variant === variant) {
          return { ...item, quantity }
        }
        return item
      })
    )
  }

  const removeFromCart = (id, variant) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.variant === variant)))
  }

  const clearCart = () => {
    setCartItems([])
    setAppliedCoupon(null)
  }

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase()
    if (cleanCode === 'MOTO10') {
      setAppliedCoupon({ code: 'MOTO10', discountPercent: 10, label: '10% Off Rider Special' })
      setCouponError('')
      return true
    }
    if (cleanCode === 'RIDER500') {
      setAppliedCoupon({ code: 'RIDER500', flatDiscount: 500, label: 'Flat ₹500 Off' })
      setCouponError('')
      return true
    }
    setCouponError('Invalid coupon code. Try MOTO10 or RIDER500')
    return false
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
    setCouponError('')
  }

  // Calculations
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const cartOriginalTotal = cartItems.reduce((acc, item) => acc + (item.originalPrice || item.price) * item.quantity, 0)
  
  let discountAmount = 0
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountAmount = Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100)
    } else if (appliedCoupon.flatDiscount) {
      discountAmount = Math.min(cartSubtotal, appliedCoupon.flatDiscount)
    }
  }

  const shippingFee = cartSubtotal > 999 || cartItems.length === 0 ? 0 : 150
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee)
  const totalSavings = (cartOriginalTotal - cartSubtotal) + discountAmount

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        cartOriginalTotal,
        discountAmount,
        appliedCoupon,
        couponError,
        applyCoupon,
        removeCoupon,
        shippingFee,
        cartTotal,
        totalSavings
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
