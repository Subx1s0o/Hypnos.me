import { useEffect, useState } from 'react'

export function useLocalStorage(key: string, defaultState: string) {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem(key)

      return storedState ? JSON.parse(storedState) : defaultState
    }

    return defaultState
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [state, key])

  return [state, setState]
}
