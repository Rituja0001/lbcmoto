export const COLLECTION_PRODUCTS = [
  {
    id: 'bmw-bm6-dashcam-series',
    name: 'BMW - BM6 6" & Dashcam Series',
    price: 28999,
    originalPrice: 34999,
    rating: 5,
    reviewsCount: 89,
    type: 'BMW Series',
    model: 'BM6',
    inStock: true,
    badge: null,
    image: '/images/products/bmw-bm6-navigation.webp',
    variants: [
      'BM6 Display Only',
      'With Dual 4K Dashcam',
      'With BMW Dedicated Bracket'
    ]
  },
  {
    id: 'bmw-s5-pro-display',
    name: 'BMW - S5 PRO 5.5" Display Dashcam Series with BMW Bracket',
    price: 32998,
    originalPrice: 38999,
    rating: 5,
    reviewsCount: 145,
    type: 'BMW Series',
    model: 'S5 PRO',
    inStock: true,
    badge: null,
    image: '/images/products/lbc-s5-pro-display.webp',
    variants: [
      'Complete BMW Kit with Bracket',
      'Display Unit Only'
    ]
  },
  {
    id: 'bmw-bm300-display',
    name: 'BMW - BM300 Display Only',
    price: 19999,
    originalPrice: 23999,
    rating: 5,
    reviewsCount: 62,
    type: 'BMW Series',
    model: 'BM300',
    inStock: true,
    badge: null,
    image: '/images/products/bmw-bm6-navigation.webp',
    variants: [
      'Standard BMW Mount',
      'Bar Clamp Edition'
    ]
  },
  {
    id: 'm3-elite-pro-dashcam',
    name: 'UNIVERSAL Plug and Play - M3 Elite Pro 6" Dashcam series, TPMS',
    price: 30999,
    originalPrice: 36999,
    rating: 5,
    reviewsCount: 78,
    type: 'Universal Series',
    model: 'M3 Elite',
    inStock: true,
    badge: null,
    image: '/images/products/b3-elite-dashcam.webp',
    variants: [
      'Universal Plug & Play Kit',
      'With External TPMS Sensors'
    ]
  },
  {
    id: 'b3-elite-dashcam-radar',
    name: 'B3 Elite Dashcam Series with Blind Spot detection',
    price: 25999,
    originalPrice: 29999,
    rating: 5,
    reviewsCount: 91,
    type: 'Radar Series',
    model: 'B3 Elite',
    inStock: true,
    badge: 'NEW',
    badgeBg: 'bg-red-600 text-white font-black',
    image: '/images/products/b3-elite-dashcam.webp',
    variants: [
      'Dual Radar + Dashcam Complete Kit',
      'Rear Radar Only'
    ]
  },
  {
    id: 'm3-elite-mag-quick-release',
    name: 'UNIVERSAL MAG Quick Release - M3 ELITE 6" INCH Dashcam Series, TPMS',
    price: 20999,
    originalPrice: 24999,
    rating: 5,
    reviewsCount: 54,
    type: 'Universal Series',
    model: 'M3 Elite',
    inStock: false,
    badge: 'OUT OF STOCK',
    badgeBg: 'bg-zinc-800 text-zinc-400 font-bold',
    image: '/images/products/bmw-bm6-navigation.webp',
    variants: [
      'Mag Quick Release Mount Kit',
      'Display Only'
    ]
  }
]

export const COLLECTION_FILTERS = {
  types: ['All Types', 'BMW Series', 'Universal Series', 'Radar Series'],
  models: ['All Models', 'BM6', 'S5 PRO', 'BM300', 'M3 Elite', 'B3 Elite']
}
