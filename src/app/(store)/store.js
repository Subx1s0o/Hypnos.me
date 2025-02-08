import { create } from 'zustand'

const useCart = create(set => ({
  cart: [],
  product: {},
  openModal:false,
  setOpenModal:()=>{
    set(state => {
      return {
       ...state,
        openModal:!state.openModal
      }
    })
  },
  setProduct: params => {
    const { newProduct } = params
    set(state => {
      return {
        ...state,
        product: newProduct
      }
    })
  },
  addToCart: params => {
    const { newItem } = params
    set(state => {
      const newCart = [...state.cart, newItem]

      return {
        ...state,
        cart: newCart
      }
    })
  },
  removeFromCart: params => {
    const { itemId } = params
    set(state => {
      const newCart = state.cart.filter(
        element,
        elementId => elementId !== itemId
      )

      return {
        ...state,
        cart: newCart
      }
    })
  },
  emptyCart: () => {
    set(state => {
      const newCart = []

      return {
        ...state,
        cart: newCart
      }
    })
  }
}))

export default useCart
