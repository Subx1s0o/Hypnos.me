import { MediaObject } from './product-type'

export type Order = {
  id: string
  title: string
  media: MediaObject
  price: number
  discountPercent?: number
  isPriceForPair?: boolean
  purchaseDate: string
}
