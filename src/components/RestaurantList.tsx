import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import type { Restaurant } from '../types'

type RestaurantListProps = {
  restaurants: Restaurant[]
}

const slugify = (...args: (string | number)[]): string => {
  const value = args.join(' ')

  return value
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-') // separator
}

export default function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5">Restaurants</Typography>
      <List sx={{ bgcolor: 'lightgray' }}>
        {restaurants.length === 0 && (
          <div key="no-restaurant">
            <ListItem>
              <ListItemText primary="No Restaurant added yet." />
            </ListItem>
          </div>
        )}
        {restaurants.length > 0 &&
          restaurants.map((restaurant, index) => (
            <div key={restaurant.name}>
              {index > 0 && index < restaurants.length && <Divider />}
              <ListItem>
                <ListItemButton
                  component={Link}
                  to={`/restaurants/${slugify(restaurant.name)}`}
                >
                  <ListItemText primary={restaurant.name} />
                </ListItemButton>
              </ListItem>
            </div>
          ))}
      </List>
    </Box>
  )
}
