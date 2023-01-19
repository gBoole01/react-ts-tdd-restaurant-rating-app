import { Box, Button, Modal } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { slugifyRestaurantName } from '../components/RestaurantList'
import NewDishForm from '../components/NewDishForm'
import { useRestaurants } from '../contexts/RestaurantsProvider'
import ErrorPage from './ErrorPage'
import type { Dish } from '../types'
import DishList from '../components/DishList'

export default function RestaurantDetailsPage() {
  const { restaurants } = useRestaurants()
  const { slug } = useParams()
  const restaurant = restaurants.find(
    (r) => slugifyRestaurantName(r.name) === slug,
  )
  if (!restaurant) return <ErrorPage />

  const [addDishModalOpen, setAddDishModalOpen] = useState(false)
  const [dishes, setDishes] = useState<Dish[]>([])

  const addNewDish = (name: string) => {
    setDishes((prevDishes) => [...prevDishes, { name }])
  }

  const handleOpen = () => {
    setAddDishModalOpen(true)
  }
  const handleClose = () => {
    setAddDishModalOpen(false)
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
          <NewDishForm closeModal={handleClose} addNewDish={addNewDish} />
        </Box>
      </Modal>
      <DishList restaurantName={restaurant.name} dishes={dishes} />
    </>
  )
}
