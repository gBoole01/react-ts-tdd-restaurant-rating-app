import { createContext, ReactNode, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

type RestaurantsProviderProps = {
  children: ReactNode
}

export type Restaurant = {
  name: string
}

type RestaurantsContextProps = {
  restaurants: Restaurant[]
  createRestaurant: (name: string) => void
}

const RestaurantsContext = createContext<RestaurantsContextProps>(
  {} as RestaurantsContextProps,
)

export function useRestaurants() {
  return useContext(RestaurantsContext)
}

export function RestaurantsProvider({ children }: RestaurantsProviderProps) {
  const [restaurants, setRestaurants] = useLocalStorage<Restaurant[]>(
    'restaurants',
    [],
  )

  function createRestaurant(name: string) {
    setRestaurants((prevRestaurants) => [...prevRestaurants, { name }])
  }

  const value = { restaurants, createRestaurant }

  return (
    <RestaurantsContext.Provider value={value}>
      {children}
    </RestaurantsContext.Provider>
  )
}
