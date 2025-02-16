import { Role } from './role'

export type User = {
  id: string
  firstName: string
  secondName: string
  email: string
  password: string
  bonuses: number
  role: Role
  bonusesHistory: BonusesHistoryEntry[]
  cart?: CartCleaned
  phone?: string
  birthday?: Date
  referredCode: string
  referredBy?: string
  subscribed: boolean
  createdAt: Date
  updatedAt: Date
}

type BonusesHistoryEntry = {
  amount: number
  receivedDate: Date
  description: string
}

export type CartCleaned = {
  items: CartItemCleaned[]
}

type CartItemCleaned = {
  quantity: number
  product: {
    id: string
    title: string
    price: number
    media?: { main: { url: string } }
  }
}
