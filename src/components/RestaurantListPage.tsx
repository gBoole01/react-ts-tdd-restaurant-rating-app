import { useState } from 'react'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'

export type Restaurant = {
  name: string
}

export default function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [showRestaurantForm, setShowRestaurantForm] = useState(false)

  const onAddRestaurant = ({ name }: Restaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, { name }])
    setShowRestaurantForm(false)
  }

  return (
    <>
      <button
        type="button"
        data-testid="addRestaurantButton"
        onClick={() => setShowRestaurantForm(true)}
      >
        Add Restaurant
      </button>
      {showRestaurantForm && <NewRestaurantForm onSave={onAddRestaurant} />}
      <RestaurantList restaurants={restaurants} />
    </>
  )
}
