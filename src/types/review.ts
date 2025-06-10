export interface Review {
  id: string
  name: string
  date: string
  rate: number
  comment: string
}


export interface ReviewFormValues {
  name: string
  email: string
  comment: string
  rate: number
  date: string
}