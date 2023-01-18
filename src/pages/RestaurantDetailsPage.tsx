import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function RestaurantDetailsPage() {
  const { slug } = useParams()
  const handleOpen = () => {
    console.log('handleOpenCalled')
  }

  return (
    <>
      <Button
        variant="contained"
        type="button"
        data-testid="addDishButton"
        onClick={handleOpen}
      >
        Add Dish
      </Button>
      <h1>{slug}</h1>
    </>
  )
}
