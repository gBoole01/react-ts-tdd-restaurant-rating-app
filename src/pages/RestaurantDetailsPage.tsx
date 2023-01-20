import { Box, Button, Modal } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { slugifyRestaurantName } from '../components/RestaurantList'
import NewDishForm from '../components/NewDishForm'
import ErrorPage from './ErrorPage'
import DishList from '../components/DishList'
import BackButton from '../components/BackButton'
import { useAppSelector, useAppSelector as useSelector } from '../store/hooks'
import { selectRestaurants } from '../store/restaurantsSlice'
import { selectDishes } from '../store/dishesSlice'

export default function RestaurantDetailsPage() {
  const restaurants = useSelector(selectRestaurants)

  const { slug } = useParams()
  const restaurant = restaurants.find(
    (r) => slugifyRestaurantName(r.name) === slug,
  )
  if (!restaurant) return <ErrorPage />

  const [addDishModalOpen, setAddDishModalOpen] = useState(false)
  const dishes = useAppSelector(selectDishes)

  const handleOpen = () => {
    setAddDishModalOpen(true)
  }
  const handleClose = () => {
    setAddDishModalOpen(false)
  }

  return (
    <>
      <Box display="flex" gap={1}>
        <BackButton />
        <Button
          variant="contained"
          type="button"
          data-testid="addDishButton"
          onClick={handleOpen}
        >
          Add Dish
        </Button>
      </Box>
      <Modal
        open={addDishModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-add-dish"
        aria-describedby="modal-add-dish"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 450,
            bgcolor: 'white',
            border: '1px solid gray',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <NewDishForm closeModal={handleClose} />
        </Box>
      </Modal>
      <DishList restaurantName={restaurant.name} dishes={dishes} />
    </>
  )
}
