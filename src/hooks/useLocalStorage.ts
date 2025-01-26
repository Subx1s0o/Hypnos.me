import { useEffect, useState } from 'react'

export function useLocalStorage(key: string, defaultState: string) {
  const [state, setState] = useState(() => {
    const storedState = window.localStorage.getItem(key)

    return storedState ? JSON.parse(storedState) : defaultState
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState]
}

