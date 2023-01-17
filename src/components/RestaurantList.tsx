import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { Restaurant } from './RestaurantListPage'

type RestaurantListProps = {
  restaurants: Restaurant[]
}

export default function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      {restaurants.length > 0 && (
        <>
          <Typography variant="h5">Restaurants</Typography>
          <List sx={{ bgcolor: 'lightgray' }}>
            {restaurants.map((restaurant, index) => (
              <>
                {index > 0 && index < restaurants.length && <Divider />}
                <ListItem key={restaurant.name}>
                  <ListItemText primary={restaurant.name} />
                </ListItem>
              </>
            ))}
          </List>
        </>
      )}
    </Box>
  )
}
