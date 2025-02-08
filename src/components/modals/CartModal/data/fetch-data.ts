interface Ring {
  id: number
  name: string
  price: number
  image_url: string
  brand: string
  material: string
  size: number[]
  description: string
}
export const fetchData: Ring[] = [
  {
    id: 1,
    name: 'Gold Ring with Diamond',
    price: 200,
    image_url: '/images/HeroSection/make-order-d.avif',
    brand: 'Bvlgari',
    material: 'Gold 585',
    size: [16, 17, 18],
    description: 'Elegant gold ring with a diamond, perfect for a gift.'
  },
  {
    id: 2,
    name: 'Silver Ring with Stones',
    price: 850,
    image_url: '/images/HeroSection/make-order-d.avif',
    brand: 'Tiffany & Co.',
    material: 'Silver 925',
    size: [15, 16, 17],
    description: 'Elegant gold ring with a diamond, perfect for a gift.'
  },
  {
    id: 3,
    name: 'Gold Ring with Emerald',
    price: 150,
    image_url: '/images/HeroSection/make-order-d.avif',
    brand: 'Cartier',
    material: 'Gold 750',
    size: [15, 16, 17],
    description: 'A beautiful ring with an emerald, crafted in art-deco style.'
  }
]
