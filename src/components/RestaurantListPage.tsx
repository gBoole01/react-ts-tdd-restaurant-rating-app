import { useState } from 'react'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'

export type Restaurant = {
  name: string
}

export default function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const onAddRestaurant = ({ name }: { name: string }) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, { name }])
  }

  return (
    <>
      <button type="button" data-testid="addRestaurantButton">
        Add Restaurant
      </button>
      <NewRestaurantForm onSave={onAddRestaurant} />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}
