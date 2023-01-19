import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Restaurant } from '../../types'

export type RestaurantsState = {
  restaurants: Restaurant[]
}

const initialState: RestaurantsState = {
  restaurants: [],
}

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    addRestaurant: (state, action: PayloadAction<Restaurant>) => {
      console.log(action)
      state.restaurants.push({
        name: action.payload.name,
      })
    },
  },
})

export const { addRestaurant } = restaurantsSlice.actions
export const selectRestaurants = (state: RestaurantsState) => state.restaurants
export default restaurantsSlice.reducer
