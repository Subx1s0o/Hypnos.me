import { Product } from '@/types/product-type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface CartState {
  cart: Product[]
  message: string
  addToCart: (params: Product) => void
  removeFromCart: (params: { itemId: string }) => void
  increaseQuantity: (params: { itemId: string }) => void
  decreaseQuantity: (params: { itemId: string }) => void
}

const getTotalCartCount = (cart: Product[]) => {
  return cart.reduce((total, item) => total + (item.cartCount || 0), 0)
}

const useCart = create<CartState>()(
  persist(
    set => ({
      cart: [],
      message: '',

      addToCart: params => {
        const newItem = params
        set(state => {
          const totalCartCount = getTotalCartCount(state.cart)

          if (totalCartCount >= 99) {
            return {
              message: 'The cart is full! Max count 99 items in the cart.'
            }
          } else {
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
          }
        })
      },

      increaseQuantity: params => {
        const { itemId } = params
        set(state => {
          const totalCartCount = getTotalCartCount(state.cart)

          if (totalCartCount >= 99) {
            return {
              message: 'The cart is full! Max count 99 items in the cart.'
            }
          } else {
            return {
              cart: state.cart.map(item =>
                item.id === itemId
                  ? { ...item, cartCount: (item.cartCount || 0) + 1 }
                  : item
              ),
              message: ''
            }
          }
        })
      },

      decreaseQuantity: params => {
        const { itemId } = params
        set(state => {
          const updatedCart = state.cart
            .map(item => {
              if (item.id === itemId) {
                const newQuantity = (item.cartCount || 0) - 1

                return newQuantity > 0
                  ? { ...item, cartCount: newQuantity }
                  : { ...item, cartCount: 0 }
              }

              return item
            })
            .filter(item => item.cartCount || 0 > 0)

          const newTotalCartCount = getTotalCartCount(updatedCart)

          const message = newTotalCartCount < 99 ? '' : state.message

          return {
            cart: updatedCart,
            message: message
          }
        })
      },

      removeFromCart: params => {
        const { itemId } = params
        set(state => {
          const newCart = state.cart.filter(product => product.id !== itemId)

          return {
            cart: newCart,
            message: newCart.length === 0 ? 'Cart is empty.' : ''
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
