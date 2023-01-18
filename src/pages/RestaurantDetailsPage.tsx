import { Button, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { slugifyRestaurantName } from '../components/RestaurantList'
import { useRestaurants } from '../contexts/RestaurantsProvider'
import ErrorPage from './ErrorPage'

export default function RestaurantDetailsPage() {
  const { restaurants } = useRestaurants()
  const { slug } = useParams()
  const restaurant = restaurants.find(
    (r) => slugifyRestaurantName(r.name) === slug,
  )

  if (!restaurant) return <ErrorPage />

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
      <Typography variant="h5" data-testid="headingRestaurantName">
        {restaurant.name}
      </Typography>
    </>
  )
}
