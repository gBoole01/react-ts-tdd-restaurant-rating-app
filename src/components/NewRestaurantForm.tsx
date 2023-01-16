export default function NewRestaurantForm() {
  return (
    <div>
      <input type="text" data-test="newRetaurantName" />
      <button type="submit" data-test="saveNewRestaurantButton">
        Save
      </button>
    </div>
  )
}
