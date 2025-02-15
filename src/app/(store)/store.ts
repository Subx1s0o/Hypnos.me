import { Product } from '@/types/product-type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface CartState {
  cart: Product[]
  product: Product
  setProduct: (params: { newProduct: Product }) => void
  addToCart: (params: Product) => void
  removeFromCart: (params: { itemId: string }) => void
  emptyCart: () => void
  increaseQuantity: (params: { itemId: string }) => void
  decreaseQuantity: (params: { itemId: string }) => void
}

const useCart = create<CartState>()(
  persist(
    set => ({
      cart: [],
      product: {} as Product,

      setProduct: params => {
        const { newProduct } = params
        set(state => ({
          ...state,
          product: newProduct
        }))
      },

      addToCart: params => {
        const newItem = params
        set(state => {
          const existingProduct = state.cart.find(
            item => item.id === newItem.id
          )
          if (existingProduct) {
            return {
              cart: state.cart.map(item =>
                item.id === newItem.id
                  ? { ...item, cartCount: (item.cartCount || 0) + 1 }
                  : item
              )
            }
          } else {
            return { cart: [...state.cart, { ...newItem, cartCount: 1 }] }
          }
        })
      },

      increaseQuantity: params => {
        const { itemId } = params
        set(state => ({
          cart: state.cart.map(item =>
            item.id === itemId
              ? { ...item, cartCount: (item.cartCount || 0) + 1 }
              : item
          )
        }))
      },

      decreaseQuantity: params => {
        const { itemId } = params
        set(state => ({
          cart: state.cart
            .map(item => {
              if (item.id === itemId) {
                const newQuantity = (item.cartCount || 0) - 1

                return newQuantity > 0
                  ? { ...item, cartCount: newQuantity }
                  : item
              }

              return item
            })
            .filter(item => item.cartCount && item.cartCount > 0)
        }))
      },

      removeFromCart: params => {
        const { itemId } = params
        set(state => {
          const newCart = state.cart.filter(product => product.id !== itemId)

          return {
            ...state,
            cart: newCart
          }
        })
      },

      emptyCart: () => {
        set(state => {
          const newCart: Product[] = []

          return {
            ...state,
            cart: newCart
          }
        })
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useCart
