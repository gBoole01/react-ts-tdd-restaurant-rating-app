import { Box, Divider, List, ListItem, ListItemText } from '@mui/material'
import { Restaurant } from './RestaurantListPage'

type RestaurantListProps = {
  restaurants: Restaurant[]
}

export default function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <Box sx={{ width: '100%', bgcolor: 'lightgray' }}>
      {restaurants.length > 0 && (
        <List>
          {restaurants.map((restaurant, index) => (
            <>
              {index > 0 && index < restaurants.length && <Divider />}
              <ListItem key={restaurant.name}>
                <ListItemText primary={restaurant.name} />
              </ListItem>
            </>
          ))}
        </List>
      )}
    </Box>
  )
}
