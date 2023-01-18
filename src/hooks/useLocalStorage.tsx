import { useEffect, useState } from 'react'

const PREFIX = 'restaurant-rating-app-'

export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)()
    }
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [value, prefixedKey])

  return [value, setValue] as [T, typeof setValue]
}
