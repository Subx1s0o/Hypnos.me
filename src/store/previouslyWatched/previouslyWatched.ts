import { Product } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface PreviouslyWatchedState {
  previouslyWatched: Product[]
  addToPreviouslyWatched: (params: Product) => void
}

const usePreviouslyWatched = create<PreviouslyWatchedState>()(
  persist(
    set => ({
      previouslyWatched: [],

      addToPreviouslyWatched: params => {
        const newItem = params

        set(state => {
          const isAlreadyInList = state.previouslyWatched.some(
            product => product.id === newItem.id
          )
          if (!isAlreadyInList) {
            return {
              previouslyWatched: [...state.previouslyWatched, { ...newItem }]
            }
          }

          return state
        })
      }
    }),
    {
      name: 'previously-watched-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default usePreviouslyWatched
