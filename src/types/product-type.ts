import { ProductCategories } from './product-categories.type'

export type MediaObject = {
  main: Media
  media_1?: Media
  media_2?: Media
  media_3?: Media
  media_4?: Media
}

export type RingDetails = {
  purityValue: number
  maleWeight: number
  femaleWeight: number
  pairWeight?: number
}

export type DiamondDetails = {
  quantity: number
  weight: number
  diameter: number
  purity: number
  color: string
}

export type Product = {
  id: string
  title: string
  slug?: string
  createdAt?: Date
  updatedAt?: Date
  media: MediaObject
  price: number
  discountPercent?: number
  isPriceForPair?: boolean
  description?: string
  category?: ProductCategories
  width?: number
  thickness?: number
  views?: number
  quantity?: number | 0
  ringDetails?: RingDetails[]
  diamondDetails?: DiamondDetails
  sizeDetails?: number[]
  cartCount?: number
  rating?: number
}

export type Media = {
  url: string
  status: 'fulfilled' | 'rejected' | 'not_uploaded'
}
