import NewRestaurantForm from './NewRestaurantForm'

export default function RestaurantListPage() {
  const saveHandler = ({ name }: { name: string }) => {
    console.log(name)
  }

  return (
    <>
      <button type="button" data-testid="addRestaurantButton">
        Add Restaurant
      </button>
      <NewRestaurantForm onSave={saveHandler} />
    </>
  )
}
