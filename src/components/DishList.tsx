import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import type { Dish } from '../types'

type DishListProps = {
  dishes: Dish[]
  restaurantName: string
}

export default function DishList({ dishes, restaurantName }: DishListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" data-testid="headingRestaurantName">
        {restaurantName}
      </Typography>
      <List sx={{ bgcolor: 'lightgray' }}>
        {dishes.length === 0 && (
          <div key="no-dish">
            <ListItem>
              <ListItemText primary="No Dish added yet." />
            </ListItem>
          </div>
        )}
        {dishes.length > 0 &&
          dishes.map((dish, index) => (
            <div key={dish.name}>
              {index > 0 && index < dishes.length && <Divider />}
              <ListItem>
                <ListItemText primary={dish.name} />
              </ListItem>
            </div>
          ))}
      </List>
    </Box>
  )
}
