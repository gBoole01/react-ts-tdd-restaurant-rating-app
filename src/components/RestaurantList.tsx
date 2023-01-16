import { Restaurant } from './RestaurantListPage'

type RestaurantListProps = {
  restaurants: Restaurant[]
}

export default function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.name}>{restaurant.name}</li>
      ))}
    </ul>
  )
}
