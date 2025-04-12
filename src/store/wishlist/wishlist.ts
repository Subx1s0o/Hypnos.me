import { Product } from '@/types/product-type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface WishlistState {
  wishlist: Product[]
  addToWishlist: (params: Product) => void
  removeFromWishlist: (params: { id: string }) => void
}

const useWishlist = create<WishlistState>()(
  persist(
    set => ({
      wishlist: [],
      message: '',

      addToWishlist: params => {
        const newItem = params
        set(state => {
          return { wishlist: [...state.wishlist, { ...newItem }] }
        })
      },

      removeFromWishlist: params => {
        const { id } = params
        set(state => {
          const newWishlist = state.wishlist.filter(product => product.id !== id)

          return {
            wishlist: newWishlist
          }
        })
      }
    }),
    {
      name: 'wishlist-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useWishlist
