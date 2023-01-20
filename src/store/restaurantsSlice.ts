import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Restaurant } from '../types'
import { RootState } from './store'

type RestaurantsState = {
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
      state.restaurants.push({
        name: action.payload.name,
      })
    },
  },
})

export const { addRestaurant } = restaurantsSlice.actions
export const selectRestaurants = (state: RootState) =>
  state.restaurants.restaurants
export default restaurantsSlice.reducer
