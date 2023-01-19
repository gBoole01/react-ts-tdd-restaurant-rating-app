import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './restaurants/restaurantsSlice'

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
})

export default store
