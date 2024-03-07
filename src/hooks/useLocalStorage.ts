import { useState, useEffect } from 'react'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const savedData = localStorage.getItem(key)
  const initialState: T = savedData ? JSON.parse(savedData) : initialValue

  const [value, setValue] = useState<T>(initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
