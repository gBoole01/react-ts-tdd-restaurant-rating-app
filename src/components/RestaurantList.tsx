import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {
  RestaurantsState,
  selectRestaurants,
} from '../store/restaurants/restaurantsSlice'
import type { Restaurant } from '../types'

export const slugifyRestaurantName = (...args: (string | number)[]): string => {
  const value = args.join(' ')

  return value
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-') // separator
}

export default function RestaurantList() {
  const location = useLocation()
  const restaurantsState = (useSelector(
    selectRestaurants,
  ) as unknown) as RestaurantsState
  const restaurants: Restaurant[] = restaurantsState.restaurants || []

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
                  to={`/restaurants/${slugifyRestaurantName(restaurant.name)}`}
                  state={{ from: location }}
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
