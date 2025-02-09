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
          const newCart = [...state.cart, newItem]
          return {
            ...state,
            cart: newCart
          }
        })
      },
      // increaseQuantity: productId =>
      //               set(state => ({ cart: state.cart.map(item => (item._id === productId ? { ...item, quantity: (item.quantity || 0) + 1 } : item)) })),
      //           decreaseQuantity: productId =>
      //               set(state => ({
      //                   cart: state.cart
      //                       .map(item => {
      //                           if (item._id === productId) {
      //                               const newQuantity = (item.quantity || 0) - 1;
      //                               return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      //                           }
      //                           return item;
      //                       })
      //                       .filter(item => item.quantity && item.quantity > 0),
      //               })),
      removeFromCart: params => {
        console.log('params', params)
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
      storage: createJSONStorage(() => sessionStorage) // localStorage ?
    }
  )
)

export default useCart
