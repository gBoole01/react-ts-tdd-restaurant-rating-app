import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Dish } from '../types'
import { RootState } from './store'

type DishesState = {
  dishes: Dish[]
}

const initialState: DishesState = {
  dishes: [],
}

const DishesSlice = createSlice({
  name: 'Dishes',
  initialState,
  reducers: {
    addDish: (state, action: PayloadAction<Dish>) => {
      state.dishes.push({
        name: action.payload.name,
      })
    },
  },
})

export const { addDish } = DishesSlice.actions
export const selectDishes = (state: RootState) => state.dishes.dishes
export default DishesSlice.reducer
