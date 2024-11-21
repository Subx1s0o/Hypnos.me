export type Product = {
  id: string
  title: string
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
  media: {
    main: Media
    media_1: Media
    media_2: Media
    media_3: Media
    media_4: Media
  }
  goldSamples: GoldSample[]
}

type Media = {
  url: string
  status: 'pending' | 'fulfilled' | 'rejected' | 'not_uploaded'
}

type GoldSample = {
  sampleValue: string
  weightMale: number
  weightFemale: number
}
