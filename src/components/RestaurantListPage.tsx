import NewRestaurantForm from './NewRestaurantForm'

export default function RestaurantListPage() {
  return (
    <>
      <button type="button" data-test="addRestaurantButton">
        Add Restaurant
      </button>
      <NewRestaurantForm />
    </>
  )
}
