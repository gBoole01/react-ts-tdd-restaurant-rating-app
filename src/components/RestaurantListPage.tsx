import { Box, Button, Modal } from '@mui/material'
import { useState } from 'react'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'

export type Restaurant = {
  name: string
}

export default function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [addRestaurantModalOpen, setAddRestaurantModalOpen] = useState(false)

  const onAddRestaurant = ({ name }: Restaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, { name }])
    setAddRestaurantModalOpen(false)
  }

  const handleOpen = () => {
    setAddRestaurantModalOpen(true)
  }
  const handleClose = () => {
    setAddRestaurantModalOpen(false)
  }

  return (
    <>
      <Button
        variant="contained"
        type="button"
        data-testid="addRestaurantButton"
        onClick={handleOpen}
      >
        Add Restaurant
      </Button>
      <Modal
        open={addRestaurantModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-add-restaurant"
        aria-describedby="modal-add-restaurant"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            border: '1px solid gray',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <NewRestaurantForm onSave={onAddRestaurant} />
        </Box>
      </Modal>
      <RestaurantList restaurants={restaurants} />
    </>
  )
}
