export type Product = {
  id: string
  title: string
  slug: string
  description: string
  category: string
  price: number
  discountPercent: number
  isPriceForPair: boolean
  quantity: number
  weight: number
  pairWeight: number
  width: number
  thickness: number
  views: number
  createdAt: Date
  updatedAt: Date
  media: MediaObject
  goldSamples: GoldSample[]
}

export type Media = {
  url: string
  status: 'pending' | 'fulfilled' | 'rejected' | 'not_uploaded'
}

export type MediaObject = {
  main: Media
  media_1: Media
  media_2: Media
  media_3: Media
  media_4: Media
}

type GoldSample = {
  sampleValue: string
  weightMale: number
  weightFemale: number
}
